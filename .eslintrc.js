// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "no-extra-semi": 2,                                           //禁止多余的冒号
    "no-const-assign": 2,                                         //禁止修改const声明的变量
    "no-var": 0,                                                  //禁用var，用let和const代替
    "camelcase": 2,                                               //强制驼峰法命名
    "curly": 2,                                                   //必须使用 if(){} 中的{}
    "brace-style": [2, "1tbs"],                                   //大括号风格
    "quotes": [2, "single"],                                      //引号类型 `` "" ''
    "semi": [2, "always"],                                        //语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": true}],        //分号前后空格
    // "space-in-brackets": [2, "never"],
    "space-infix-ops": 2,                                         //中缀操作符周围要不要有空格
    'arrow-parens': 0,                                            //箭头函数用小括号括起来
    'generator-star-spacing': 0,                                  //生成器函数*的前后空格
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0  //禁止使用debugger, allow debugger during development
  }
}
