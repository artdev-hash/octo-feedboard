<template>
    <br><br>
    <div class="main">    
    <h1 class="about-header">👨‍💻 Others Etc..</h1><br>
    <code>Recent  💡  >></code><br>
    <code>- hacktoberfest 23</code><br>
    <code>- bicoltranslate</code><br>
    <code>- feedboard</code><br>
    <code>- <a href="lorenzokimarthur.com" target="_blank" rel="noopener">Developer</a></code><br>
    <code>- Hacktoberfest 22</code><br>
    <code>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener">DEVS</a></code> <br>
    <code>- SNAMEGENERATOR</code><br>
    <code>- 30 Days Flutter 21</code><br>
    <code>- KRPRT-OCTO-UPLOADER</code><br>
    <code>- KSHARED-NOCTO-COPIER</code><br>
    <code>- PLANBANK website</code><br>
    <code>- CQMS - Customer Queuing Management System</code><br>
    <code>- LMS - Library Management System</code><br>
    <code>- vbex-dot.net</code>
  
    <br><br><br><br>
    </div>
</template>

<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>
<style scoped>
.main {
  margin: 0 auto;
  padding: 0.5rem 1.5rem 4rem;
  max-width: 32rem;
}
.about-header {
  font-weight: bold;
  padding-bottom: 14px;
  font-size: 2.25em;
  margin-top: 24px;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  img:hover{
    background-color: hsla(160, 100%, 37%, 0.2);
  }
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>