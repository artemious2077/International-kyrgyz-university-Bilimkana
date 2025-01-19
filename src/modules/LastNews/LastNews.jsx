import styles from './LastNews.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import rightArrow from '../../assets/icons/thickArrow.svg'
import { useLastEvents } from './api/LocalApi'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants.js'
import './LN_Theme.scss'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '@/app/store/UseThemeProvider.jsx'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'

export const LastNews = () => {
  const { t } = useTranslation()
  const lastEventsData = useLastEvents((state) => state.lastEventsData)
  const fetchRequest = useLastEvents((state) => state.fetchRequest)

  useEffect(() => {
    fetchRequest()
  }, [])

  const { theme } = useContext(ThemeContext)

  return (
    <MultiContainer>
      <div className={styles.wrapper}>
        <Typography variant='h2' className={styles.newsHeader}>
          {t('main_page.our_latest_news')}
        </Typography>
        <div className={styles.newsContainer}>
          {lastEventsData.map((item) => (
            <div className={styles.newsFrame} key={item.id}>
              <div className={styles.newsFrameImage}>
                <img src={item.img} alt='last news image' />
              </div>
              <div className={styles.newsFrame__content}>
                <Typography
                  truncate='14'
                  variant='h4'
                  className={styles.newsFrameTitle}
                >
                  {item.title}
                </Typography>
                <div className={styles.newsFrameDescription}>
                  <Typography variant='span'>
                    {parse(item.description)}
                  </Typography>
                </div>
                <div className={styles.bottomContent}>
                  <div className={styles.dateContainer}>
                    <div>
                      <div className={styles.dateContainer}>
                        <div className={`calendar ${theme}`} />
                        <Typography variant='span'>{item.date}</Typography>
                      </div>
                    </div>
                    <Link
                      to={appRoutes.news}
                      className={styles.newsFrame__btn}
                      onClick={() => setNews()}
                    >
                      <div>
                        <img src={rightArrow} alt='continue arrow' />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MultiContainer>
  )
}
