<template>
  <div
    v-for="particle in particles"
    :key="particle.id"
    class="particle"
    :style="{
      left: particle.x + '%',
      top: particle.y + '%',
      animationDelay: particle.delay + 's',
      animationDuration: particle.duration + 's'
    }"
  ></div>
</template>

<script setup>
import { ref } from 'vue';

const particles = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4
  }))
);
</script>

<style scoped>
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(99, 102, 241, 0.6);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
  }
  66% {
    transform: translateY(15px) rotate(240deg);
  }
}
</style>
