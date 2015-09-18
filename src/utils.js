import $ from 'jquery';
import Message from './models/message';

Message.bind('created', ev => setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 0));
