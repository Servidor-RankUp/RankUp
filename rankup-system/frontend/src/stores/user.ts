import { defineStore } from 'pinia'
import { supabase } from '../services/supabase'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [] as any[],
  }),
  actions: {
    async fetchUsers() {
      const { data, error } = await supabase.from('usuarios').select('*')
      if (error) console.error(error)
      else this.users = data || []
    },
  },
})
