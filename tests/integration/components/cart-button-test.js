import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'kshop-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | cart-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders "Add to cart" button when quantity is 0', async function (assert) {
    // Define the test data
    this.set('product', { quantity: 0 });

    // Render the component
    await render(hbs`<CartButton @product={{this.product}} />`);

    // Assert the "Add to cart" button is rendered
    assert.dom('button').exists({ count: 1 });
    assert.dom('button').hasText('Add to cart');
  });

  test('it renders the quantity controls when quantity is greater than 0', async function (assert) {
    // Define the test data
    this.set('product', { quantity: 5 });

    // Render the component
    await render(hbs`<CartButton @product={{this.product}} />`);

    // Assert the quantity controls are rendered
    assert.dom('.flex').exists({ count: 1 });
    assert.dom('.flex').hasText('5');
  });
});
