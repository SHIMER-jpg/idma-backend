import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { Supabase } from 'src/infra/supabase';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ListsController],
  providers: [ListsService, Supabase, ConfigService],
  exports: [ListsService],
})
export class ListsModule {}
