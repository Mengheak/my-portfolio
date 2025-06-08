<template>
  <Home />
  <About />
  <Contact />
</template>

<script lang="ts">
import Home from "./Home.vue";
import Contact from "./Contact.vue";
import About from "./About.vue";

export default {
  name: "MainHome",
  components: {
    Home,
    Contact,
    About,
  },
};
</script>
