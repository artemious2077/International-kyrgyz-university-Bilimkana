import { requester } from '@/utils/requester/requester'
import { create } from 'zustand'

const ENDPOINT = 'Contacts/'

export const useMarkerApi = create((set) => ({
  markerData: [],
  markerRequest: async () => {
    const response = await requester.get(ENDPOINT)
    set({ markerData: response.data })
  },
}))
