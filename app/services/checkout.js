import { A } from '@ember/array';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class CheckoutService extends Service {
  @tracked items = A([]);

  get _items() {
    return this.items;
  }

  addItem(item) {
    const existing = this.items.findBy('code', item.code);

    if (existing) {
      existing.quantity++;
    } else {
      item.quantity++;
      this.items.pushObject(item);
    }
  }

  removeItem(item) {
    const existing = this.items.findBy('code', item.code);

    if (existing) {
      existing.quantity--;
      if (existing.quantity === 0) this.items.removeObject(existing);
    }
  }
}
