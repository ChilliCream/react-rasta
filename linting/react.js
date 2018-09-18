"use strict";

const ON = true;
const OFF = false;

module.exports = {
  extends: "tslint-react",
  rules: {
    // All
    "jsx-alignment": ON,
    "jsx-boolean-value": ON,
    "jsx-curly-spacing": [ON, "never"],
    "jsx-equals-spacing": [ON, "never"],
    "jsx-key": ON,
    "jsx-no-bind": ON,
    "jsx-no-lambda": OFF,
    "jsx-no-multiline-js": OFF,
    "jsx-no-string-ref": ON,
    "jsx-self-close": ON,
    "jsx-wrap-multiline": ON,
  },
};
