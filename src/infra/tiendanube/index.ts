import { Product } from './types';

export class TiendaNubeClient {
  private baseUrl;
  private client;
  private authKey;
  constructor() {
    this.authKey = process.env.TIENDANUBE_KEY;
    this.baseUrl = process.env.TIENDANUBE_URL;
    this.client = process.env.TIENDANUBE_CLIENT;
  }
  private _request(path: string, method: 'GET' | 'POST', body = null) {
    return fetch(this.baseUrl + this.client + '/' + path, {
      body,
      headers: {
        method,
        Authentication: 'bearer ' + this.authKey,
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  }
  private _get(path: string) {
    return this._request(path, 'GET');
  }
  private _post(path: string, body) {
    return this._request(path, 'POST', body);
  }

  getOrder(id: string) {
    return this._get('orders/' + id);
  }

  getProduct(id: string): Promise<Product> {
    return this._get('products/' + id);
  }
}
