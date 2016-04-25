require('../../less/main.less');
'use strict';
import React from "react";
import ReactDom from "react-dom"
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
import {Input} from 'react-bootstrap';

var Landing  = React.createClass({
  componentWillMount() {
    console.log('landing')
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render (){
    var style = {clear:'both'}
    return (
      <div>
        <h1 className="lightjar">#Light-Jar</h1>

        <Link to={`login`}>
        <div style={style}></div>

        <div className="container" onClick={this.handleSubmit}>
        <div className="square black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square4 black">
        <div className="square3">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square4">
        <div className="square black">
        <div className="square2">
        <div className="square black">
        <div className="square3">
        <div className="square4 black">
        <div className="square2">
        <div className="square black">
        <div className="square2">
        <div className="square3 black">
        <div className="square4">
        <div className="square3 black">
        <div className="square2">
        <div className="square3 black">
        <div className="square4">
        <div className="square2 black">
        <div className="square3">
        <div className="square2 black">
        <div className="square3">
        <div className="square4 black">
        <div className="square3">
        <div className="square2 black">
        <div className="square3">
        <div className="square4">
        <div className="square2 black">
        <div className="square4">
        <div className="square2 black">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </Link>
      </div>
    )
  }
})

module.exports = Landing;
