import { Component, DefineMap } from 'can';
import './messages.less';
import view from './messages.stache';
import Message from '../models/message';

export const ViewModel = DefineMap.extend({
  name: 'string',
  body: 'string',
  messagesPromise: {
    default() {
      return Message.getList();
    }
  },
  send(event) {
    event.preventDefault();

    new Message({
      name: this.name,
      body: this.body
    })
      .save()
      .then(msg => (this.body = ''));
  }
});

export default Component.extend({
  tag: 'chat-messages',
  ViewModel: ViewModel,
  view
});
