import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TiendaNubeEvent } from 'src/infra/tiendanube/types/events';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  sayHi() {
    return 'hello';
  }

  @Post('')
  receiveEvent(@Body() body: TiendaNubeEvent) {
    if (['product/created', 'product/updated'].includes(body.event))
      return this.productsService.upsert(body);
    if (body.event === 'product/deleted')
      return this.productsService.delete(body);
  }
}
