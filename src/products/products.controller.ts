import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TiendaNubeEvent } from 'src/infra/tiendanube/types/events';
import { TiendaNubeClient } from 'src/infra/tiendanube';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  sayHi() {
    return 'hello';
  }

  @Post('create')
  async createProduct(@Body() body: TiendaNubeEvent) {
    const TnCli = new TiendaNubeClient();
    const prod = await TnCli.getProduct(body.id.toString());
    return prod;
  }
}
