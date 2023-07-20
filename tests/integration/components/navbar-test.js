import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'kshop-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | my-navbar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders navbar items correctly', async function (assert) {
    // Render the component
    await render(hbs`
      <Navbar />
    `);

    // Assert the rendered content
    assert.dom('nav').exists();
    assert.dom('nav span').exists({ count: 4 });

    // Assert the text content and CSS classes of each navbar item
    assert.dom('span:nth-of-type(1)').hasText('Groceries');
    assert.dom('span:nth-of-type(1)').hasClass('font-bold');
    assert.dom('span:nth-of-type(2)').hasText('Wine');
    assert.dom('span:nth-of-type(3)').hasText('Clothes');
    assert.dom('span:nth-of-type(4)').hasText('FX');

    // Assert the `title` attribute for disabled item
    assert.dom('span:nth-of-type(3)').hasAttribute('title', 'Available soon');
  });
});
