<template>
  <section
    ref="aboutSection"
    class="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-gray-300"
    @mousemove="handleMouseMove"
  >
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="absolute animate-pulse particle"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's',
          transform: `translateZ(${particle.z}px) scale(${particle.scale})`,
        }"
      >
        <div
          class="w-0.5 h-12 bg-gradient-to-b from-blue-400 via-green-400 to-transparent opacity-50"
        ></div>
      </div>
    </div>

    <div class="absolute inset-0 opacity-5 grid-bg"></div>

    <div
      ref="floatingShape1"
      class="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-3xl rotate-12 animate-float opacity-40 floating-element"
      :style="{
        transform: `translate3d(${mouseParallax.x * 0.2}px, ${
          mouseParallax.y * 0.2
        }px, 0) rotate(12deg)`,
      }"
    ></div>
    <div
      ref="floatingShape2"
      class="absolute bottom-24 left-12 w-24 h-24 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl animate-pulse opacity-30 floating-element"
      :style="{
        transform: `translate3d(${mouseParallax.x * -0.15}px, ${
          mouseParallax.y * -0.15
        }px, 0)`,
      }"
    ></div>
    <div
      ref="floatingShape3"
      class="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-xl rotate-45 animate-spin opacity-20 floating-element"
      :style="{
        transform: `translate3d(${mouseParallax.x * 0.3}px, ${
          mouseParallax.y * 0.3
        }px, 0) rotate(45deg)`,
        animationDuration: '20s',
      }"
    ></div>

    <div
      v-for="(orb, index) in floatingOrbs"
      :key="'orb-' + index"
      class="absolute pointer-events-none floating-orb"
      :style="{
        left: orb.x + '%',
        top: orb.y + '%',
        width: orb.size + 'px',
        height: orb.size + 'px',
        transform: `translate3d(${mouseParallax.x * orb.speed}px, ${
          mouseParallax.y * orb.speed
        }px, 0)`,
        background: `radial-gradient(circle, ${orb.color}20 0%, transparent 70%)`,
        animationDelay: orb.delay + 's',
        animationDuration: orb.duration + 's',
      }"
    ></div>

    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10"
    >
      <div
        ref="sectionHeader"
        class="text-center mb-16 opacity-0 transform translate-y-10"
        :style="{ transform: `translate3d(0, ${scrollParallax.header}px, 0)` }"
      >
        <div class="inline-block mb-4">
          <span
            class="text-green-400 font-mono text-sm tracking-wider glitch-text"
            >&lt; About /&gt;</span
          >
        </div>
        <h2
          class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-size-200 animate-gradient-x magnetic-element"
        >
          About Me
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full magnetic-element"
        ></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-8">
          <div
            ref="mainText"
            class="space-y-6 opacity-0 transform translate-y-10"
            :style="{
              transform: `translate3d(0, ${scrollParallax.content}px, 0)`,
            }"
          >
            <p class="text-lg sm:text-xl leading-relaxed magnetic-text">
              I'm a passionate
              <span
                class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 glitch-hover"
                >Full Stack Developer</span
              >
              with a deep love for crafting modern, scalable, and accessible web
              applications.
            </p>

            <p
              class="text-base sm:text-lg leading-relaxed text-gray-400 magnetic-text"
            >
              With expertise in cutting-edge technologies like
              <span
                class="font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer tech-highlight"
                >React</span
              >,
              <span
                class="font-semibold text-green-400 hover:text-green-300 transition-colors cursor-pointer tech-highlight"
                >Vue.js</span
              >,
              <span
                class="font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer tech-highlight"
                >TypeScript</span
              >, and
              <span
                class="font-semibold text-green-400 hover:text-green-300 transition-colors cursor-pointer tech-highlight"
                >Node.js</span
              >, I create seamless digital experiences that push the boundaries
              of what's possible on the web.
            </p>

            <p
              class="text-base sm:text-lg leading-relaxed text-gray-400 magnetic-text"
            >
              I thrive in collaborative environments and am constantly exploring
              new technologies to deliver innovative solutions that make a real
              impact. My goal is to bridge the gap between beautiful design and
              robust functionality.
            </p>
          </div>

          <div
            ref="statsSection"
            class="grid grid-cols-2 sm:grid-cols-3 gap-6 py-8 opacity-0 transform translate-y-10"
            :style="{
              transform: `translate3d(0, ${scrollParallax.stats}px, 0)`,
            }"
          >
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="text-center group stat-card magnetic-element"
              @mouseenter="handleStatHover(index)"
              @mouseleave="handleStatLeave(index)"
            >
              <div
                class="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 stat-icon"
              >
                <span class="text-2xl font-bold" :class="stat.color">{{
                  stat.value
                }}</span>
              </div>
              <p class="text-sm text-gray-400 transition-colors duration-300">
                {{ stat.label }}
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="border border-blue-400 rounded-lg px-3 py-2 cta-button magnetic-element"
              @click="goToPersonal"
            >
              See my personal
            </button>
          </div>
        </div>

        <div class="space-y-8">
          <div
            ref="techStack"
            class="opacity-0 transform translate-y-10"
            :style="{
              transform: `translate3d(0, ${scrollParallax.tech}px, 0)`,
            }"
          >
            <h3
              class="text-2xl font-bold mb-6 text-white flex items-center gap-3 magnetic-element"
            >
              <div
                class="w-2 h-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-full pulse-glow"
              ></div>
              Tech Stack
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div
                v-for="(category, index) in techCategories"
                :key="category.name"
                class="group cursor-pointer tech-card magnetic-element"
                :style="{ transitionDelay: index * 0.1 + 's' }"
                @mouseenter="handleTechHover(index)"
                @mouseleave="handleTechLeave(index)"
              >
                <div
                  class="p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-green-500/10 transition-all duration-500 hover:scale-105 tech-card-inner"
                >
                  <div class="text-center h-[150px]">
                    <div
                      class="size-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 tech-icon"
                    >
                      <span class="text-xl tech-emoji">{{
                        category.icon
                      }}</span>
                    </div>
                    <h4
                      class="font-semibold text-white text-sm mb-2 tech-title"
                    >
                      {{ category.name }}
                    </h4>
                    <div class="space-y-1">
                      <p
                        v-for="tech in category.techs"
                        :key="tech"
                        class="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 tech-item"
                      >
                        {{ tech }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="skillBadges"
            class="opacity-0 transform translate-y-10"
            :style="{
              transform: `translate3d(0, ${scrollParallax.skills}px, 0)`,
            }"
          >
            <h3
              class="text-2xl font-bold mb-6 text-white flex items-center gap-3 magnetic-element"
            >
              <div
                class="w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full pulse-glow"
              ></div>
              Core Skills
            </h3>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="(skill, index) in skills"
                :key="skill"
                class="group cursor-pointer transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 skill-badge magnetic-element"
                :style="{ transitionDelay: index * 0.05 + 's' }"
                @mouseenter="handleSkillHover(index)"
                @mouseleave="handleSkillLeave(index)"
              >
                <div
                  class="relative overflow-hidden px-4 py-2 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-green-500/10 transition-all duration-500 skill-badge-inner"
                >
                  <div
                    class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-green-400/20 to-blue-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skill-shimmer"
                  ></div>
                  <span
                    class="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors z-10 skill-text"
                  >
                    {{ skill }}
                  </span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref="ctaButtons"
        class="flex flex-col sm:flex-row gap-4 justify-center pt-16 opacity-0 transform translate-y-10"
        :style="{ transform: `translate3d(0, ${scrollParallax.cta}px, 0)` }"
      >
        <button
          class="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-xl font-semibold text-white transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-600 before:to-blue-600 before:transform before:scale-x-0 before:transition-transform before:duration-500 hover:before:scale-x-100 cta-button magnetic-element"
          @click="handleResumeClick"
          @mouseenter="handleButtonHover"
          @mouseleave="handleButtonLeave"
        >
          <span
            class="relative flex items-center justify-center gap-2 z-10 button-content"
          >
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </span>
        </button>

        <button
          class="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-green-400/60 rounded-xl font-semibold text-green-400 backdrop-blur-sm transition-all duration-500 hover:border-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-blue-500/10 hover:scale-105 hover:text-white cta-button magnetic-element"
          @click="handleContactClick"
          @mouseenter="handleButtonHover"
          @mouseleave="handleButtonLeave"
        >
          <span class="flex items-center justify-center gap-2 button-content">
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Let's Talk
          </span>
        </button>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 pulse-glow"
    ></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, reactive } from "vue";
