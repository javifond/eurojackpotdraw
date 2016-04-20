var React = require('react');

module.exports = React.createClass({
  render: function() {

  	var winnerNumbers = [],
  		i, j;

	for (i = 0; i < this.props.numbers.length; i++) {
		winnerNumbers.push(
			<li className="balls balls__result">{this.props.numbers[i]}</li>
		);
	}

	for (j = 0; j < this.props.euroNumbers.length; j++) {
		winnerNumbers.push(
			<li className="balls balls__result balls__result--extra">{this.props.euroNumbers[j]}</li>
		);
	}

    return <section>
    	<ul className="balls">
    		{winnerNumbers}
    	</ul>
    </section>
  }
});
