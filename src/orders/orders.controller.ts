import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { TiendaNubeEvent } from 'src/infra/tiendanube/types/events';
import { TiendaNubeEventDto } from 'src/infra/tiendanube/EventDto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  testOrder() {
    // const tiendanubeClient = new TiendaNubeClient();
    return;
  }

  @Post('')
  receiveEvent(@Body() body: TiendaNubeEventDto) {
    if (['order/created', 'order/updated'].includes(body.event))
      return this.ordersService.upsert(body);
    if (body.event === 'order/packed') return null;
    if (body.event === 'order/deleted')
      return this.ordersService.delete(body);
  }
}
