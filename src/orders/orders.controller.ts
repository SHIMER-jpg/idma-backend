import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TiendaNubeEvent } from 'src/infra/tiendanube/types/events';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  testOrder() {
    // const tiendanubeClient = new TiendaNubeClient();
    return;
  }

  @Post('')
  receiveEvent(@Body() body: TiendaNubeEvent) {
    if (['product/created', 'product/updated'].includes(body.event))
      return this.ordersService.upsert(body);
    if (body.event === 'order/packed') return;
    if (body.event === 'product/deleted')
      return this.ordersService.delete(body);
  }
}
