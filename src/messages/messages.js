import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './messages.less!';
import template from './messages.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the chat-messages component'
    }
  }
});

export default Component.extend({
  tag: 'chat-messages',
  viewModel: ViewModel,
  template
});