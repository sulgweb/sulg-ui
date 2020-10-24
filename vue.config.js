const path = require("path");
const utils = require('./utils/utils')
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./utils/strip-tags')

/* const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

    // ```html `` 给这种样式加个class hljs
    //  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
    //  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
    //  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
    // const fence = MarkdownIt.renderer.rules.fence 
    // MarkdownIt.renderer.rules.fence = function(...args){
    //   args[0][args[1]].attrJoin('class', 'hljs')
    //   var a = fence(...args)
    //   return a
    // }

    // ```code`` 给这种样式加个class code_inline
    const code_inline = MarkdownIt.renderer.rules.code_inline
    MarkdownIt.renderer.rules.code_inline = function(...args){
      args[0][args[1]].attrJoin('class', 'code_inline')
      return code_inline(...args)
    }
    console.log("source", source)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {

        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
} */


module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js", // js入口文件修改
      template: "public/index.html",
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 重新设置目录别名
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));

    // 使 examples及packages目录下的js文件都加入编译
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .include.add("/examples")
      .end()
      .use("babel")
      .loader("babel-loader");


    // 使用vue-markdown-loader
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({raw:true})
  },
}