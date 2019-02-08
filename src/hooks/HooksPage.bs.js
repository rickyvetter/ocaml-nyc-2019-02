'use strict';

var React = require("react");

function handleClick() {
  console.log("clicked!");
  return /* () */0;
}

function make(Props) {
  var message = Props.message;
  React.useEffect((function () {
          console.log("Hey!");
          return undefined;
        }));
  return React.createElement("button", {
              onClick: handleClick
            }, message);
}

exports.handleClick = handleClick;
exports.make = make;
/* react Not a pure module */
