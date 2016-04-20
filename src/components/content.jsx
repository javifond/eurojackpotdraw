var React = require('react');
var Actions = require('../actions');
var DrawStore = require('../stores/draw-store');
var Reflux = require('reflux');

var Messages = require('./messages');
var Numbers = require('./numbers');
var Picker = require('./picker');
var Odds = require('./odds');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(DrawStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      draw: null
    }
  },
  componentWillMount: function() {
    Actions.getDraw();
  },
  render: function() {
    if (!this.state.draw) {
      return null;
    }
    else {
      return <section>
        <Picker 
          lastDate={this.getLastDate()} 
          lastYear={this.getLastYear()}
        />
        <hr />
        <h4>{this.getLastFullDate()}</h4>
        <hr />
        <Numbers 
          numbers={this.getNumbers()} 
          euroNumbers={this.getEuroNumbers()}
        />
        <Odds
          odds={this.getOdds()} 
        />
        <hr />
        <Messages 
          lastClosingDate={this.getLastClosingDate()[0]} 
          lastClosingTime = {this.getLastClosingDate()[1]} 
          nextJackpot = {this.getNextJackpot()} 
          lastDrawNumber = {this.getLastDrawNumber()}
        />
    </section>
    }
  },
  //Getters
  getLastDate: function () {
    var date = this.state.draw.last.date;

    return date.dayOfWeek + ' ' + date.day + ' ' + date.month; 
  },
  getLastYear: function () {
    var date = this.state.draw.last.date;

    return date.year; 
  },
  getLastFullDate: function () {
     return  this.state.draw.last.date.full;
  },
  getLastClosingDate: function () {
     var date = this.state.draw.last.closingDate;

     return date.split(', ');
  },
  getLastDrawNumber: function () {
    return this.state.draw.last.nr;
  },
  getNextJackpot: function () {
    return this.state.draw.next.jackpot;
  },
  getNumbers: function () {
    return this.state.draw.last.numbers;
  },
  getEuroNumbers: function () {
    return this.state.draw.last.euroNumbers;
  },
  getOdds: function () {
    return this.state.draw.last.odds;
  },
  onChange: function(event, draw) {
    this.setState({
      draw: draw
    });
  }
});
