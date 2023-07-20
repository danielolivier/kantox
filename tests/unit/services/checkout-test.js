import { A } from '@ember/array';
import { setupTest } from 'kshop-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | checkout', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:checkout');
    assert.ok(service);
  });

  test('it adds item to the shopping cart', function (assert) {
    const service = this.owner.lookup('service:checkout');
    const item = { code: 'ABC123', quantity: 0 };

    service.addItem(item);

    assert.strictEqual(item.quantity, 1, 'item quantity increased');
    assert.deepEqual(
      service._items,
      A([item]),
      'item added to the shopping cart'
    );
  });

  test('it increases quantity of existing item in the shopping cart', function (assert) {
    const service = this.owner.lookup('service:checkout');
    const item = { code: 'ABC123', quantity: 0 };

    service.addItem(item);
    service.addItem(item);

    assert.strictEqual(item.quantity, 2, 'item quantity increased');
    assert.deepEqual(
      service._items,
      A([item]),
      'item quantity updated in the shopping cart'
    );
  });

  test('it removes item from the shopping cart', function (assert) {
    const service = this.owner.lookup('service:checkout');
    const item = { code: 'ABC123', quantity: 1 };

    service.addItem(item);
    service.removeItem(item);

    assert.strictEqual(item.quantity, 1, 'item quantity decreased');
    assert.deepEqual(
      service._items,
      A([item]),
      'item removed from the shopping cart'
    );
  });

  test('it removes item completely from the shopping cart when quantity becomes zero', function (assert) {
    const service = this.owner.lookup('service:checkout');
    const item = { code: 'ABC123', quantity: 0 };

    service.addItem(item);
    service.removeItem(item);

    assert.strictEqual(item.quantity, 0, 'item quantity decreased');
    assert.deepEqual(
      service._items,
      A([]),
      'item completely removed from the shopping cart'
    );
  });
});
