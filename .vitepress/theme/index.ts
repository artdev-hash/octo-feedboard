import DefaultTheme from "vitepress/theme";
import Tags from "./components/Tags.vue";
import MyLayout from "./components/MyLayout.vue";
import Dev from "./components/Dev.vue";
import Work from "./components/Projie.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Tags", Tags);
    app.component("Dev", Dev);
    app.component("Work", Work);
  },
};
