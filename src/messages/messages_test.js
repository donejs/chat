import QUnit from 'steal-qunit';
import { ViewModel } from './messages';

// ViewModel unit tests
QUnit.module('donejs-chat/messages');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the chat-messages component');
});
