var React = require('react');


var Three = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step3">
        <h2>Transportation Expenses</h2>
        <div className="form-wrap">
          <p className="car hide">Car Payment</p>
          <p className="car-ins hide">Car Insurance</p>
          <p className="gas hide">Gas/Fuel</p>
          <p className="car-repair hide">Car Repairs</p>
          <form>
            <p className="mobile-label">Car Payment:</p>
            <input className="left-input" type="text" name="sum3" />
            <p className="mobile-label">Car Insurance:</p>
            <input type="text" name="sum3" />
            <br />
            <p className="mobile-label">Gas/Fuel:</p>
            <input className="left-input" type="text" name="sum3" />
            <p className="mobile-label">Car Repairs:</p>
            <input type="text" name="sum3" />
          </form>
        </div>
        <a href="#step4" className="next">NEXT</a>
        <a href="#step2" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Three;
