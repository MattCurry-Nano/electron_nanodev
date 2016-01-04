var React = require('react');

var LiveView = React.createClass({
  getInitialState: function () {
    return {imageData:[]};
  },
  componentDidMount: function () {
    console.log(this.refs.canvas);
  },
  render: function() {
    return (
      <canvas className="LiveView" ref="canvas"></canvas>
    );
  }
});

module.exports = LiveView;
