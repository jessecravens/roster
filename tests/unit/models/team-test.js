import { test, moduleForModel } from 'ember-qunit';

moduleForModel('team', 'Team', {
  // Specify the other units that are required for this test.
  needs: ['model:player']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
