//参考网址：eslint,vue 风格指南，eslint-plugin-vue,eslint-config-elemefe
// http://eslint.cn/docs/rules/
// https://cn.vuejs.org/v2/style-guide/
// https://github.com/vuejs/eslint-plugin-vue
// https://github.com/ElemeFE/eslint-config-elemefe
// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
module.exports = {
  //此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,

  globals:{
    '_czc':true,
    '_hmt':true,
    '$':true,
    'layer':true,
    'axios':true,
    'Vue':true,
    'VueRouter':true,
    'Vuex':true,
  },

  //此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module",
    // 想使用的额外的语言特性:
    "ecmaFeatures": {
      "jsx": true
    }
  },

  //此项指定环境的全局变量
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "amd": true,
    "es6": true,
    "mocha": true
  },

  extends: ["plugin:vue/base", "plugin:vue/essential", "plugin:vue/recommended", "plugin:vue/strongly-recommended"],

  // required to lint *.vue files
  plugins: [
    'vue',
  ],

  // add your custom rules here
  // 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致
  // "off" -> 0 关闭规则
  // "warn" -> 1 开启警告规则
  //"error" -> 2 开启错误规则
  rules: {
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': 0,
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 0,
    // 强制使用骆驼拼写法命名约定,建议使用下划线拼写法 (variable_name) 定义变量。使用骆驼拼写法 (variableName)定义函数
    'camelcase': 0,
    // 要求或禁止末尾逗号 pdd
    'comma-dangle': 0,
    // 圈复杂度数量上表现为覆盖所有代码的独立现行路径条数。该规则允许设置一个圈复杂度阈值。比如if else  数量
    'complexity': 0,
    // 禁止或强制在计算属性中使用空格
    'computed-property-spacing': 0,
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 0,
    // 当获取当前执行环境的上下文时，强制使用一致的命名。
    'consistent-this': 0,
    // 要求 switch 语句中有 default 分支
    'default-case': 0,
    // 鼓励使用点号操作符来提高代码可读性
    'dot-notation': 0,
    // 要求或禁止命名的 function 表达式
    'func-names': 0,
    // 强制 function 声明或表达式的一致性
    'func-style': 0,
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 0,
    // 强制使用一致的换行符风格
    'linebreak-style': 0,
    // 要求在注释周围有空行
    'lines-around-comment': 0,
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 0,
    // alert 经常被用于调试代码，部署到生产环境之前应该删除
    'no-alert': 0,
    // 不允许在 catch 语句中遮盖变量
    'no-catch-shadow': 0,
    'no-console': 0,
    // 禁止在条件中使用常量表达式
    'no-constant-condition': 0,
    // 禁用 continue 语句
    'no-continue': 0,
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 0,
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 0,
    // 禁止出现空语句块
    'no-empty': 0,
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 0,
    // 该规则对圆括号的使用做了限制，只有在必要的地方才能使用
    'no-extra-parens': 0,
    // 禁用不必要的分号
    'no-extra-semi': 0,
    // 禁止使用内联注释
    'no-inline-comments': 0,
    // 禁用标签语句
    'no-labels': 0,
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 0,
    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 0,
    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': 0,
    // 禁止使用多行字符串
    'no-multi-str': 0,
    // 禁止使用嵌套的三元表达式
    'no-nested-ternary': 0,
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 0,
    // 禁止对函数参数再赋值
    'no-param-reassign': 0,
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': 0,
    // 禁用 process.env
    'no-process-env': 0,
    // 禁用 process.exit()
    'no-process-exit': 0,
    // 禁用 __proto__ 属性
    'no-proto': 0,
    // 禁用通过 require 加载的指定模块
    'no-restricted-modules': 0,
    // 禁止使用 javascript: url
    'no-script-url': 0,
    // 禁止自身比较
    'no-self-compare': 0,
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 0,
    // 禁用同步方法
    'no-sync': 0,
    // 禁用三元操作符
    'no-ternary': 0,
    // 不允许使用undefined变量
    'no-undefined': 0,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止出现未使用过的表达式
    'no-unused-expressions': 0,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 0,
    // 要求使用 let 或 const 而不是 var
    'no-var': 0,
    // 禁用 void 操作符
    'no-void': 0,
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': 0,
    // 不允许花括号中有空格
    'object-curly-spacing': 0,
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 0,
    // 要求或禁止尽可能地简化赋值操作
    'operator-assignment': 0,
    // 该规则强制块内空行填充的一致性。
    'padded-blocks': 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 0,
    // 要求对象字面量属性名称用引号括起来
    'quote-props': 0,
    // 强制在parseInt()使用基数参数
    'radix': 0,
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': 0,
    // 变量排序
    'sort-vars': 0,
    // 强制在注释中 // 或 /* 使用一致的空格 pdd
    'spaced-comment': 0,
    // 要求或禁止使用严格模式指令
    'strict': 0,
    // 强制使用有效的 JSDoc 注释
    'valid-jsdoc': 0,
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 0,
    // 要求正则表达式被括号括起来
    'wrap-regex': 0,
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 0,
    'vue/html-self-closing': 0,
    //当代码传递给 ESLint 时，这个选项抛出一个错误，此时--fix这个选项不起作用。
    'vue/attributes-order': 0,
    'vue/require-default-prop': 0,
    'vue/attribute-hyphenation': 0,
    'vue/max-attributes-per-line':0,
    'vue/name-property-casing':0,
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],

    // 除了与 null 字面量进行比较时，总是强制使用绝对相等
    'eqeqeq': 0,
    // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误
    'no-control-regex': 0,

    // 禁止使用多个空格
    'no-multi-spaces': 1,
    // 禁止出现多行空行，强制最大连续空行数
    'no-multiple-empty-lines': [1, {
      'max': 1
    }],
    // 禁止出现未使用过的变量
    'no-unused-vars': 1,
    // 强制使用一致的缩进
    // 解决 ESLint: Cannot read property 'range' of null. Please see the 'ESLint' output channel for details.
    // 'indent': [1, 2, {
    //   'SwitchCase': 1
    // }],
    // 禁用行尾空格
    'no-trailing-spaces': 1,

    // 强制在代码块中使用一致的大括号风格
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    // 强制在逗号周围使用空格,禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 逗号风格规则强制逗号分隔列表使用一致的风格,要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    'comma-style': [2, 'last'],
    // 要求在构造函数中有 super() 的调用，派生类中的构造函数必须调用 super()。非派生类的构造函数不能调用 super()JavaScript 引擎将引发一个运行时错误
    'constructor-super': 2,
    // 放宽规则，允许在单行中省略大括号，而if、else if、else、for、while 和 do，在其他使用中依然会强制使用大括号。
    'curly': [2, 'multi-line'],
    // 选项 "property" 要求点操作符和属性放在同一行。
    'dot-location': [2, 'property'],
    // 要求在非空文件末尾至少存在一行空行
    'eol-last': 2,
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': 2,
    // 强制 generator 函数中 * 号周围使用一致的空格,before 强制在 * 和 function 关键字之间有空格,after 强制在 * 和函数名之间有空格
    'generator-star-spacing': [2, {
      'before': true,
      'after': false
    }],
    // 强制 getter 函数中出现 return 语句
    'getter-return': 2,
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [2, {
      'before': true,
      'after': false
    }],
    // 禁止在对象字面量的 键和冒号 之间存在空格，要求在对象字面量的 冒号和值 之间存在至少有一个空格，{"beforeColon": false }
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 要求调用 new 操作符时有首字母大小的函数，要求调用首字母大写的函数时有 new 操作符。
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 要求调用无参构造函数时有圆括号
    'new-parens': 2,
    // 禁止使用 Array 构造函数
    'no-array-constructor': 2,
    // 禁止使用 arguments.caller 和 arguments.callee
    'no-caller': 2,
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': 2,
    'no-debugger': 2,
    // delete 的目的是删除对象的属性。使用 delete 操作删除一个变量可能会导致意外情况发生
    'no-delete-var': 2,
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': 2,
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': 2,
    // 禁止出现重复的 case 标签
    'no-duplicate-case': 2,
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': 2,
    // 禁用 eval()
    'no-eval': 2,
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止不必要的 .bind() 调用，此规则目的在于避免不必要的 bind() 使用，并且当立即执行的函数表达式 (IIFE) 使用 bind()，但是没有一个合适的 this 值时，该规则会发出警告。此规则不会标记有函数参数绑定的bind() 的使用情况。
    'no-extra-bind': 2,
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 2,
    // 禁止 case 语句落空 没有break
    'no-fallthrough': 2,
    // 此规则目的在于消除浮动小数点，并且，当数值的小数点之前或之后缺少数字时，该规则将发出警告。
    'no-floating-decimal': 2,
    // 禁止对 function 声明重新赋值
    'no-func-assign': 2,
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 2,
    // 禁止 function 声明出现在嵌套的语句块中
    'no-inner-declarations': [2, 'functions'],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': 2,
    // 禁止在字符串和注释之外不规则的空白
    'no-irregular-whitespace': 2,
    // 禁用 __iterator__ 属性
    'no-iterator': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用不必要的嵌套块
    'no-lone-blocks': 2,
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': 2,
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': 2,
    // 禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
    'no-new': 2,
    // 禁用 Object 的构造函数，禁用new Object()，使用{}
    'no-new-object': 2,
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 2,
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 2,
    // 禁止把全局对象作为函数调用，禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
    'no-obj-calls': 2,
    // 禁用八进制字面量
    'no-octal': 2,
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 2,
    // 禁止多次声明同一变量
    'no-redeclare': 2,
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': 2,
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 2,
    // 禁用逗号操作符
    'no-sequences': 2,
    // 关键字不能被遮蔽
    'no-shadow-restricted-names': 2,
    // 禁止在函数名和开括号之间有空格
    'func-call-spacing': 2,
    // 禁用稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    'no-this-before-super': 2,
    // 禁止抛出异常字面量，仅仅 抛出(throw) Error 对象本身或者用户自定义的以 Error 对象为基础的异常，被认为是一个很好的实践。使用 Error 对象最基本的好处是它们能自动地追踪到异常产生和起源的地方。
    'no-throw-literal': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止使用令人困惑的多行表达式
    'no-unexpected-multiline': 2,
    // 禁止可以表达为更简单结构的三元操作符
    'no-unneeded-ternary': 2,
    // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    // 禁用 with 语句
    'no-with': 2,
    // 要求每个作用域的初始化的变量有多个变量声明，示例
    // var foo = true;
    // var bar = false;
    // var a, b, c;
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 要求把换行符放在操作符后面，"overrides" 覆盖对指定的操作的全局设置，示例
    //  everything
    // ？42
    // :foo;
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 要求尽可能地使用单引号,允许字符串使用单引号或双引号，只要字符串中包含了一个其它引号，否则需要转义
    // "a string containing 'single' quotes"
    'quotes': [2, 'single', {
      "avoidEscape": true
    }],
    // 要求在语句末尾使用分号
    'semi': [2, 'always'],
    // 要求在关键字之前至少有一个空格
    'keyword-spacing': 2,
    // 块语句必须总是至少有一个前置空格
    'space-before-blocks': [2, 'always'],
    // 禁止在参数的 ( 前面有空格
    'space-before-function-paren': [2, 'never'],
    // 强制圆括号内没有空格
    'space-in-parens': [2, 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 2,
    // 要求或禁止在一元操作符之前或之后存在空格
    // words - 适用于单词类一元操作符，例如：new、delete、typeof、void、yield
    // nonwords - 适用于这些一元操作符: -、+、--、++、!、!!
    //delete foo.bar
    // ++foo;
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 强制 typeof 表达式与有效的字符串进行比较 错误示例
    // typeof foo === "strnig"
    'valid-typeof': 2,
    // 需要把立即执行的函数包裹起来
    // 强制总是包裹，但允许其它风格
    'wrap-iife': [2, 'any'],
    // 如果是默认的 "never"，则比较绝不能是 Yoda 条件 错误示例
    // if (5 > count)
    'yoda': [2, 'never'],
    "vue/html-closing-bracket-newline": [2, {
      "singleline": "never",
      "multiline": "never"
    }],

  }
}
