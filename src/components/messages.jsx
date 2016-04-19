var React = require('react');

module.exports = React.createClass({
  render: function() {
  	var lastClosingDate = this.props.lastClosingDate;

    return <article>
		<section>
			<h4>The EuroJackpot numbers for {lastClosingDate}</h4>
			<span>
			The {this.props.lastDrawNumber}th draw for the EuroJackpot was held on {lastClosingDate}, as usual at {this.props.lastClosingTime} in Helsinki.
			</span>
		</section>
		<hr />
		<section>
			<h4>EuroJackpot numbers for {lastClosingDate}</h4>
			<span>
			The balls used for the draw are made of a synthetic polymer, softer than ping-pong balls. 
			The results are broadcast after the draw, with the draw-machines independently checked by the VTT Technical Research Center of Finland.
			Lottoland published the draw results immediately after the draw on {lastClosingDate}. 
			You can easily check your tickets here at Lottoland, or purchase your ticket for the next draw.
			</span>
		</section>
		<hr />
		<section>
			<h4>The EuroJackpot was not won</h4>
			<span>
			After another snag-free draw of the EuroJackpot on {lastClosingDate}, the results were posted. Unfortunately,  
			there were no jackpot winners in any of the countries participating in the lottery. 
			However all is not lost: the jackpot rolls over to the next draw, growing to a chunky {this.props.nextJackpot} million Euros!
			</span>
		</section>
	</article>
  }
});
