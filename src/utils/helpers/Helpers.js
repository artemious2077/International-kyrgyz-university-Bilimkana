import { create } from 'zustand'
import { lazy } from 'react'

export const useAcceptedModalHook = create((set) => ({
  isAcceptModal: false,
  openAcceptedModal: () => set({ isAcceptModal: true }),
  closeAcceptedModal: () => set({ isAcceptModal: false }),
}))

export const loadComponent = (path, componentName) => {
  return lazy(() =>
    path().then((module) => ({ default: module[componentName] })),
  )
}

export const useStudentDesc = create((set) => ({
  description: false,
  openDescription: (id) => set({ description: id }),
  closeDescription: () => set({ description: false }),
}))
