import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'kshop-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | page-layout', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the title and description correctly', async function (assert) {
    // Define the test data
    this.set('title', 'My Title');
    this.set('description', 'My Description');

    // Render the component
    await render(hbs`
      <PageLayout @title={{this.title}} @description={{this.description}}>
        <p>Yielded content goes here.</p>
      </PageLayout>
    `);

    // Assert the title and description are rendered correctly
    assert.dom('h1').hasText('My Title');
    assert.dom('h6').hasText('My Description');

    // Assert the yielded content is rendered correctly
    assert.dom('p').hasText('Yielded content goes here.');
  });
});
