var React = require('react');


var Redundant = React.createClass({
  render: function() {
    return (
      <div className="redundant-section">
        <div className="left-image">
          <img className="whats-new-hero-2" src="./app/includes/img/whats-new-hero-crop-2.png" alt="software" />
        </div>

        <div className="right-text">
          <h2><span className="reddish">Explore Solutions.</span> <strong>Choose the right Quicken for you.</strong></h2>
          <p className="count-on-us"><strong>Quicken 2016 is here!</strong> Count on us to help you manage your money. <br />
          See everything in one place with Quicken.
          </p>
          <a target="_blank" href="http://www.quicken.com/compare" className="compare compare-mod">COMPARE QUICKEN SOFTWARE</a>
        </div>
      </div>
    )
  }
});

module.exports = Redundant;
