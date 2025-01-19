import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/teacher/'

export const useTeachers = create((set) => ({
  teachersData: [],
  fetchRequest: async () => {
    const response = await requester.get(ENDPOINT)
    set({ teachersData: response.data })
  },
}))
