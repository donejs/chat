var feathers = require('feathers');
var memory = require('feathers-memory');
var hooks = require('feathers-hooks');
var bodyParser = require('body-parser');

var messages = memory('messages');
var app = feathers();

// Add REST API support
app.configure(feathers.rest())
  .configure(feathers.socketio())
  .configure(hooks())
  .use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'DELETE, GET, HEAD, POST, PUT, OPTIONS, TRACE');
    next();
  })
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/messages', messages);

app.service('messages').before({
  create: function(hook, next) {
    var data = hook.data;
    hook.data = {
      name: data.name.substring(0, 50),
      message: data.message.substring(0, 1000),
      created_at: new Date()
    };
    next();
  }
});

module.exports = app;
