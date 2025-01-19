import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINT = '/additional_information/'

export const useAddInfoApi = create((set) => ({
  programsFrame: [],
  programsRequest: async () => {
    const response = await requester.get(ENDPOINT)
    const firstElem = response.data.slice(0, 1)
    set({ programsFrame: firstElem })
  },
  careerFrame: [],
  careerRequest: async () => {
    const response = await requester.get(ENDPOINT)
    const secondElem = response.data.slice(1, 2)
    set({ careerFrame: secondElem })
  },
}))
