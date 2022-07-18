import { module, test } from 'qunit';
import { setupTest } from 'blog-client/tests/helpers';

module('Unit | Model | blog', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('blog', {});
    assert.ok(model);
  });
});
