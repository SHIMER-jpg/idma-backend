import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import { Supabase } from 'src/infra/supabase';
import { sortVariantValues } from 'src/utils';

@Injectable()
export class ListsService {
  constructor(private readonly supabase: Supabase) {}

  async getPdf(id: number) {
    const { data: orders, error } = await this.supabase
      .getClient()
      .from('order_items')
      .select(`*, orders(*),products(*), lists(status,workers(name))`)
      .eq('list_id', id);

    if (error) throw new Error(error.message);

    const browser = await puppeteer.launch({ headless: 'new' });

    // Create a new page
    const page = await browser.newPage();

    // Set the content of the page
    await page.setContent(`
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de Pedidos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        table {
            border-collapse: collapse;
            width: 100%;
            margin: 0 auto;
        }

        th, td {
            border: 1px solid #e0e0e0;
            padding: 8px 12px;
            text-align: left;
        }

        th {
            background-color: #f5f5f5;
            font-weight: 600;
        }

        tbody tr:hover {
            background-color: #f9f9f9;
        }
        .header-container {
          display: flex;
          justify-content: space-between; /* This will push them to the edges */
          align-items: center; /* This will vertically align them in the center */
          margin-bottom: 20px; /* Optional: to give some space before the table */
      }
    </style>
</head>

<body>
<div class="header-container">
<h2>Lista: ${orders[0].lists.workers.name} ${orders[0].list_id}</h2>
<p>Estado: ${orders[0].lists.status}</p>
</div>    
<table>
        <thead>
            <tr>
                <th>Número de Pedido</th>
                <th>Nombre del Contacto</th>
                <th>Nota del Propietario</th>
                <th>Nombre del Producto</th>
                <th>Nota</th>
                <th>Talle</th>
                <th>Color</th>
    
            </tr>
        </thead>
        <tbody>
        ${orders
          .map((order) => {
            // Sort the variant values to ensure sizes come first
            const sortedVariants = sortVariantValues(order.variant_values);
            return `
              <tr>
                  <td>${order.orders.number}</td>
                  <td>${order.orders.contact_name}</td>
                  <td>${order.orders.owner_note || ''}</td>
                  <td>${order.products.name}</td>
                  <td>${order.note || ''}</td>
                  <td>${sortedVariants[0]}</td> <!-- Size -->
                  <td>${sortedVariants[1]}</td> <!-- Color -->
              </tr>
          `;
          })
          .join('')}
        </tbody>
    </table>
</body>`);

    // Render the page as a PDF
    const pdf = await page.pdf({ format: 'a4', landscape: true });

    // Close the browser
    await browser.close();

    return pdf;
  }

  async assignList(orderItems: { id: number }[]) {
    console.log(
      '🚀 ~ file: list.service.ts:9 ~ ListService ~ assignList ~ orderItems:',
      orderItems,
    );
    //Get active lists
    const lists = await this.supabase
      .getClient()
      .from('lists_computed')
      .select(``)
      .eq('status', 'OPEN');
    console.log(
      '🚀 ~ file: list.service.ts:19 ~ ListService ~ assignList ~ lists:',
      lists,
    );

    //  If no active list then create
    // Update lists and close
  }
}
