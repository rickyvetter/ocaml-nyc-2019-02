'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Page$ReasonReactExample = require("./Page.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Page$ReasonReactExample.make("Hello!", /* array */[])), "index");

/*  Not a pure module */
