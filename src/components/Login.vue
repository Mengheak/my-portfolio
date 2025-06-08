<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="input"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="input"
        required
      />
      <button class="btn mt-4" type="submit">Login</button>
    </form>
    <p class="mt-4">
      Don't have an account?
      <a
        href="#"
        @click.prevent="$emit('switch', 'signup')"
        class="text-blue-600"
        >Sign up</a
      >
    </p>
    <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "../composables/useAuth";

const { login } = useAuth();
const email = ref("");
const password = ref("");
const error = ref("");

async function handleLogin() {
  error.value = "";
  try {
    await login(email.value, password.value);
    alert("Logged in!");
    console.log("logged")
  } catch (e: any) {
    error.value = e.message;
  }
}
</script>

<style>
.input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
}
.btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  width: 100%;
}
</style>
