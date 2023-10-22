import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TiendaNubeEventDto } from 'src/infra/tiendanube/EventDto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  sayHi() {
    return 'hello';
  }

  @Post('')
  receiveEvent(@Body() body: TiendaNubeEventDto) {
    console.log(body);
    if (['product/created', 'product/updated'].includes(body.event))
      return this.productsService.upsert(body);
    if (body.event === 'product/deleted')
      return this.productsService.delete(body);
  }
}
