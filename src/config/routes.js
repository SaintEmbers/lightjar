'use strict';
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Landing = require('../containers/landing.js');
var Login = require('../containers/login.js')
// import Login from '../containers/login.js'
var Main = require('../containers/main.js');
export default(
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Landing } />
      <Route path='login' component={ Login } />
    </Route>
  </Router>
);

