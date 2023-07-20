import { setupTest } from 'kshop-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | product', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('product', {
      name: 'Test Product',
      price: 9.99,
      code: 'ABC123',
      offer: '50% Off',
      image: 'test.jpg',
      quantity: 10,
    });

    assert.ok(model);
    assert.strictEqual(model.name, 'Test Product');
    assert.strictEqual(model.price, 9.99);
    assert.strictEqual(model.code, 'ABC123');
    assert.strictEqual(model.offer, '50% Off');
    assert.strictEqual(model.image, 'test.jpg');
    assert.strictEqual(model.quantity, 10);
  });
});
