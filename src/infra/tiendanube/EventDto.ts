import { IsInt, IsNotEmpty, IsIn, IsString } from 'class-validator';

export class TiendaNubeEventDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsIn([
    'app/uninstalled',
    'cart/created',
    'cart/updated',
    'category/created',
    'category/updated',
    'category/deleted',
    'order/created',
    'order/updated',
    'order/packed',
    'order/paid',
    'order/fulfilled',
    'order/cancelled',
    'product/created',
    'product/updated',
    'product/deleted',
  ])
  event: string;

  @IsString()
  @IsNotEmpty()
  store_id: number;
}
