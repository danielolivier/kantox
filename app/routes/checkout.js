import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProductsRoute extends Route {
  @service checkout;

  async model() {
    return this.checkout._items;
  }
}
