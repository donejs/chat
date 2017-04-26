import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './messages.less!';
import view from './messages.stache!';
import Message from '../models/message';

export const ViewModel = Map.extend({
  send(event) {
    event.preventDefault();

    new Message({
      name: this.attr('name'),
      body: this.attr('body')
    }).save().then(msg => this.attr('body', ''));
  }
});

export default Component.extend({
  tag: 'chat-messages',
  viewModel: ViewModel,
  view
});
