var React = require('react');


var ColumnLeft = React.createClass({
  render: function() {
    return (
      <div className="column1 clearfix">
        <table>
          <tbody>
            <tr className="underline">
              <th><strong>Monthly Income</strong></th>
              <th className="total" value="" >$<span id="totalSum">0</span></th>
            </tr>
            <tr>
              <td><div className="square housing"></div>Housing</td>
              <td className="total" value="" >$<span id="totalSum2">0</span></td>
            </tr>
            <tr>
              <td><div className="square transportation"></div>Transportation</td>
              <td className="total" value="" >$<span id="totalSum3">0</span></td>
            </tr>
            <tr>
              <td><div className="square educational"></div>Educational</td>
              <td className="total" value="" >$<span id="totalSum4">0</span></td>
            </tr>
            <tr>
              <td><div className="square personal"></div>Personal</td>
              <td className="total" value="" >$<span id="totalSum5">0</span></td>
            </tr>
            <tr className="underline">
              <td><div className="square savings"></div>Savings</td>
              <td className="total" value="" >$<span id="totalSum6">0</span></td>
            </tr>
            <tr>
              <th><strong>Monthly Expenses</strong></th>
              <th className="total" value="" >$<span id="expenses">0</span></th>
            </tr>
          </tbody>
        </table>

            <div className="image-container clearfix demo-chart">
              <div className="C3-wrapper clearfix">
                <div id="chart"></div>
              </div>
            </div>

            <div className="positive-income">
              <p>INCOME</p>
              <p className="value" value="">$<span id="subtract">0</span></p>
            </div>

      </div>
    )
  }
});

module.exports = ColumnLeft;
