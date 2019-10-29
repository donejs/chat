import QUnit from 'steal-qunit';
import Component from './messages';

const { ViewModel } = Component;

// ViewModel unit tests
QUnit.module('~/pages/messages');

QUnit.test('Has message', function(assert){
  var vm = new ViewModel();
  assert.ok(vm, 'Works');
});
