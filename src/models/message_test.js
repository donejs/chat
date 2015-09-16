import QUnit from 'steal-qunit';
import Message from './message';

QUnit.module('models/message');

QUnit.test('getList', function(){
  stop();
  Message.getList().then(function(items) {
    QUnit.equal(items.length, 2);
    QUnit.equal(items.attr('0.description'), 'First item');
    start();
  });
});
