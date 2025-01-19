import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useDateModal = create(
  persist(
    (set) => ({
      isModal: false,
      openModal: () => set({ isModal: true }),
      closeModal: () => set({ isModal: false }),
      isNews: false,
      isEvents: false,
      setNews: () => set({ isNews: true, isEvents: false }),
      setEvents: () => set({ isEvents: true, isNews: false }),
      selectedYear: null,
      selectedMonth: null,
      setSelectedYear: (year) => set({ selectedYear: year }),
      setSelectedMonth: (month) => set({ selectedMonth: month }),
    }),
    {
      name: 'filters',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        selectedYear: state.selectedYear,
        selectedMonth: state.selectedMonth,
      }),
    },
  ),
)
