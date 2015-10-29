var feathers = require('feathers');
var memory = require('feathers-memory');
var hooks = require('feathers-hooks');
var bodyParser = require('body-parser');
var ieCors = require('express-ie-cors');

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
  .use(ieCors({ contentType: 'application/x-www-form-urlencoded' }))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use('/messages', messages)
  .use(function(err, req, res, next) {
    res.status(err.code || 500);
    res.json({
      name: err.name || 'General error',
      message: err.message
    });
  });

function isString(txt) {
  return txt && typeof txt === 'string' && txt.trim() !== '';
}

app.service('messages').before({
  create: function(hook, next) {
    var data = hook.data;

    if(!(isString(data.name) && isString(data.body))) {
      return next(new Error('A message needs a string name and body'));
    }

    hook.data = {
      name: data.name.substring(0, 50),
      body: data.body.substring(0, 1000),
      created_at: new Date()
    };
    next();
  }
}).after({
  create: function(hook, next) {
    var keys = Object.keys(this.store);
    if(keys.length > 20) {
      this.remove(keys[0], function(error) {
        next(error);
      });
    } else {
      return next();
    }
  }
});

module.exports = app;
