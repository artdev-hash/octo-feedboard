<template>
  <div class="hero">@Bicol_Translate</div>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";
const { theme } = useData();
</script>
<style scoped>
.hero {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
  font-size: 1.2rem;
  height: 50px;
}
.heroiimg {
  width: auto;
  margin: auto;
  display: block;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
