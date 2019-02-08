'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Counter$ReasonReactExample = require("./Counter.bs.js");

ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Counter$ReasonReactExample.make(/* array */[])), "index");

/*  Not a pure module */
