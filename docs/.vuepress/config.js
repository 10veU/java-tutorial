const path = require("path")

module.exports = {
  base: "/java-tutorial",
  title: "🌱重学Java",
  theme: "vuepress-theme-minimalism",
  themeConfig: {
    nav: [
      {
        text: "📝文档",
        link: "/list/"
      },
      {
        text: "🏷️标签",
        link: "/tag/"
      }
    ],
    footer: {
      contact: "联系",
      links: [
        {
          text: "♥️GitHub",
          link: "https://github.com/10veU"
        }
      ]
    },
    // comment: {
    //   service: "disqus",
    //   shortname: "10veU-1"
    // },
    
  },
  markdown: {
    // lineNumbers: true
  }
}
