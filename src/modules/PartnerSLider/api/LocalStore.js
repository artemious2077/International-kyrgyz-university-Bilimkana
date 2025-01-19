import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/ourpartner/'

export const usePartnersData = create((set) => ({
  partners: [],
  fetchRequest: async () => {
    const response = await requester.get(ENDPOINT)
    set({ partners: response.data })
  },
}))
