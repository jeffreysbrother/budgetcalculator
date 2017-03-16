var React = require('react');


var Five = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step5">
        <h2>Food and Personal</h2>
        <div className="form-wrap">
          <p className="groc hide">Groceries/Household</p>
          <p className="cloth hide">Clothing</p>
          <p className="ent hide">Entertainment</p>
          <p className="med hide">Medical</p>
          <p className="pet hide">Pet Supplies</p>
          <p className="other-exp hide">Other Expenses</p>
          <form>
            <p className="mobile-label">Groceries/Household:</p>
            <input className="left-input" type="text" name="sum5" />
            <p className="mobile-label">Clothing:</p>
            <input type="text" name="sum5" />
            <br />
            <p className="mobile-label">Entertainment:</p>
            <input className="left-input" type="text" name="sum5" />
            <p className="mobile-label">Medical:</p>
            <input type="text" name="sum5" />
            <br />
            <p className="mobile-label">Pet Supplies:</p>
            <input className="left-input" type="text" name="sum5" />
            <p className="mobile-label">Other Expenses:</p>
            <input type="text" name="sum5" />
          </form>
        </div>
        <a href="#step6" className="next">NEXT</a>
        <a href="#step4" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Five;
