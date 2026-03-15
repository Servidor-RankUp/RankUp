<template>
  <div class="min-h-screen flex flex-col bg-gray-950 text-white">
    <Header />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