import { yearsFromDate } from "../utils/getYears";
import { useRouter } from "vue-router";
const router = useRouter();
const goToPersonal = () => {
  return router.push("/personal");
};
const aboutSection = ref<HTMLElement>();
const sectionHeader = ref<HTMLElement>();
const mainText = ref<HTMLElement>();
const statsSection = ref<HTMLElement>();
const techStack = ref<HTMLElement>();
const skillBadges = ref<HTMLElement>();
const ctaButtons = ref<HTMLElement>();
const floatingShape1 = ref<HTMLElement>();
const floatingShape2 = ref<HTMLElement>();
const floatingShape3 = ref<HTMLElement>();

const mouseParallax = reactive({ x: 0, y: 0 });
const scrollParallax = reactive({
  header: 0,
  content: 0,
  stats: 0,
  tech: 0,
  skills: 0,
  cta: 0,
});

const particles = ref(
  Array.from({ length: 30 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 100,
    scale: Math.random() * 0.8 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 2 + 2,
  }))
);

const floatingOrbs = ref(
  Array.from({ length: 8 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 80 + 40,
    speed: Math.random() * 0.4 + 0.1,
    color: i % 2 === 0 ? "#3b82f6" : "#22c55e",
    delay: Math.random() * 3,
    duration: Math.random() * 8 + 12,
  }))
);

