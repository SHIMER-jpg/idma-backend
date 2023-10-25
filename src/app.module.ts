import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ListsModule } from './lists/lists.module';
import { Supabase, SupabaseModule } from './infra/supabase';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OrdersModule,
    ProductsModule,
    ListsModule,
    SupabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService, Supabase],
})
export class AppModule {}
