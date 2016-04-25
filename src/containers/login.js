require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
import {Input} from 'react-bootstrap';

var Login  = React.createClass({
  componentWillMount() {
    console.log('landing')
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit(e) {
   e.preventDefault();
  },

  render (){
    var style = {clear:'both'}
    return (
      <div>
        <a href='/' className="lightjar">#Light-Jar</a>
        <div className="login">
          <div className="heading">
            <form action="#">
              <div className="input-group input-group-lg">
                <Input
                  type="text"
                  ref="user"
                  value=''
                  className="form-control"
                  placeholder="Username or email"
                  onChange={this.handleChange}
                ></Input>
              </div>
              <div className="input-group input-group-lg">
                <Input
                  type="password"
                  ref="password"
                  value=''
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange}
                ></Input>
              </div>
              <button type="submit" onClick={this.handleSubmit} className="float">Login</button>
              <button type="submit" onClick={this.handleSubmit} className="float">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
})

module.exports = Login;
