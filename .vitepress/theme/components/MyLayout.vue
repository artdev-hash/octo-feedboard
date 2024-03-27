<template>
  <Layout>
    <template #doc-before>
      <Title />
      <Category />
    </template>
    <template #doc-after>
      <div>
        <button @click="back">BACK...<svg xmlns="http://www.w3.org/2000/svg" display="block" width="30" height="30" fill="var(--vp-c-green-2)" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/></svg></button>
      </div>
      <Comments />
    </template>
    <!-- Home slot-->
    <template #home-features-after> <Page /></template>
  </Layout>
  <!-- copywright -->
  <CopyWright />
</template>
<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import CopyWright from "./CopyWright.vue";
import Page from "./Page.vue";
import Category from "./Category.vue";
import Title from "./Title.vue";
const { Layout } = DefaultTheme;
const back = () => {
  history.back();
};
</script>
<style scoped>
button {
  display: inline-block;
  position: relative;
  color: var(--vp-c-color-d);
  cursor: pointer;
  font-size: 1.2em;
  font-weight: bold;
}

button::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--vp-c-color-d);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
