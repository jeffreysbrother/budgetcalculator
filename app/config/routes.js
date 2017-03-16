var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var ColumnRight = require('../components/ColumnRight');
var One = require('../components/One');
var Two = require('../components/Two');
var Three = require('../components/Three');
var Four = require('../components/Four');
var Five = require('../components/Five');
var Six = require('../components/Six');
var Seven = require('../components/Seven');

var routes = (
  <Router history={history}>
    <Route path='/' component={One} />
    <Route path='/two' component={Two} />
    <Route path='/three' component={Three} />
    <Route path='/four' component={Four} />
    <Route path='/five' component={Five} />
    <Route path='/six' component={Six} />
    <Route path='/seven' component={Seven} />
  </Router>
);

module.exports = routes;
