import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINTS = {
  contacts: 'Contacts/',
}

export const UseContactsStore = create((set) => ({
  contactsData: [],
  loading: false,
  error: null,
  contactsRequest: async () => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(ENDPOINTS.contacts)
      set({ contactsData: response.data, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
