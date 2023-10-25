import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ConfigService } from '@nestjs/config';
import { Supabase } from 'src/infra/supabase';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ConfigService, Supabase],
})
export class ProductsModule {}
