import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINTS = {
  newsDetail: '/news/detail/',
  eventsDetail: '/events/detail/',
}

export const useNewsDetail = create((set) => ({
  NewsDetailData: [],
  error: null,
  loading: false,
  fetchNewsRequest: async (id) => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(`${ENDPOINTS.newsDetail}${id}/`)
      set({
        NewsDetailData: response.data,
        loading: false,
      })
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      })
    }
  },
}))

export const useEventsDetail = create((set) => ({
  EventsDetailData: [],
  error: null,
  loading: false,
  fetchEventsRequest: async (id) => {
    set({ loading: true, error: null })
    try {
      const response = await requester.get(`${ENDPOINTS.eventsDetail}${id}/`)
      set({
        EventsDetailData: response.data,
        loading: false,
      })
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      })
    }
  },
}))
