var React = require('react');


var Four = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step4">
        <h2>Educational Expenses</h2>
        <div className="form-wrap">
          <p className="school hide">School Supplies</p>
          <p className="loans hide">Student Loans</p>
          <p className="tuition hide">College Tuition</p>
          <form>
            <p className="mobile-label">School Supplies:</p>
            <input className="left-input" type="text" name="sum4" />
            <p className="mobile-label">Student Loans:</p>
            <input type="text" name="sum4" />
            <br />
            <p className="mobile-label">College Tuition:</p>
            <input className="left-input" type="text" name="sum4" />
          </form>
        </div>
        <a href="#step5" className="next">NEXT</a>
        <a href="#step3" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Four;
