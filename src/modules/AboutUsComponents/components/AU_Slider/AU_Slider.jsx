import Slider from 'react-slick'
import styles from './AU_slider_api.module.scss'
import { UseAboutUsStores } from '../../api/UseAboutUsStores'

export const AU_slider = () => {
  const { aboutUsPhoto } = UseAboutUsStores()
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2800,
    rtl: false,
    arrows: false,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          dots: false,
        },
      },
    ],
  }

  return (
    <div className={styles.wrapper}>
      <Slider {...settings} className={styles.slider}>
        {aboutUsPhoto.map((slide) => (
          <div key={slide.id} className={styles.preSlide}>
            <img src={slide.img} alt='slide image' className={styles.slide} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
