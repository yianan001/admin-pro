module.exports = {
  root: true,
  'extends': [
    'plugin:@typescript-eslint/eslint-recommended',
    'react-app'
    // 'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module',
    'ecmaVersion': 7
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用debugger
    'react/jsx-no-target-blank': 1, // 防止使用target="_blank"时，没有添加rel="noopener noreferrer"
    'semi': ['error', 'never'], // 不使用分号
    'no-unused-vars': 1, // 未使用的变量
    'no-use-before-define': 1, // 未定义前使用
    'indent': ['error', 2, { 'SwitchCase': 1 }], // 缩进4个空格
    'space-before-function-paren': ['error', 'never'], // 函数名后面不需要空格
    'no-trailing-spaces': 1, // 一行结束后面不要有空格
    'no-multiple-empty-lines': [1, { 'max': 2 }], // 空行最多不能超过2行
    'no-multi-spaces': 1, // 不能用多余的空格
    'eqeqeq': 1, // 必须使用全等  ===
    'no-const-assign': 1, // 禁止修改const声明的变量
    'no-alert': 1, // 禁止使用alert confirm prompt
    'no-var': 1, // 禁用var，用let和const代替
    'no-irregular-whitespace': 1, // 不能有不规则的空格
    'no-else-return': 1, // 如果if语句里面有return,后面不能跟else语句
    'no-multi-str': 1, // 字符串不能用\换行
    'no-warning-comments': ['off'], // 不能有警告备注
    'react/jsx-first-prop-new-line': ['off'], // 多行属性换行
    'react/jsx-max-props-per-line': ['off'], // 多行属性换行
    'quotes': ['error', 'single', { 'avoidEscape': true }], // 字符串使用单引号
    'space-infix-ops': ['error', { 'int32Hint': false }], // 中缀操作符周围要不要有空格
    'keyword-spacing': ['error', { 'before': true, 'after': true }], // 关键字前后空格
    'space-before-blocks': ['error', 'always'], // 块前面空格
    'space-in-parens': ['error', 'never'], // 括号内不需要空格
    'comma-spacing': ['error', { 'before': false, 'after': true }], // 逗号后面空格
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false }], // 大括号内是否允许不必要的空格
    'arrow-spacing': ['error', { 'before': true, 'after': true }], // 箭头函数前后空格
    'block-spacing': ['error', 'always'], // 大括号内是否允许不必要的空格
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // 大括号风格
    'jsx-quotes': ['error', 'prefer-single'], // jsx属性使用单引号
    'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }], // jsx标签前后空格
    'react/jsx-indent': ['error', 2], // jsx缩进
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'padded-blocks': ['error', 'never'], // 块语句前后空格
    'semi-spacing': ['error', { 'before': false, 'after': true }], // 分号前后空格
    'spaced-comment': ['error', 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']}], // 注释前后空格
    'template-curly-spacing': ['error', 'never'], // 模板字符串前后空格
    'use-isnan': 1, // 禁止比较时使用NaN，只能用isNaN()
    'wrap-iife': ['error', 'any'], // 立即执行函数表达式的小括号风格
    'yoda': ['error', 'never'], // 禁止尤达条件
    'prefer-const': 1, // 首选const
    'array-bracket-spacing': ['error', 'never'], // 数组括号前后空格
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'error', // 检查 Hook 的规则
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-indent-props': ['error', 2], // jsx缩进
    'react/jsx-closing-bracket-location': ['error', 'after-props'], // jsx标签闭合位置
    'react/jsx-curly-spacing': ['error', 'never'], // jsx大括号前后空格
    'react/jsx-equals-spacing': ['error', 'never'], // jsx等号前后空格
    'react/jsx-wrap-multilines': ['error', { 'declaration': false, 'assignment': false, 'return': false, 'arrow': false }], // jsx多行属性换行
    'react/jsx-curly-brace-presence': ['error', { 'props': 'never', 'children': 'never' }], // jsx大括号内是否允许不必要的空格
    'react/jsx-pascal-case': ['error', { 'allowAllCaps': true, 'ignore': []}], // jsx组件名使用驼峰
    'react/jsx-no-duplicate-props': ['error', { 'ignoreCase': false }], // jsx禁止重复props
    'react/jsx-no-undef': ['error', { 'allowGlobals': false }], // jsx禁止使用未定义的组件
    'react/jsx-no-comment-textnodes': 'error', // jsx禁止在注释中出现文字
    'react/jsx-no-useless-fragment': 'error', // jsx禁止使用无用的fragment
    'react/jsx-boolean-value': ['error', 'never', { 'always': []}], // jsx禁止使用无用的fragment
    'react/jsx-key': 'error', // jsx数组中必须有key

  }
}
