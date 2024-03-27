import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    base: '/octo-feedboard/',
    lang: "en-US",
    title: "octo-feedboard",
    description: "useful data",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/ico",
          href: "octofeed.ico",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "Kim Arthur Lorenzo",
        },
      ],
      [
        "meta",
        {
          property: "project:title",
          content: "Docs",
        },
      ],
      [
        "meta",
        {
          property: "project:description",
          content: "Useful Data Gathered by Kim Arthur Lorenzo",
        },
      ],
    ],
    // cleanUrls: "with-subfolders",
    lastUpdated: false,
    themeConfig: {
      // repo: octofeedboard/home",
      logo: "octofeed.ico",
      search: {
        provider: "local",
      },
      docsDir: "/",
      // docsBranch: "master",
      posts: await getPosts(),
      pageSize: 4,
      postLength: await getPostLength(),
      nav: [
        {
          text: "🏠 Topics",
          link: "/",
        }
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/artdev-hash" },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></path>
            </svg>`,
          },
          link: "https://www.facebook.com/kimITservices",
        },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="20"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></path>
            </svg>`,
          },
          link: "https://twitter.com/devkimlorenzo",
        },
        {
          icon: {
            svg: `<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="20">
            <path d="M874.666667 375.189333V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V375.189333l266.090667 225.6a149.333333 149.333333 0 0 0 193.152 0L874.666667 375.189333zM810.666667 213.333333a64.789333 64.789333 0 0 1 22.826666 4.181334 63.616 63.616 0 0 1 26.794667 19.413333 64.32 64.32 0 0 1 9.344 15.466667c2.773333 6.570667 4.48 13.696 4.906667 21.184L874.666667 277.333333v21.333334L553.536 572.586667a64 64 0 0 1-79.893333 2.538666l-3.178667-2.56L149.333333 298.666667v-21.333334a63.786667 63.786667 0 0 1 35.136-57.130666A63.872 63.872 0 0 1 213.333333 213.333333h597.333334z" ></path>
            </svg>`,
          },
          link: "mailto:dev@lorenzokimarthur.com",
        }
      ],
      aside: false,
    }
  };
}
export default config();


