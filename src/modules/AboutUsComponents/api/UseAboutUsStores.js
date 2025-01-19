import { create } from 'zustand'
import { requester } from '@/utils/requester/requester'

const ENDPOINTS = {
  ABOUT_US: 'about_us/',
  ABOUT_PHOTO: 'about_photo/',
  LEADERS: 'managers/',
}

export const UseAboutUsStores = create((set) => ({
  aboutUsData: [],
  aboutUsPhoto: [],
  leaderData: [],
  loading: false,
  error: null,
  fetchRequest: async () => {
    set({ loading: true, error: null })
    try {
      const [aboutUsResponse, aboutUsPhotoResponse, leaderResponse] =
        await Promise.all([
          requester.get(ENDPOINTS.ABOUT_US),
          requester.get(ENDPOINTS.ABOUT_PHOTO),
          requester.get(ENDPOINTS.LEADERS),
        ])
      set({
        aboutUsData: aboutUsResponse.data,
        aboutUsPhoto: aboutUsPhotoResponse.data,
        leaderData: leaderResponse.data,
        loading: false,
      })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
