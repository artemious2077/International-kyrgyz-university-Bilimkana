import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINTS = '/category_program/'

export const useProgramsApi = create((set) => ({
  programsData: [],
  additionalData: [],
  error: null,
  loading: false,

  fetchRequest: async () => {
    set({ loading: true, error: null })

    try {
      const response = await requester.get(ENDPOINTS)
      const moreInfo = response.data.flatMap(
        (currentItem) => currentItem.programs,
      )

      set({
        programsData: response.data,
        additionalData: moreInfo,
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
