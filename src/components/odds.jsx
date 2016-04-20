var React = require('react');

module.exports = React.createClass({
  render: function () {
    return  <table className="table">
		<thead>
			<tr>
				<th>Winners</th>
				<th>Prize</th>
			</tr>
		</thead>
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
			<tr>
				<td className="text-muted">{odds[rank].winners}x</td>
				<td>€{odds[rank].prize.toLocaleString()}</td>
			</tr>
		);
	}

	return tr;
  }
});
