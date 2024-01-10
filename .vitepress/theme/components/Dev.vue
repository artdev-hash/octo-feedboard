<template>
  <br><br>
  <div class="main">    
  <h1 class="about-header">👨‍💻 About Me</h1><br>
  <code><b>I'm a IT Specialist / Developer </b></code><br>
  <code><b>A Computer Science Graduate</b></code><br>
  <code><b>Freelance, IT CS related works at the moment</b></code><br>
  <code><b>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br>
  <code><b>Passionate to Learn new skills and knowledges</b></code><br>
  <div class="typewriter-effect">
  <div class="text" id="typewriter-text"></div>
  <code><b>A Trustworthy person</b></code></div>
  <br>
  <code><b>ENV :</b></code>
  <div class="container">
  <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></div>
  <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></div>
  <div class="image"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40"/></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40"/></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"></div>
  <div class="image"><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40"></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40"></div>
  <div class="image"><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40"></div>
  </div>
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

.typewriter-effect > .text {
max-width: 0;
animation: typing 3s steps(var(--characters)) infinite;
white-space: nowrap;
overflow: hidden;
}

.typewriter-effect::after {
content: " |";
animation: blink 1s infinite;
animation-timing-function: step-end;
}

@keyframes typing {
75%,
100% {
  max-width: calc(var(--characters) * 1ch);
}
}

@keyframes blink {
0%,
75%,
100% {
  opacity: 1;
}
25% {
  opacity: 0;
}
}

.container {
align-items: center; 
float: left;
}
.image{
  float: left;
padding: 5px;
}
</style>