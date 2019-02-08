'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var HooksPage$ReasonReactExample = require("./HooksPage.bs.js");

ReactDOMRe.renderToElementWithId(
  React.createElement(HooksPage$ReasonReactExample.make, {
          message: "Hello!"
        }), "index");

/*  Not a pure module */