const skills = [
  "React",
  "Vue.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Node.js",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "REST APIs",
  "GraphQL",
  "Git",
  "Figma",
  "Responsive Design",
];

const stats = [
  {
    value: `${
      yearsFromDate(new Date("2024-12-30")) == 0
        ? yearsFromDate(new Date("2024-12-30")) + 1
        : yearsFromDate(new Date("2024-12-30"))
    }+`,
    label: "Years Experience",
    color: "text-blue-400",
  },
  { value: "10+", label: "Projects Built", color: "text-green-400" },
  { value: "∞", label: "Learning Always", color: "text-blue-400" },
];

const techCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    techs: ["React", "Vue.js", "TypeScript"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    techs: ["Node.js", "Python", "Django"],
  },
  {
    name: "Database",
    icon: "🗄️",
    techs: ["PostgreSQL", "MongoDB"],
  },
  {
    name: "Cloud",
    icon: "☁️",
    techs: ["AWS", "Docker", "Kubernetes"],
  },
  {
    name: "Mobile",
    icon: "📱",
    techs: ["React Native", "Java"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    techs: ["Git", "Postman", "VS Code"],
  },
];

const handleMouseMove = (event: MouseEvent) => {
  if (!aboutSection.value) return;

  const rect = aboutSection.value.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  mouseParallax.x = ((event.clientX - rect.left - centerX) / centerX) * 50;
  mouseParallax.y = ((event.clientY - rect.top - centerY) / centerY) * 50;
};

const handleScroll = () => {
  const scrolled = window.pageYOffset;
  const parallaxMultipliers = {
    header: 0.3,
    content: 0.2,
    stats: 0.4,
    tech: 0.1,
    skills: 0.25,
    cta: 0.35,
  };
  const scrollParallax: Record<keyof typeof parallaxMultipliers, number> = {
    header: 0,
    content: 0,
    stats: 0,
    tech: 0,
    skills: 0,
    cta: 0,
  };
  Object.keys(parallaxMultipliers).forEach((key) => {
    const typedKey = key as keyof typeof parallaxMultipliers;
    scrollParallax[typedKey] = -(scrolled * parallaxMultipliers[typedKey]);
  });

  particles.value.forEach((particle, index) => {
    const element = document.querySelector(`.particle:nth-child(${index + 1})`);
    if (element) {
      const speed = 0.1 + (index % 3) * 0.05;
      particle.y = (particle.y + speed) % 100;
    }
  });
};

const handleResumeClick = () => {
  const link = document.createElement("a");
  link.href = "/path-to-your-resume.pdf";
  link.download = "Chheang_Mengheak_Resume.pdf";
  link.click();
};

