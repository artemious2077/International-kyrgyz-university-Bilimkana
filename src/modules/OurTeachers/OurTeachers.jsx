import styles from './OurTeachers.module.scss'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Typography } from '@/UI/Typography/Typography'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { TeacherSlide } from './components/TeacherSlide/TeacherSlide'
import { useTeachers } from './api/LocalApi'
import { useCallback, useEffect, useRef, useState } from 'react'
import prevArrow from '@/assets/icons/black_l_arrow.svg'
import nextArrow from '@/assets/icons/black_r_arrow.svg'
import { OT_CustomDots } from './components/OT_CustomDots/OT_CustomDots'
import { useTranslation } from 'react-i18next'

export const OurTeachers = () => {
  const { t } = useTranslation()
  const slickRef = useRef(null)
  const previous = useCallback(() => slickRef.current.slickPrev(), [])
  const next = useCallback(() => slickRef.current.slickNext(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const teachersData = useTeachers((state) => state.teachersData)
  const fetchRequest = useTeachers((state) => state.fetchRequest)

  useEffect(() => {
    fetchRequest()
  }, [])

  useEffect(() => {
    setIsBeginning(activeIndex === 0)
    setIsEnd(activeIndex === teachersData.length - 3)
  }, [activeIndex, teachersData.length])

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    rtl: false,
    arrows: false,
    swipe: true,
    customPaging: (i) => (
      <OT_CustomDots
        isActive={activeIndex === i}
        onClick={() => slickRef.current.slickGoTo(i)}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1129,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  useEffect(() => {
    console.log(
      'activeIndex:',
      activeIndex,
      'isBeginning:',
      isBeginning,
      'isEnd:',
      isEnd,
    )
    setIsBeginning(activeIndex === 0)
    setIsEnd(activeIndex === teachersData.length - settings.slidesToShow)
  }, [activeIndex, teachersData.length, settings.slidesToShow])

  return (
    <MultiContainer className={styles.ourTeachers}>
      <div className={styles.wrapper}>
        <Typography variant='h2' className={styles.teachersHeader}>
          {t('main_page.our_teachers')}
        </Typography>
        <div className={styles.teachersContainer}>
          <div
            onClick={activeIndex === 0 ? null : previous}
            className={`${styles.arrow} ${isBeginning ? styles.disabledArrow : ''}`}
          >
            <img src={prevArrow} alt='arrow' />
          </div>
          <Slider
            {...settings}
            ref={slickRef}
            className={styles.teachersSlider}
          >
            {teachersData.map((slide) => (
              <TeacherSlide ourTeachersData={slide} key={slide.id} />
            ))}
          </Slider>
          <div
            onClick={isEnd ? null : next}
            className={`${styles.arrow} ${isEnd ? styles.disabledArrow : ''}`}
          >
            <img src={nextArrow} alt='arrow' />
          </div>
        </div>
      </div>
    </MultiContainer>
  )
}
