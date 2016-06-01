import QUnit from 'steal-qunit';
import { ViewModel } from './messages';

// ViewModel unit tests
QUnit.module('donejs-chat/messages');

QUnit.test('Has name', function(){
  var vm = new ViewModel({ name: 'Test' });
  QUnit.equal(vm.name, 'Test');
});
