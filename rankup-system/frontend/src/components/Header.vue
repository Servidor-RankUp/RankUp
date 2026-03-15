<template>
  <header class="bg-gray-900 border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <span class="text-2xl">🪖</span>

        <h1 class="text-xl font-bold text-green-400">VKGS</h1>

        <span class="text-gray-400 text-sm"> Vikings RankUp </span>
      </div>

      <!-- Menu automático -->
      <nav class="flex gap-6">
        <router-link
          v-for="route in menuRoutes"
          :key="route.path"
          :to="route.path"
          class="text-gray-300 hover:text-green-400 transition"
        >
          {{ route.name }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const menuRoutes = computed(() =>
  router.options.routes.filter((route: any) => route.meta?.showInMenu),
)
</script>
