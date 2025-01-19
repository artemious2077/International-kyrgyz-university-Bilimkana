import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/image_program/'

export const useProgramSlides = create((set) => ({
  slides: [],
  error: null,
  loading: false,
  fetchRequest: async () => {
    set({ loading: true, error: null })

    try {
      const response = await requester.get(ENDPOINT)

      set({
        slides: response.data,
        loading: false,
      })
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      })
    }
  },
}))
