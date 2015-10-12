var $ = require("jquery");

$.ajaxPrefilter(function(options){
  options.crossDomain = true;
});
