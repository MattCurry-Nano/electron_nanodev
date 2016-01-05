var React = require('react');

var LiveView = React.createClass({
  getInitialState: function () {
    return {imageData:[]};
  },
  componentDidMount: function () {
    var ctx = this.refs.canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
  },
  render: function() {
    return (
      <canvas className="LiveView" ref="canvas"></canvas>
    );
  }
});

module.exports = LiveView;
