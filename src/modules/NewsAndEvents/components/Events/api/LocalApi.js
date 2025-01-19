import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'
import { createJSONStorage, persist } from 'zustand/middleware'

const ENDPOINT = '/events/'

export const useEvents = create(
  persist(
    (set) => ({
      EventsData: [],
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
            EventsData: response.data,
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
      fetchShortEvents: async () => {
        set({ loading: true, error: null })
        try {
          const response = await requester.get(ENDPOINT, {
            params: { page: 1, page_size: '', month: '', year: '', search: '' },
          })
          set({
            EventsData: response.data,
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
      name: 'events',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ page: state.page }),
    },
  ),
)
