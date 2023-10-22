import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { TiendaNubeClient } from 'src/infra/tiendanube';
import { TiendaNubeEvent } from 'src/infra/tiendanube/types/events';

@Injectable()
export class ProductsService {
  async upsert(body: TiendaNubeEvent) {
    const tnCli = new TiendaNubeClient();
    const tnProd = await tnCli.getProduct(body.id.toString());
    const supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );

    const { data, error } = await supabaseClient.from('products').upsert(
      {
        id: tnProd.id,
        created_at: tnProd.createdAt,
        name: tnProd.name.es,
        price: tnProd.variants[0].price,
        published: tnProd.published,
        img: tnProd.images[0].src,
      },
      { onConflict: 'name, price, published, img' },
    );

    if (error) throw new Error(error.message);

    return data;
  }

  async delete(body: TiendaNubeEvent) {
    const supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY,
    );

    const { error } = await supabaseClient
      .from('products')
      .delete()
      .eq('id', body.id);

    if (error) throw new Error(error.message);

    return body.id;
  }
}
