import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class CartButtonComponent extends Component {
  @service checkout;

  @action
  addToCart() {
    this.checkout.addItem(this.args.product);
  }

  @action
  removeFromCart() {
    if (this.quantity < 0) return;
    this.checkout.removeItem(this.args.product);
  }
}
