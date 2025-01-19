import { useModalWind } from '@/modules/MainModalWind/api/MainModalApi'
import { useDateModal } from '@/modules/DateModal/api/LocalApi'
import { useAcceptedModalHook } from '@/utils/helpers/Helpers'
import { Suspense, useEffect } from 'react'
import { MainModalWind } from '@/modules/MainModalWind/components/MainModal/MainModalWind'
import { DateModal } from '@/modules/DateModal/DateModal'
import { Outlet, useLocation } from 'react-router-dom'
import { AcceptedModalWind } from '@/modules/MainModalWind/components/AcceptedModalWind/AcceptedModalWind'
import { Header } from '@/modules/Header/Header'
import { Footer } from '@/modules/Footer/Footer'
import { Loader } from '@/modules/Loader/Loader'

export const Layout = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isModal = useModalWind((state) => state.isModal)
  const isAcceptModal = useAcceptedModalHook((state) => state.isAcceptModal)
  const isDateModal = useDateModal((state) => state.isModal)
  return (
    <>
      <Header />
      {isModal && <MainModalWind />}
      {isAcceptModal && <AcceptedModalWind />}
      {isDateModal && <DateModal />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
