import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/aboutbiu/'

export const useHeadData = create((set) => ({
  loading: false,
  error: null,
  headData: [],
  fetchRequest: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(ENDPOINT)
      set({ headData: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
