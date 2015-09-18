import $ from 'jquery';
import can from 'can';
import Message from './models/message';

can.view.attr('prevent-default', function(el) {
  $(el).on('submit', function(ev) {
    ev.preventDefault();
    return false;
  });
});

Message.bind('created', ev => setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 0));
