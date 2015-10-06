import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-chat functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-chat main page shows up', function() {
  F('title').text('donejs-chat', 'Title is set');
});
