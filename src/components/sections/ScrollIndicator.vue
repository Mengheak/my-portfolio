<template>
  <div class="scroll-indicator">
    <div
      v-for="index in sectionCount"
      :key="index"
      class="scroll-dot"
      :class="{ active: currentSection === index - 1 }"
      @click="scrollToSection(index - 1)"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  sectionCount: Number,
  currentSection: Number,
  scrollToSection: Function,
});
</script>

<style scoped>
.scroll-indicator {
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
}

.scroll-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.scroll-dot.active {
  background: #667eea;
  transform: scale(1.2);
}
</style>
