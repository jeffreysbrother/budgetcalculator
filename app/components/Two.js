var React = require('react');


var Two = React.createClass({
  render: function() {
    return (
      <div className="panel" id="step2">
        <h2>Housing Expenses</h2>
        <div className="form-wrap">
          <p className="mort hide">Mortgage</p>
          <p className="HOA hide">HOA Fees</p>
          <p className="rent hide">Rent</p>
          <p className="ins hide">Home Insurance</p>
          <p className="repairs hide">Repairs/Maintenance</p>
          <p className="utilities hide">Water/Gas/Electricity</p>
          <p className="TV hide">Cable/TV/Internet</p>
          <p className="phone hide">Phone &amp; Cell</p>
          <form>
            <p className="mobile-label">Mortgage:</p>
            <input className="left-input" type="text" name="sum2" />
            <p className="mobile-label">HOA Fees:</p>
            <input type="text" name="sum2" />
            <br />
            <p className="mobile-label">Rent:</p>
            <input className="left-input" type="text" name="sum2" />
            <p className="mobile-label">Home Insurance:</p>
            <input type="text" name="sum2" />
            <br />
            <p className="mobile-label">Repairs/Maintenance:</p>
            <input className="left-input" type="text" name="sum2" />
            <p className="mobile-label">Water/Gas/Electricity:</p>
            <input type="text" name="sum2" />
            <br />
            <p className="mobile-label">Cable/TV/Internet:</p>
            <input className="left-input" type="text" name="sum2" />
            <p className="mobile-label">Phone &amp; Cell:</p>
            <input type="text" name="sum2" />
          </form>
        </div>
        <a href="#step3" className="next">NEXT</a>
        <a href="#step1" className="back">BACK</a>
      </div>
    )
  }
});

module.exports = Two;
