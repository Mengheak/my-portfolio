<script setup lang="ts">
import "./style.css";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
</script>

<template>
  <router-view />
  <About />
  <Contact />
</template>
