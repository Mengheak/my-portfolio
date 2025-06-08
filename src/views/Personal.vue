<template>
  <section
    class="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black p-8"
  >
    <Titles title="Personal Interests" />

    <!-- Falling bars -->
    <div
      v-for="bar in bars"
      :key="bar.id"
      class="absolute animate-fall"
      :style="{
        left: bar.left,
        top: bar.top,
        animationDelay: bar.delay,
        animationDuration: bar.duration,
      }"
      @animationiteration="resetBar(bar.id)"
    >
      <div
        class="w-0.5 h-8 bg-gradient-to-b from-blue-400 via-green-400/30 to-transparent opacity-60"
      ></div>
    </div>

    <!-- Personal Interest Cards -->
    <div
      class="relative grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16"
    >
      <InterestCard
        title="Game"
        description="I enjoy RPGs, strategy games, and competitive shooters."
        iconColor="from-purple-400 to-indigo-500"
      />
      <InterestCard
        title="Anime"
        description="Favorite genres: action, fantasy, and slice of life."
        iconColor="from-pink-400 to-red-500"
      />
      <InterestCard
        title="Subject"
        description="Loving computer science and psychology."
        iconColor="from-green-400 to-blue-400"
      />
      <InterestCard
        title="Movie"
        description="Fan of sci-fi, thrillers, and documentaries."
        iconColor="from-yellow-400 to-orange-400"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, defineComponent } from "vue";
import Titles from "../components/Titles.vue";
import InterestCard from "../components/InterestCard.vue";

const bars = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 2 + 1}s`,
  }))
);

function resetBar(id: number) {
  const bar = bars.value.find((b) => b.id === id);
  if (bar) {
    bar.left = `${Math.random() * 100}%`;
    bar.top = `0%`;
    bar.delay = `${Math.random() * 3}s`;
    bar.duration = `${Math.random() * 2 + 1}s`;
  }
}
</script>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100vh);
  }
}
.animate-fall {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.pulse-glow {
  animation: pulse 2s infinite;
  color: white;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 0.7;
    box-shadow: 0 0 6px currentColor;
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 14px currentColor;
  }
}
</style>
