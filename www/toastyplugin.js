// Empty constructor
alert("www-toastyplugin.js-1");
function ToastyPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
ToastyPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'ToastyPlugin', 'show', [options]);
}

// Installation constructor that binds ToastyPlugin to window
ToastyPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  alert("www-toastyplugin.js-4");
  window.plugins.toastyPlugin = new ToastyPlugin();
  return window.plugins.toastyPlugin;
};

alert("www-toastyplugin.js-2");

cordova.addConstructor(ToastyPlugin.install);
alert("www-toastyplugin.js-3");
