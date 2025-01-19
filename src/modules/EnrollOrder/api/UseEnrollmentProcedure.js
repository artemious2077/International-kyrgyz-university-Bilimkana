import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/enrollmentor/'

export const UseEnrollmentProcedure = create((set) => ({
  data: [],
  error: null,
  loading: false,
  fetchData: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(ENDPOINT)
      set({
        data: response.data,
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
