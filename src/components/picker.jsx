var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <header className="date-picker-header">
		<h3 className="date-picker-header date-picker-header__head">EuroJackpot Results & Winning Numbers</h3>
		<select className="date-selector">
			<option>{this.props.lastDate}</option>
		</select>
		<select className="date-selector">
			<option>{this.props.lastYear}</option>
		</select>
	</header>
  }
});
