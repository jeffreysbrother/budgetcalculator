var React = require('react');


var One = React.createClass({
  render: function() {
    return (
      <div className="panel active" id="step1">
        <h2>Monthly Income</h2>
        <div className="form-wrap">
          <p className="salary hide">Salary/Wages</p>
          <p className="other hide">Other Income</p>
          <form>
            <p className="mobile-label">Salary/Wages:</p>
            <input className="left-input exclude" type="text" name="sum" />
            <p className="mobile-label">Other Income:</p>
            <input className="exclude" type="text" name="sum" />
          </form>
        </div>
        <a href="#step2" className="next first-button">NEXT</a>
      </div>
    )
  }
});

module.exports = One;
