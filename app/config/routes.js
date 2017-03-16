var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var One = require('../components/One');
var Main = require('../components/Main');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
  </Router>
);

module.exports = routes;
