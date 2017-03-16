var React = require('react');
var ColumnRight = require('../components/ColumnRight');
var ColumnLeft = require('../components/ColumnLeft');
var Progress = require('../components/Progress');
var Redundant = require('../components/Redundant');
var Seo = require('../components/Seo');


var Main = React.createClass({
  render: function() {
    return (
      <div>

        <div className="qbcalc clearfix">
      		<h1>Try our FREE budget calculator</h1>
          <Progress />
          <ColumnRight />
          <ColumnLeft />
      	</div>

      	<Redundant />

        <Seo />
      </div>
    )
  }
});

module.exports = Main;
