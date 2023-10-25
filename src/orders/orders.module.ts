import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Supabase } from 'src/infra/supabase';
import { ConfigService } from '@nestjs/config';
import { ListsService } from 'src/lists/lists.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, Supabase, ConfigService, ListsService],
})
export class OrdersModule {}
