<template>
  <h1
    class="text-2xl gap-3 flex w-full items-center justify-center text-center font-bold mt-4 text-white"
  >
    <div
      class="w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full pulse-glow"
    ></div>
    {{ title }}
  </h1>
</template>
<script lang="ts">
export default {
  name: "title",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
