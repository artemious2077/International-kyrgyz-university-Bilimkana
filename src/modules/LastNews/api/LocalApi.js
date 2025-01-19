import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/news/'

export const useLastEvents = create((set) => ({
  lastEventsData: [],
  fetchRequest: async () => {
    const response = await requester.get(ENDPOINT)
    const lastEventsElement = response?.data?.results
      ?.slice(0, 4)
      .map((event) => {
        return {
          ...event,
          description: event.description.slice(0, 60),
          title: event.title.slice(0, 22),
        }
      })
    set({ lastEventsData: lastEventsElement })
  },
}))
