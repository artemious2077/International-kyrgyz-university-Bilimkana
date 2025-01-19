import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/pdf/'

export const usePDF = create((set) => ({
  pdfData: [],
  error: null,
  loading: false,
  pdfFetchRequest: async () => {
    set({ loading: true, error: null })

    try {
      const response = await requester.get(ENDPOINT)

      set({
        pdfData: response.data,
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
