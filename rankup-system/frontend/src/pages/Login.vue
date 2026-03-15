<template>
  <section class="flex items-center justify-center py-24">
    <div class="bg-gray-900 p-10 rounded-lg w-full max-w-md">
      <h1 class="text-3xl font-bold text-green-400 mb-8 text-center">Login VKGS</h1>

      <form @submit.prevent="login" class="space-y-6">
        <div>
          <label class="text-sm text-gray-400">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full mt-2 p-3 bg-gray-800 rounded border border-gray-700"
          />
        </div>

        <div>
          <label class="text-sm text-gray-400">Senha</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full mt-2 p-3 bg-gray-800 rounded border border-gray-700"
          />
        </div>

        <button class="w-full bg-green-500 hover:bg-green-600 py-3 rounded font-semibold">
          Entrar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const email = ref('')
const password = ref('')

const auth = useAuthStore()

const login = async () => {
  await auth.login(email.value, password.value)
}
</script>
