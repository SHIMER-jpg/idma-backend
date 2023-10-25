import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { Supabase } from 'src/infra/supabase';
import { TiendaNubeClient } from 'src/infra/tiendanube';
import { TiendaNubeEventDto } from 'src/infra/tiendanube/EventDto';
import { ListsService } from 'src/lists/lists.service';
import { sortVariantValues } from 'src/utils';

@Injectable()
export class OrdersService {
  constructor(
    private readonly listService: ListsService,
    private readonly supabase: Supabase,
  ) {}

  async upsert(body: TiendaNubeEventDto) {
    const supabase = this.supabase.getClient();

    const tnCli = new TiendaNubeClient();
    const {
      products,
      id,
      created_at,
      payment_status,
      status,
      cancelled_at,
      owner_note,
      contact_name,
      number,
    } = await tnCli.getOrder(body.id.toString());

    const { data, error } = await supabase.from('orders').upsert(
      {
        id,
        created_at,
        payment_status,
        status,
        cancelled_at,
        owner_note,
        contact_name,
        number,
      },
      { onConflict: 'id' },
    );

    if (error) throw new Error(error.message);

    const { data: itemData, error: itemError } = await supabase
      .from('order_items')
      .upsert(
        products.map(({ id, product_id, variant_values, quantity }) => ({
          id,
          order_id: body.id,
          variant_values: sortVariantValues(variant_values),
          quantity,
          product_id,
        })),
        { onConflict: 'id' },
      )
      .select('id');

    if (itemError) throw new Error(itemError.message);

    if (body.event === 'order/created')
      await this.listService.assignList(itemData);

    return { data, itemData };
  }

  async delete(body: TiendaNubeEventDto) {
    const supabase = this.supabase.getClient();

    const { error: itemError } = await supabase
      .from('order_items')
      .delete()
      .eq('order_id', body.id);

    if (itemError) throw new Error(itemError.message);

    const { error } = await supabase.from('orders').delete().eq('id', body.id);

    if (error) throw new Error(error.message);

    return body.id;
  }
}
