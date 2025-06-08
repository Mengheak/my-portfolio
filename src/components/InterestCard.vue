<template>
  <div class="flex items-center gap-4 bg-white/10 rounded-lg p-4 shadow-md backdrop-blur-md text-white">
    <div
      :class="'w-2 h-16 rounded-full bg-gradient-to-b ' + iconColor + ' pulse-glow'"
    ></div>
    <div>
      <h3 class="text-lg font-semibold mb-1">{{ title }}</h3>
      <p class="text-sm max-w-xs">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  iconColor: string;
}>();
</script>

<style scoped>
.pulse-glow {
  animation: pulse 2s infinite;
  color: white;
}
@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
    box-shadow: 0 0 6px currentColor;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 14px currentColor;
  }
}
</style>