const handleContactClick = () => {
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

const handleStatHover = (index: number) => {
  const statCard = document.querySelectorAll(".stat-card")[index];
  if (statCard) {
    statCard.classList.add("stat-hover");
  }
};

const handleStatLeave = (index: number) => {
  const statCard = document.querySelectorAll(".stat-card")[index];
  if (statCard) {
    statCard.classList.remove("stat-hover");
  }
};

const handleTechHover = (index: number) => {
  const techCard = document.querySelectorAll(".tech-card")[index];
  if (techCard) {
    techCard.classList.add("tech-hover");
  }
};

const handleTechLeave = (index: number) => {
  const techCard = document.querySelectorAll(".tech-card")[index];
  if (techCard) {
    techCard.classList.remove("tech-hover");
  }
};

const handleSkillHover = (index: number) => {
  const skillBadge = document.querySelectorAll(".skill-badge")[index];
  if (skillBadge) {
    skillBadge.classList.add("skill-hover");
  }
};

const handleSkillLeave = (index: number) => {
  const skillBadge = document.querySelectorAll(".skill-badge")[index];
  if (skillBadge) {
    skillBadge.classList.remove("skill-hover");
  }
};

const handleButtonHover = (event: Event) => {
  const button = event.target as HTMLElement;
  button.classList.add("button-hover");
};

const handleButtonLeave = (event: Event) => {
  const button = event.target as HTMLElement;
  button.classList.remove("button-hover");
};

const observeElements = () => {
  const elements = [
    sectionHeader.value,
    mainText.value,
    statsSection.value,
    techStack.value,
    skillBadges.value,
    ctaButtons.value,
  ].filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  elements.forEach((el) => {
    if (el) observer.observe(el);
  });
};

onMounted(async () => {
  await nextTick();
  observeElements();

  window.addEventListener("scroll", handleScroll, { passive: true });

  const magneticElements = document.querySelectorAll(".magnetic-element");
  magneticElements.forEach((el) => {
    const element = el as HTMLElement;

    element.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate3d(${x * 0.1}px, ${y * 0.1}px, 0)`;
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "translate3d(0, 0, 0)";
    });
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes gradient-x {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(34, 197, 94, 0.4);
  }
}

@keyframes glitch {
  0%,
  100% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-2px);
  }
  40% {
    transform: translateX(2px);
  }
  60% {
    transform: translateX(-1px);
  }
  80% {
    transform: translateX(1px);
  }
}

@keyframes floating-orb {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate3d(0, -30px, 0) scale(1.1);
    opacity: 0.6;
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.bg-size-200 {
  background-size: 200% 200%;
}

.pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.glitch-text:hover {
  animation: glitch 0.3s ease-in-out;
}

.glitch-hover:hover {
  animation: glitch 0.5s ease-in-out;
  text-shadow: 2px 0 #3b82f6, -2px 0 #22c55e;
}

.floating-orb {
  border-radius: 50%;
  animation: floating-orb 15s ease-in-out infinite;
}

.floating-element {
  transition: transform 0.1s ease-out;
}

.magnetic-element {
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.magnetic-text:hover {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}

.tech-highlight:hover {
  transform: scale(1.05);
  text-shadow: 0 0 15px currentColor;
}

.stat-card.stat-hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.tech-card.tech-hover {
  transform: scale(1.08) rotateY(5deg);
  box-shadow: 0 15px 40px rgba(34, 197, 94, 0.2);
}

.skill-badge.skill-hover {
  transform: scale(1.15) translateY(-8px) rotateZ(5deg);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.cta-button.button-hover {
  transform: scale(1.08) translateY(-3px);
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}

.grid-bg {
  background-image: linear-gradient(
      rgba(59, 130, 246, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: float 20s ease-in-out infinite;
}

.particle {
  transition: transform 0.1s ease-out;
  filter: blur(0.5px);
}

::selection {
  background: rgba(59, 130, 246, 0.3);
  color: white;
}

::-moz-selection {
  background: rgba(59, 130, 246, 0.3);
  color: white;
}

@media (max-width: 640px) {
  .floating-element {
    transform: scale(0.7);
  }

  .magnetic-element {
    transform: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-gradient-x,
  .pulse-glow,
  .floating-orb {
    animation: none;
  }

  .magnetic-element {
    transform: none !important;
  }
}
</style>
