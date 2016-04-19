var React = require('react');

var Content = require('./content');
var Footer = require('./footer');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Header />
      <Content />
      <Footer />
    </div>
  }
});
