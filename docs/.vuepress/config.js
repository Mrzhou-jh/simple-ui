module.exports = {
  title: "🛴 Simple UI",
  base: "/simple-ui/",
  description: "Vue简单易用UI框架",
  head: [["link", { rel: "icon", href: "/" }]],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/home/" },
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://github.com/Mrzhou-jh/simple-ui" },
    ],
    sidebar: [
      {
        title: "开始体验",
        collapsable: false,
        sidebarDepth: 2,
        children: ["/about/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/components/button",
          "/components/input",
          "/components/tabs",
          "/components/popover",
          "/components/dialog",
          "/components/switch",
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: false,
  },
};
