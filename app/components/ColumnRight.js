var React = require('react');


var ColumnRight = React.createClass({
  render: function() {
    return (
      <div className="column2 clearfix">

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

      </div>
    )
  }
});

module.exports = ColumnRight;
