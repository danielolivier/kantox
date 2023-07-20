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
    assert.equal(model.name, 'Test Product');
    assert.equal(model.price, 9.99);
    assert.equal(model.code, 'ABC123');
    assert.equal(model.offer, '50% Off');
    assert.equal(model.image, 'test.jpg');
    assert.equal(model.quantity, 10);
  });
});
