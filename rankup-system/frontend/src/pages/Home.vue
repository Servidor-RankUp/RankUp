<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-blue-600">RankUp Frontend</h1>
    <button @click="loadUsers" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
      Carregar usuários do Supabase
    </button>
    <ul class="mt-4">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUserStore } from '../stores/user'

export default defineComponent({
  setup() {
    const userStore = useUserStore()

    const loadUsers = async () => {
      await userStore.fetchUsers()
    }

    return { loadUsers, users: userStore.users }
  },
})
</script>
