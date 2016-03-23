var path = require('path');
var server = require('done-serve');
var api = require('./app');
var app = server({
  path: path.join(__dirname, '..'),
  configure: function(app) {
    app.use('/api', api);
    app.api = api;

    var oldListen = app.listen;
    app.listen = function() {
      var server = oldListen.apply(this, arguments);
      api.setup(server);
      return server;
    };
  }
});

app.listen(process.env.PORT || 3030);
