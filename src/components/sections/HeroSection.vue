<template>
  <section class="hero-section" ref="heroSection">
    <div>
      <h1
        class="hero-title"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
      >
        Personal Interests
      </h1>
      <p
        class="hero-subtitle"
        :style="{ transform: `translateY(${scrollY * 0.2}px)` }"
      >
        Exploring passions that shape creativity and drive innovation
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const heroSection = ref(null);
const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// expose the ref if needed by parent
</script>

<style scoped>
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out 1s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
