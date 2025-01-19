import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = 'events/'

export const useEvents = create((set) => ({
  eventsData: [],
  fetchRequest: async () => {
    const response = await requester.get(ENDPOINT)
    const limitedResults = response?.data?.results?.slice(0, 2)
    set({ eventsData: limitedResults })
  },
}))
