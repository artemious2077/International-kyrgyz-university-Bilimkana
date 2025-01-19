import styles from './HeaderSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { useRef, useState } from 'react'
import CustomDots from './components/CustomDots/CustomDots'
import { SliderDescription } from './components/SliderDescription/SliderDescription'

export const HeaderSlider = ({ headData }) => {
  const slickRef = useRef(null)
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
    customPaging: (i) => (
      <CustomDots
        className={`${styles.customDot} ${i === activeIndex ? styles.active : ''}`}
        isActive={i === activeIndex}
        onClick={() => slickRef.current.slickGoTo(i)}
      />
    ),
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
  }

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.wrapper}>
      <Slider {...settings} ref={slickRef} className={styles.slider}>
        {headData.map((partnerSlide) => (
          <div key={partnerSlide.id} className={styles.slide}>
            <img
              src={partnerSlide.img}
              alt='partner slider'
              className={styles.slideImage}
              loading='lazy'
            />
            <SliderDescription partner={partnerSlide} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
