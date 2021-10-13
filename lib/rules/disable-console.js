/**
 * @fileoverview disable console
 * @author disable-console
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'disable console',
      category: 'Fill me in',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [
      {
        type: 'array', // 接受參數類型為數組
        items: {
          type: 'string', // 數組的每一項為一個字符串
        },
      },
    ], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    const logs = [
      // console 的所以方法
      'debug',
      'error',
      'info',
      'log',
      'warn',
      'dir',
      'dirxml',
      'table',
      'trace',
      'group',
      'groupCollapsed',
      'groupEnd',
      'clear',
      'count',
      'countReset',
      'assert',
      'profile',
      'profileEnd',
      'time',
      'timeLog',
      'timeEnd',
      'timeStamp',
      'context',
      'memory',
    ]

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      CallExpression(node) {
        // 接受的參數
        const allowLogs = context.options[0]
        const disableLogs = Array.isArray(allowLogs)
          ? // 過濾掉允許調用的方法
            logs.filter((log) => !allowLogs.includes(log))
          : logs
        const callObj = node.callee.object
        const callProp = node.callee.property
        if (!callObj || !callProp) {
          return
        }
        if (callObj.name !== 'console') {
          return
        }
        // 檢測掉不允許調用的 console 方法
        if (disableLogs.includes(callProp.name)) {
          context.report({
            node,
            message: 'error: should remove console',
          })
        }
      },
    }
  },
}
