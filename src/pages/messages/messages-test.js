import QUnit from 'steal-qunit';
import Component from './messages';

const { ViewModel } = Component;

// ViewModel unit tests
QUnit.module('~/pages/messages');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.ok(vm, 'Works');
});
