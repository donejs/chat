import QUnit from 'steal-qunit';
import Message from './message';

QUnit.module('models/message');

QUnit.test('getList', function(assert) {
  var done = assert.async();

  Message.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items[0].description, 'First item');
    done();
  });
});
