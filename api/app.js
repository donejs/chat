var feathers = require('feathers');
var memory = require('feathers-memory');
var bodyParser = require('body-parser');

var messages = memory('messages');
var app = feathers();

// Add REST API support
app.configure(feathers.rest())
  .configure(feathers.socketio())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/messages', messages);

module.exports = app;
