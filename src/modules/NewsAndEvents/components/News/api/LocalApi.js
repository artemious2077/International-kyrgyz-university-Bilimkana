import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/news/'

export const useNews = create(
  persist(
    (set) => ({
      NewsData: [],
      page: 1,
      error: null,
      loading: false,
      fetchRequest: async ({
        page,
        page_size,
        month = '',
        year = '',
        search = '',
      } = {}) => {
        set({ loading: true, error: null })
        try {
          const response = await requester.get(ENDPOINT, {
            params: { page, page_size, month, year, search },
          })
          set({
            NewsData: response.data,
            loading: false,
            page,
          })
        } catch (error) {
          set({
            error: error.message,
            loading: false,
          })
          return error.response.status
        }
      },
      fetchShortNews: async () => {
        set({ loading: true, error: null })
        try {
          const response = await requester.get(ENDPOINT, {
            params: { page: 1, page_size: '', month: '', year: '', search: '' },
          })
          set({
            NewsData: response.data,
            loading: false,
          })
        } catch (error) {
          set({
            error: error.message,
            loading: false,
          })
          return error.response?.status
        }
      },
    }),
    {
      name: 'news',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ page: state.page }),
    },
  ),
)
