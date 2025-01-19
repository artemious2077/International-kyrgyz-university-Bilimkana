import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/faq/'

export const useFAQ = create((set) => ({
  FAQData: [],
  fetchRequest: async () => {
    const response = await requester.get(ENDPOINT)
    set({ FAQData: response.data })
  },
}))
