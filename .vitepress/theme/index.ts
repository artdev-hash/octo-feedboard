import DefaultTheme from "vitepress/theme";
import Tags from "./components/Tags.vue";
import MyLayout from "./components/MyLayout.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    // register global components
    app.component("Tags", Tags);
  },
};
