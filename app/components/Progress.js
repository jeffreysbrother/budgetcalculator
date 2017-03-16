var React = require('react');


var Progress = React.createClass({
  render: function() {
    return (
      <div className="progress">
        <div className="prog">
          <ul>
            <li className="active"><a href="#step1">1</a>
              <div></div>
            </li>
            <li><a href="#step2">2</a>
              <div></div>
            </li>
            <li><a href="#step3">3</a>
              <div></div>
            </li>
            <li><a href="#step4">4</a>
              <div></div>
            </li>
            <li><a href="#step5">5</a>
              <div></div>
            </li>
            <li className="last"><a href="#step6">6</a></li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Progress;
