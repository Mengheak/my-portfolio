<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div class="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 class="text-3xl font-bold mb-6 text-center">Login</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label for="email" class="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label for="password" class="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded font-medium transition"
        >
          Sign In
        </button>
      </form>
      <p class="mt-4 text-center text-sm text-gray-400">
        Don't have an account?
        <router-link to="/signup" class="text-blue-400 hover:underline">Sign up</router-link>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const email = ref('');
const password = ref('');
const { login } = useAuth();
const router = useRouter();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
    router.push('/');
  } catch (error: any) {
    alert(error.message);
  }
};
</script>
<style scoped></style>
