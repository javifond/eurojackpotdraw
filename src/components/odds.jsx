var React = require('react');

module.exports = React.createClass({
  render: function () {
    return  <table className="table">
		<caption>Winners and Prizes</caption>
		<tbody>
			{this.getTableRows()}
		</tbody>
    </table>
  },
  getTableRows: function () {
	var odds = this.props.odds,
		tr = [],
		rank;

	delete odds.rank0;

	for(rank in odds) {
		tr.push(
			<tr className="text-right">
				<td className="text-muted">{odds[rank].winners}x</td>
				<td>€{odds[rank].prize.toLocaleString()}</td>
			</tr>
		);
	}

	return tr;
  }
});
