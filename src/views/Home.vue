<template>
  <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
    <div class="absolute inset-0 overflow-hidden opacity-30">
      <div
        v-for="i in 30"
        :key="i"
        class="absolute animate-pulse"
        :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 2 + 1}s`,
        }"
      >
        <div class="w-0.5 h-8 bg-gradient-to-b from-blue-400 via-green-400 to-transparent opacity-60"></div>
      </div>
    </div>

    <div
      ref="floatingShape1"
      class="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl rotate-45 opacity-0 transform translate-y-10"
      :style="{ 
        transform: `translateY(${parallaxValues.shape1}px) rotate(45deg)`,
        animation: 'float 6s ease-in-out infinite'
      }"
    ></div>
    <div
      ref="floatingShape2"
      class="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full animate-pulse opacity-0 transform translate-y-10"
      :style="{ transform: `translateY(${parallaxValues.shape2}px)` }"
    ></div>
    <div
      ref="floatingShape3"
      class="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-lg opacity-0 transform translate-y-10"
      :style="{ 
        transform: `translateY(${parallaxValues.shape3}px) rotate(${parallaxValues.rotation}deg)`,
        animation: 'spin 12s linear infinite'
      }"
    ></div>

    <div
      class="absolute inset-0 opacity-5"
      :style="{
        transform: `translateY(${parallaxValues.grid}px)`,
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }"
    ></div>

    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10"
      :style="{ transform: `translateY(${parallaxValues.content}px)` }"
    >
      <div class="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-16">
        <div class="flex-1 space-y-6 lg:space-y-8 text-center xl:text-left">
          <div
            ref="heroText"
            class="space-y-4 opacity-0 transform translate-y-10"
          >
            <div class="flex flex-col space-y-2">
              <span
                class="text-green-400 font-mono text-sm sm:text-base tracking-wider"
                :style="{ transform: `translateX(${parallaxValues.tagline}px)` }"
              >
                &lt; Hello World /&gt;
              </span>
              <h1 class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight">
                <span 
                  class="block text-white mb-2"
                  :style="{ transform: `translateX(${parallaxValues.hiText}px)` }"
                >
                  Hi, I'm
                </span>
                <span
                  :class="`block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 ${isTyping ? 'animate-pulse' : ''}`"
                  :style="{
                    transform: `translateX(${parallaxValues.nameText}px)`,
                    backgroundSize: '200% 200%',
                    animation: 'gradient-x 3s ease infinite'
                  }"
                >
                  {{ displayedName }}
                  <span class="animate-ping text-green-400 ml-1">|</span>
                </span>
              </h1>
            </div>

            <div class="space-y-4">
              <p
                class="text-lg sm:text-xl xl:text-2xl text-gray-300 max-w-3xl leading-relaxed"
                :style="{ transform: `translateY(${parallaxValues.description}px)` }"
              >
                A passionate
                <span class="relative inline-block group">
                  <span class="text-white font-bold bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                    Full Stack Developer
                  </span>
                  <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-500"></span>
                </span>
                crafting cutting-edge digital experiences with modern technologies.
              </p>

              <div
                class="flex items-center justify-center xl:justify-start gap-4 text-sm text-gray-400"
                :style="{ transform: `translateX(${parallaxValues.statusBadges}px)` }"
              >
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for hire</span>
                </div>
                <div class="w-px h-4 bg-gray-600"></div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Based in Cambodia</span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref="skillBadges"
            class="flex flex-wrap gap-3 justify-center xl:justify-start py-6 opacity-0 transform translate-y-10"
            :style="{ transform: `translateY(${parallaxValues.skills}px)` }"
          >
            <span
              v-for="(skill, index) in skills"
              :key="skill"
              class="group cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              :style="{ 
                transitionDelay: `${index * 0.1}s`,
                transform: `translateY(${parallaxValues.skills + (index * 2)}px) scale(1)`
              }"
            >
              <div class="relative overflow-hidden px-4 py-2 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-green-500/10 transition-all duration-300">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-green-400/20 to-blue-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span class="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors z-10">
                  {{ skill }}
                </span>
              </div>
            </span>
          </div>

          <div
            ref="ctaButtons"
            class="flex flex-col sm:flex-row gap-4 pt-6 justify-center xl:justify-start opacity-0 transform translate-y-10"
            :style="{ transform: `translateY(${parallaxValues.buttons}px)` }"
          >
            <button
              class="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-xl font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-600 before:to-blue-600 before:transform before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100"
              @click="handleProjectsClick"
            >
              <span class="relative flex items-center justify-center gap-2 z-10">
                <svg
                  class="w-5 h-5 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                View Projects
              </span>
            </button>

            <button
              class="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-green-400/60 rounded-xl font-semibold text-green-400 backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-blue-500/10 hover:scale-105 hover:text-white"
              @click="handleContactClick"
            >
              <span class="flex items-center justify-center gap-2">
                <svg
                  class="w-5 h-5 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </span>
            </button>
          </div>

          <div
            ref="socialLinks"
            class="flex gap-6 justify-center xl:justify-start pt-8 opacity-0 transform translate-y-10"
            :style="{ transform: `translateY(${parallaxValues.social}px)` }"
          >
            <a
              v-for="(social, index) in socialLinksData"
              :key="social.name"
              :href="social.url"
              class="group relative p-4 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-green-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              :aria-label="social.name"
              :style="{ 
                transitionDelay: `${index * 0.1}s`,
                transform: `translateY(${parallaxValues.social + (index * 1.5)}px) scale(1)`
              }"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/0 to-green-400/0 group-hover:from-blue-400/10 group-hover:to-green-400/10 rounded-xl transition-all duration-300"></div>
              <svg
                class="w-6 h-6 text-gray-400 group-hover:text-white transition-colors relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path :d="getSocialIcon(social.name)" />
              </svg>
            </a>
          </div>
        </div>

        <div class="flex-1 flex justify-center xl:justify-end">
          <div
            ref="profileSection"
            class="relative group opacity-0 transform translate-y-10"
            :style="{ 
              transform: `translateY(${parallaxValues.profile}px) scale(${parallaxValues.profileScale})` 
            }"
          >
            <div 
              class="absolute -inset-8 opacity-30"
              :style="{ transform: `rotate(${parallaxValues.profileRings}deg)` }"
            >
              <div class="absolute inset-0 rounded-full border border-blue-400/20" style="animation: spin 20s linear infinite"></div>
              <div class="absolute inset-4 rounded-full border border-green-400/20" style="animation: spin 15s linear infinite reverse"></div>
              <div class="absolute inset-8 rounded-full border border-blue-400/10 animate-pulse"></div>
            </div>

            <div class="relative">
              <div
                class="w-72 h-72 sm:w-80 sm:h-80 xl:w-96 xl:h-96 rounded-3xl p-1 bg-gradient-to-br from-blue-500 via-green-500 to-blue-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1"
                style="background-size: 200% 200%; animation: gradient-xy 4s ease infinite"
              >
                <div class="w-full h-full rounded-3xl bg-gradient-to-br from-gray-900 to-black p-2">
                  <div class="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-gray-400 text-lg">
                    Profile Image
                  </div>
                </div>
              </div>

              <div 
                class="absolute bottom-8 right-8 flex flex-col gap-2"
                :style="{ transform: `translateY(${parallaxValues.profileDots}px)` }"
              >
                <div class="w-4 h-4 bg-green-400 rounded-full border-2 border-black shadow-lg animate-pulse"></div>
                <div class="w-3 h-3 bg-blue-400 rounded-full border-2 border-black shadow-lg animate-bounce opacity-80"></div>
              </div>

              <div
                class="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl rotate-45 opacity-60"
                :style="{ 
                  transform: `translateY(${parallaxValues.profileAccent1}px) rotate(45deg)`,
                  animation: 'float 4s ease-in-out infinite'
                }"
              ></div>

              <div
                class="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full animate-pulse opacity-40"
                :style="{ transform: `translateY(${parallaxValues.profileAccent2}px)` }"
              ></div>

              <div
                class="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/50"
                :style="{ transform: `translateX(-50%) translateY(${parallaxValues.codeSnippet}px)` }"
              >
                <code class="text-xs text-green-400 font-mono">console.log("Hello!");</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      :style="{ transform: `translateX(-50%) translateY(${parallaxValues.scrollIndicator}px)` }"
    >
      <div class="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

export default {
  name: 'PortfolioHero',
  setup() {
    const displayedName = ref("")
    const isTyping = ref(true)
    const parallaxValues = reactive({
      shape1: 0,
      shape2: 0,
      shape3: 0,
      grid: 0,
      content: 0,
      tagline: 0,
      hiText: 0,
      nameText: 0,
      description: 0,
      statusBadges: 0,
      skills: 0,
      buttons: 0,
      social: 0,
      profile: 0,
      profileScale: 1,
      profileRings: 0,
      profileDots: 0,
      profileAccent1: 0,
      profileAccent2: 0,
      codeSnippet: 0,
      scrollIndicator: 0,
      rotation: 0
    })

    const heroText = ref(null)
    const skillBadges = ref(null)
    const ctaButtons = ref(null)
    const socialLinks = ref(null)
    const profileSection = ref(null)
    const floatingShape1 = ref(null)
    const floatingShape2 = ref(null)
    const floatingShape3 = ref(null)

    const fullName = "Chheang Mengheak"

    const skills = [
      "React", "Vue.js", "Next.js", "TypeScript", "Python", "Node.js",
      "Django", "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes",
      "GraphQL", "REST APIs"
    ]

    const socialLinksData = [
      { name: "GitHub", url: "https://github.com/yourusername" },
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { name: "Twitter", url: "https://twitter.com/yourhandle" }
    ]

    const handleProjectsClick = () => {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
    }

    const handleContactClick = () => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
    }

    const typewriterEffect = () => {
      let i = 0
      const timer = setInterval(() => {
        if (i < fullName.length) {
          displayedName.value += fullName.charAt(i)
          i++
        } else {
          clearInterval(timer)
          isTyping.value = false
        }
      }, 150)
      return () => clearInterval(timer)
    }

    const observeElements = () => {
      const elements = [
        heroText.value,
        skillBadges.value,
        ctaButtons.value,
        socialLinks.value,
        profileSection.value,
        floatingShape1.value,
        floatingShape2.value,
        floatingShape3.value,
      ].filter(Boolean)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1'
              entry.target.style.transform = 'translateY(0)'
              entry.target.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      )

      elements.forEach((el) => {
        if (el) observer.observe(el)
      })

      return () => observer.disconnect()
    }

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight
      const scrollProgress = Math.min(scrolled / windowHeight, 1)

      Object.assign(parallaxValues, {
        shape1: -(scrolled * 0.5),
        shape2: -(scrolled * 0.3),
        shape3: -(scrolled * 0.7),
        grid: -(scrolled * 0.1),
        content: -(scrolled * 0.15),
        tagline: -(scrolled * 0.2),
        hiText: -(scrolled * 0.25),
        nameText: -(scrolled * 0.3),
        description: -(scrolled * 0.35),
        statusBadges: -(scrolled * 0.4),
        skills: -(scrolled * 0.45),
        buttons: -(scrolled * 0.5),
        social: -(scrolled * 0.55),
        profile: -(scrolled * 0.2),
        profileScale: Math.max(0.8, 1 - scrollProgress * 0.2),
        profileRings: scrolled * 0.1,
        profileDots: -(scrolled * 0.6),
        profileAccent1: -(scrolled * 0.8),
        profileAccent2: -(scrolled * 0.4),
        codeSnippet: -(scrolled * 0.9),
        scrollIndicator: -(scrolled * 0.1),
        rotation: scrolled * 0.05
      })
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const mouseX = (clientX / innerWidth - 0.5) * 2
      const mouseY = (clientY / innerHeight - 0.5) * 2
      
      if (floatingShape1.value) {
        floatingShape1.value.style.transform = `translateY(${parallaxValues.shape1}px) translateX(${mouseX * 10}px) rotate(45deg)`
      }
      
      if (floatingShape2.value) {
        floatingShape2.value.style.transform = `translateY(${parallaxValues.shape2}px) translateX(${mouseX * -15}px)`
      }
      
      if (floatingShape3.value) {
        const rotation = parallaxValues.rotation + mouseX * 5
        floatingShape3.value.style.transform = `translateY(${parallaxValues.shape3}px) translateX(${mouseX * 20}px) rotate(${rotation}deg)`
      }
    }

    const getSocialIcon = (name) => {
      switch (name) {
        case 'GitHub':
          return "M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
        case 'LinkedIn':
          return "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        default:
          return "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
      }
    }

    onMounted(() => {
      const cleanup1 = typewriterEffect()
      const cleanup2 = observeElements()
      
      window.addEventListener("scroll", handleScroll, { passive: true })
      window.addEventListener("mousemove", handleMouseMove, { passive: true })

      onUnmounted(() => {
        cleanup1()
        cleanup2()
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("mousemove", handleMouseMove)
      })
    })

    return {
      displayedName,
      isTyping,
      parallaxValues,
      heroText,
      skillBadges,
      ctaButtons,
      socialLinks,
      profileSection,
      floatingShape1,
      floatingShape2,
      floatingShape3,
      skills,
      socialLinksData,
      handleProjectsClick,
      handleContactClick,
      getSocialIcon
    }
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes gradient-xy {
  0%, 100% { background-position: 0% 0%; }
  25% { background-position: 100% 0%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}
</style>