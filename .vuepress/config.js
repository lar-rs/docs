module.exports = {
  title: "LAR OEE Documentation",
  description: "OEE internal documentation",
  themeConfig: {
    repo: "lar-rs/pwa",
    docsRepo: "lar-rs/docs",
    editLinks: true,
    lastUpdated: "Last Updated",
    logo: "/logo.png",
    sidebar: [
      {
        title: "🚀 Getting started",
        path: "/",
        collapsable: false,
        sidebarDepth: 0,
        children: [
          "/getting_started/foreword",
          "/getting_started/quickstart",
          "/getting_started/features",
          "/getting_started/download"
        ]
      },
      {
        title: "💡 Main concepts",
        path: "/main_concepts/",
        collapsable: false,
        sidebarDepth: 1,
        children: [
          "/main_concepts/indexes",
          "/main_concepts/documents",
          "/main_concepts/search"
        ]
      },
      {
        title: "📚 Advanced Guides",
        path: "/advanced_guides/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/advanced_guides/binary",
          "/advanced_guides/typotolerance",
          "/advanced_guides/concat",
          "/advanced_guides/ranking",
          "/advanced_guides/synonyms",
          "/advanced_guides/stop_words",
          "/advanced_guides/search_parameters",
          "/advanced_guides/keys",
          "/advanced_guides/prefix",
          "/advanced_guides/distinct",
          "/advanced_guides/asynchronous_updates",
          "/advanced_guides/bucket_sort"
        ]
      },
      {
        title: "📚 Umweltanalytic",
        path: "/uweltanalytik/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/uweltanalytik/calibration",
          "/uweltanalytik/total_carbon",
          "/uweltanalytik/total_organic_carbon",
          "/uweltanalytik/total_inorganic_carbon",
          "/advanced_guides/methods",
        ]
      },
      {
        title: "📒 Hardware",
        path: "/hardware/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/hardware/drivers",
          "/hardware/links",
          "/hardware/rs485",
          "/hardware/rs232",
          "/hardware/can",
          "/hardware/adc",
          "/hardware/pwm",
          "/hardware/pc",
          "/hardware/epaper",
          "/hardware/oled",
          "/hardware/touch",
        ]
      },
      {
        title: "📒 Development environment",
        path: "/development_environment/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/development_environment/",
          "/development_environment/rust",
          "/development_environment/git",
          "/development_environment/npm",
          "/development_environment/rfcprocess",
          "/development_environment/editor",
          "/development_environment/awesome",
          "/development_environment/generate",
          "/development_environment/markdown",
        ]
      },
      {
        title: "📒 API References",
        path: "/references/",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          "/references/indexes",
          "/references/documents",
          "/references/search",
          "/references/synonyms",
          "/references/stop_words",
          "/references/updates",
          "/references/keys",
          "/references/settings",
          "/references/stats",
          "/references/health",
          "/references/version",
          "/references/sys-info"
        ]
      }
    ]
  },
  plugins: [
    ["check-md", { pattern: "**/*.md" }],
    ["sitemap", { hostname: "https://docs.oee.lar.com" }],
    ["seo", {}],
    "vuepress-plugin-element-tabs"
  ],
  head: [
    [
      "script",
      {},
      `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="38a71dd2-729c-4970-b061-3e1db1c1eb20";
      (function() {
          var d=document;
          var s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `
    ],
    [
      "script",
      {},
      `
    (function(f, a, t, h, o, m){
      a[h]=a[h]||function(){
        (a[h].q=a[h].q||[]).push(arguments)
      };
      o=f.createElement('script'),
      m=f.getElementsByTagName('script')[0];
      o.async=1; o.src=t; o.id='fathom-script';
      m.parentNode.insertBefore(o,m)
    })(document, window, '//analytics.meilisearch.com/tracker.js', 'fathom');
    fathom('set', 'siteId', 'XQNHD');
    fathom('trackPageview');
    `
    ]
  ]
};
