
var React = require('react');
var ReactDOM = require('react-dom');
var LiveView = require('./liveview.js');

ReactDOM.render(
  <LiveView />,
  document.getElementById('app')
);

console.log('trying ffi...');
var avt = require('app/AVTCamera');

avt.startup();
avt.shutdown();
console.log(avt.get_camera_list());
