var React = require('react');


var Seven = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step7">
        <div className="form-wrap fix">
          <div className="last-panel-left">

            <div className="contain-original">
              <h1>Choose the right <br />Quicken for you.</h1>
              <h3><span className="reddish">Quicken 2016 is here!</span><br />
                Count on us to help you manage your money. See everything in one place with Quicken.
              </h3>
            </div>

            <div className="contain-excess">
              <div className="red-box">
                <p>You are spending more than you make!</p>
              </div>
              <h1>Use Quicken to Help You Budget Better</h1>
              <div className="header-wrapper">
                <h3 className="no-bold"><strong>Choose the right Quicken for you.</strong> Count on us to help you manage your money. See everything in one place with Quicken.
                </h3>
              </div>
            </div>

            <div className="contain-congrats">
              <div className="green-box">
                <p>Congratulations, you are doing well.</p>
              </div>
              <h1>Make Your Money Go Even Further With Quicken</h1>
              <div className="header-wrapper">
                <h3 className="no-bold"><strong>Choose the right Quicken for you.</strong> Count on us to help you manage your money. See everything in one place with Quicken.
                </h3>
              </div>
            </div>

          </div>

          <img className="whats-new-hero" src="./app/includes/img/whats-new-hero-crop.png" alt="software" />
          <img className="whats-new-hero-2" src="./app/includes/img/whats-new-hero-crop-2.png" alt="software" />

        </div>

        <a target="_blank" href="http://www.quicken.com/compare" className="compare">COMPARE QUICKEN SOFTWARE</a>
        <a href="#step6" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Seven;
