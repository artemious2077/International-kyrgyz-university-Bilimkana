import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export const useNewsAndEvents = create(
  persist(
    (set) => ({
      activeTab: 'news',
      setNews: () => set({ activeTab: 'news' }),
      setEvents: () => set({ activeTab: 'events' }),
      searchValue: '',
      setSearchValue: (searchInput) => set({ searchValue: searchInput }),
    }),
    {
      name: 'NewsAndEvents',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
