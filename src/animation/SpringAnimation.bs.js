'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Spring$ReasonReactExample = require("./Spring.bs.js");
var Animation$ReasonReactExample = require("./Animation.bs.js");

function create(initialValue) {
  var animation = Animation$ReasonReactExample.create(/* () */0);
  var state = Spring$ReasonReactExample.createState(initialValue);
  return /* record */[
          /* animation */animation,
          /* state */state
        ];
}

function setOnChange(preset, speedup, precision, $staropt$star, onChange, finalValue, a) {
  var onStop = $staropt$star !== undefined ? Js_primitive.valFromOption($staropt$star) : undefined;
  var callback = function () {
    a[/* state */1] = Spring$ReasonReactExample.stepper(undefined, speedup, precision, preset, a[/* state */1]);
    var isFinished = Spring$ReasonReactExample.isFinished(a[/* state */1]);
    Curry._1(onChange, a[/* state */1][/* value */0]);
    if (isFinished) {
      return /* Stop */[onStop];
    } else {
      return /* Continue */0;
    }
  };
  Animation$ReasonReactExample.stop(a[/* animation */0]);
  ((function (param) {
          return Animation$ReasonReactExample.setCallback(param, callback);
        })(a[/* animation */0]));
  if (finalValue !== undefined) {
    var init = a[/* state */1];
    a[/* state */1] = /* record */[
      /* value */init[/* value */0],
      /* velocity */init[/* velocity */1],
      /* finalValue */finalValue
    ];
    return Animation$ReasonReactExample.start(a[/* animation */0]);
  } else {
    return /* () */0;
  }
}

function setFinalValue(finalValue, a) {
  Animation$ReasonReactExample.stop(a[/* animation */0]);
  var init = a[/* state */1];
  a[/* state */1] = /* record */[
    /* value */init[/* value */0],
    /* velocity */init[/* velocity */1],
    /* finalValue */finalValue
  ];
  return Animation$ReasonReactExample.start(a[/* animation */0]);
}

function stop(a) {
  return Animation$ReasonReactExample.stop(a[/* animation */0]);
}

exports.create = create;
exports.setOnChange = setOnChange;
exports.setFinalValue = setFinalValue;
exports.stop = stop;
/* No side effect */
