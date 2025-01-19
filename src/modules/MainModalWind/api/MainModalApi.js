import { create } from 'zustand'
import { requester } from '@/utils/requester/requester.js'

const ENDPOINTS = {
  application: 'application/',
  categoryProgram: 'category_program/',
}

export const useModalApi = create((set) => ({
  form: [],
  postRequest: async (formData) => {
    const response = await requester.post(ENDPOINTS.application, formData)
    set({ form: response.data })
  },
}))

export const useModalWind = create((set) => ({
  isModal: false,
  openModal: () => set({ isModal: true }),
  closeModal: () => set({ isModal: false }),
}))

export const useDropdownPrograms = create((set) => ({
  optionData: [],
  optionRequest: async () => {
    const response = await requester.get(ENDPOINTS.categoryProgram)
    const headDataElement = response.data.find((item) => item.programs)
    set({ optionData: headDataElement.programs })
  },
}))
