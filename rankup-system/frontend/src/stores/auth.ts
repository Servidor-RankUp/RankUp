import { defineStore } from 'pinia'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as any,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    async login(email: string, password: string) {
      const res = await api.post('/auth/login', {
        email,
        password,
      })

      this.token = res.data.token

      localStorage.setItem('token', this.token)
    },

    logout() {
      this.token = null
      localStorage.removeItem('token')
    },
  },
})
