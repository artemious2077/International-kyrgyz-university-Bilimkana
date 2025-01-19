import styles from './ProgramSlider.module.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import { useProgramSlides } from '../../api/useProgramSlider'
import { useEffect } from 'react'

export const ProgramSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 890,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const slides = useProgramSlides((state) => state.slides)
  const fetchRequest = useProgramSlides((state) => state.fetchRequest)

  useEffect(() => {
    fetchRequest()
  }, [])

  return (
    <>
      <Slider {...settings} className={styles.slider}>
        {slides.map((item) => (
          <div key={item.id} className={styles.slide}>
            <img src={item.img} alt='program slide' />
          </div>
        ))}
      </Slider>
    </>
  )
}
