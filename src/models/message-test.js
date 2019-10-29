import QUnit from 'steal-qunit';
import Message from './message';

QUnit.module('models/message');

QUnit.test('getList', function(assert){
  const done = assert.async();
  Message.getList().then(function(items) {
    assert.equal(items.length, 2);
    assert.equal(items.item(0).description, 'First item');
    done();
  });
});
