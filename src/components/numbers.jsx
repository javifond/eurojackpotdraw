var React = require('react');

module.exports = React.createClass({
  render: function() {

  	var winnerNumbers = [],
  		i, j;

	for (i = 0; i < this.props.numbers.length; i++) {
		winnerNumbers.push(
			<span className="badge">{this.props.numbers[i]}</span>
		);
	}

	for (j = 0; j < this.props.euroNumbers.length; j++) {
		winnerNumbers.push(
			<span className="badge">{this.props.euroNumbers[j]}</span>
		);
	}

    return <section>
    	{winnerNumbers}
    </section>
  }
});
