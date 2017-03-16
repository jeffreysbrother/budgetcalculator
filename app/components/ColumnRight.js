var React = require('react');
var One = require('../components/One');
var Two = require('../components/Two');
var Three = require('../components/Three');
var Four = require('../components/Four');
var Five = require('../components/Five');
var Six = require('../components/Six');
var Seven = require('../components/Seven');


var ColumnRight = React.createClass({
  render: function() {
    return (
      <div className="column2 clearfix">
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
        <Seven />
      </div>
    )
  }
});

module.exports = ColumnRight;
