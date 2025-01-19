import { useEffect, useState } from 'react'
import style from './ScrollArrow.module.scss'
import { ScrollArrowIcon } from '@/assets/icons/ScrollArrowIcon'
import { Button } from '../Button/Button'

export const ScrollArrow = () => {
  const scrollToTop = () => {
    if (!atTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const [isVisible, setIsVisible] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setAtTop(scrollPosition === 0)
      if (scrollPosition !== 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Button
      className={`${style.scrollWrapper} ${isVisible ? style.show : style.hide}`}
    >
      <ScrollArrowIcon onClick={scrollToTop} />
    </Button>
  )
}
