import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const LMS_ENDPOINT = 'login/'

export const useLmsStore = create((set) => ({
  LMS: [],
  loading: false,
  error: null,
  LMSRequest: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(LMS_ENDPOINT)
      set({ LMS: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
