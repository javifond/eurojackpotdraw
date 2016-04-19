var React = require('react');
var Actions = require('../actions');
var DrawStore = require('../stores/draw-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(DrawStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      draw: []
    }
  },
  componentWillMount: function() {
    Actions.getDraw();
  },
  render: function() {
    //TODO: Implement a loading spinner
    return <main>{this.state.draw}</main>
  },
  
  onChange: function(event, draw) {
    this.setState({
      draw: draw
    });
  }
});
