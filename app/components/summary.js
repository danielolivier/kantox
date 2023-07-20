import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class SummaryComponent extends Component {
  @tracked toggleSubtotal = false;

  @action
  onToggleSubtotal() {
    this.toggleSubtotal = !this.toggleSubtotal;
  }
}
