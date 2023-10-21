import { Controller, Post, Get } from '@nestjs/common';
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

  @Post('/create')
  createOrder(body: TiendaNubeEvent) {}
}
