import { create } from 'zustand'
import { requester } from '@/utils/requester/requester'

const ENDPOINTS = {
  ADD_INFO: 'addinfo/',
  STUDENTS: 'students/',
  INTERNS: 'intern/',
}

export const UseAdditionalStores = create((set) => ({
  addInfo: [],
  students: [],
  intern: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null })
    try {
      const [addInfoResponse, studentsResponse, internResponse] =
        await Promise.all([
          requester.get(ENDPOINTS.ADD_INFO),
          requester.get(ENDPOINTS.STUDENTS),
          requester.get(ENDPOINTS.INTERNS),
        ])
      set({
        addInfo: addInfoResponse.data,
        students: studentsResponse.data,
        intern: internResponse.data,
        loading: false,
      })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },
}))
