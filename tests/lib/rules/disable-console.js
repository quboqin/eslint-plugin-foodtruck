/**
 * @fileoverview disable console
 * @author disable-console
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/disable-console'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('disable-console', rule, {
  valid: [
    {
      code: 'console.info(test)',
      options: [['info']],
    },
  ],
  invalid: [
    {
      code: 'console.log(test)',
      errors: [{ message: 'error: should remove console' }],
    },
  ],
})
