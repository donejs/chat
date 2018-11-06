import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-chat/models/test';

import '~/pages/messages/messages-test';

F.attach(QUnit);

QUnit.module('donejs-chat functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-chat main page shows up', function() {
  F('title').text('donejs-chat', 'Title is set');
});
