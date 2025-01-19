import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const SOCIAL_ENDPOINT = 'social/'

export const useSocialStore = create((set) => ({
  socials: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(SOCIAL_ENDPOINT)
      set({ socials: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
