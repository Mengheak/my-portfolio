<template>
  <div
    class="relative overflow-hidden min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4"
  >
    <div
      class="absolute inset-0 -z-10 bg-fixed bg-no-repeat bg-center bg-cover opacity-20"
      :style="{ backgroundImage: `url('/your-parallax-bg.jpg')` }"
    ></div>

    <form
      @submit.prevent="sendMessage"
      class="max-w-xl mx-auto backdrop-blur-sm bg-white/5 p-8 rounded-2xl shadow-2xl space-y-6 border border-white/10"
    >
      <h2 class="text-3xl font-bold text-center text-green-300 drop-shadow-lg">
        Contact Me
      </h2>

      <input
        v-model="form.name"
        type="text"
        placeholder="Your Name"
        required
        class="w-full p-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        v-model="form.email"
        type="email"
        placeholder="Your Email"
        required
        class="w-full p-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        v-model="form.message"
        placeholder="Your Message"
        required
        rows="5"
        class="w-full p-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 rounded-xl font-semibold text-white transform duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span v-if="isLoading">Sending</span>
        <span v-else>Send Message</span>
      </button>

      <p v-if="success" class="text-green-400 text-center mt-2">
        Message sent successfully!
      </p>
      <p v-if="error" class="text-red-400 text-center mt-2">
        Failed to send message. Try again later.
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";

const isLoading = ref<boolean>(false);
const form = ref({
  name: "",
  email: "",
  message: "",
});
const success = ref(false);
const error = ref(false);

const sendMessage = async () => {
  success.value = false;
  error.value = false;
  if (isLoading.value) return;
  try {
    isLoading.value = true;
    const result = await emailjs.send(
      "service_id2ghx3",
      "template_rmj7gas",
      {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message,
      },
      "1STWYjRTFXcPASEVF"
    );

    success.value = true;
    form.value = { name: "", email: "", message: "" };
    console.log("Email sent:", result);
  } catch (err) {
    console.error("Email send error:", err);
    error.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
form {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
