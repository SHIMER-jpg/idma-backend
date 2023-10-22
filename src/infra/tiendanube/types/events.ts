export interface TiendaNubeEvent {
  store_id: number;
  event:
    | 'app/uninstalled'
    | 'cart/created'
    | 'cart/updated'
    | 'category/created'
    | 'category/updated'
    | 'category/deleted'
    | 'order/created'
    | 'order/updated'
    | 'order/packed'
    | 'order/paid'
    | 'order/fulfilled'
    | 'order/cancelled'
    | 'product/created'
    | 'product/updated'
    | 'product/deleted';
  id: number;
}
