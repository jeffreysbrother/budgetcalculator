var React = require('react');


var Six = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step6">
        <h2>Monthly Savings</h2>
        <div className="form-wrap">
          <p className="emergency hide">Emergency Fund</p>
          <p className="invest hide">Investments</p>
          <p className="retire hide">Retirement</p>
          <form>
            <p className="mobile-label">Emergency Fund:</p>
            <input className="left-input" type="text" name="sum6" />
            <p className="mobile-label">Investments:</p>
            <input type="text" name="sum6" />
            <br />
            <p className="mobile-label">Retirement:</p>
            <input className="left-input" type="text" name="sum6" />
          </form>
        </div>
        <a href="#step7" className="next">NEXT</a>
        <a href="#step5" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Six;
