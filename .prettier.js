module.exports = {
  singleQuote: true, //使用单引号
  trailingComma: "es5", //在 ES5 中有效的尾随逗号（对象、数组等）
  tabWidth: 2, //指定每个缩进级别的空格数
  semi: true, //语句的末尾加分号 eslint有校验
  useTabs: false, // tab用于缩进 Prettier 使用空格来对齐事物
  quoteProps: "consistent", // object对象中key值是否加引号
  bracketSpacing: true, // object对象里面的key和value值和括号间的空格(bracketSpacing: <bool>)
  arrowParens: "always", // 箭头函数单个参数的情况是否省略括号，默认always是总是带括号（arrowParens: "<always|avoid>"）
  vueIndentScriptAndStyle: false, //不要在 Vue 文件中缩进脚本和样式标签 开启可能会破坏编辑器的代码折叠
  endOfLine: "auto", //保持现有的行尾（一个文件中的混合值通过查看第一行之后使用的内容进行标准化）
};
