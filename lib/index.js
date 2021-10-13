/**
 * @fileoverview eslint plugin demo
 * @author qinqubo
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require('requireindex')

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");
module.exports = {
  rules: {
    'disable-console': require('./rules/disable-console'),
  },
  configs: {
    recommended: {
      rules: {
        'qinqubo/disable-console': 2, // 可以省略 eslint-plugin 前缀
      },
    },
  },
}
