import styles from './PartnerSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import prevArrow from '../../assets/images/arrows/Partner_prevArrow.png'
import nextArrow from '../../assets/images/arrows/Partner_nextArrow.png'
import CustomDots from './components/CustomDots/CustomDots'
import { SliderDescription } from './components/SliderDescription/SliderDescription'
import { usePartnersData } from './api/LocalStore'
import { Typography } from '@/UI/Typography/Typography'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { useTranslation } from 'react-i18next'

export const PartnerSlider = () => {
  const { t } = useTranslation()
  const slickRef = useRef(null)
  const previous = useCallback(() => slickRef.current.slickPrev(), [])
  const next = useCallback(() => slickRef.current.slickNext(), [])

  const [activeIndex, setActiveIndex] = useState(0)
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 690,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    customPaging: (i) => (
      <CustomDots
        className={`${styles.customDot} ${i === activeIndex ? styles.active : ''}`}
        isActive={i === activeIndex}
        onClick={() => slickRef.current.slickGoTo(i)}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  }

  const partners = usePartnersData((state) => state.partners)
  const fetchRequest = usePartnersData((state) => state.fetchRequest)

  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  return (
    <MultiContainer className={styles.sliderContainer}>
      <div className={styles.wrapper}>
        <Typography variant='h2' className={styles.sliderHeader}>
          {t('main_page.our_partners')}
        </Typography>
        {''}
        <div className={styles.arrowsContainer}>
          <div onClick={previous} className={styles.arrow}>
            <img src={prevArrow} alt='arrow' />
          </div>
          <div onClick={next} className={styles.arrow}>
            <img src={nextArrow} alt='arrow' />
          </div>
        </div>
        {''}
        <Slider {...settings} ref={slickRef} className={styles.slider}>
          {partners.map((partnerSlide) => (
            <div key={partnerSlide.id} className={styles.slide}>
              <img
                src={partnerSlide.img}
                alt='partner house'
                className={styles.slideImage}
              />
              <SliderDescription
                partner={partnerSlide}
                className={styles.descriptionAnimation}
              />
            </div>
          ))}
        </Slider>
      </div>
    </MultiContainer>
  )
}
