import { useEffect } from 'react'
import { useEvents } from './api/LocalApi'
import styles from './Events.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import rightArrow from '../../assets/icons/arrow-rigth.png'
import calendar from '../../assets/icons/calendar.svg'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Button } from '@/UI/Button/Button'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants.js'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'

export const Events = () => {
  const { t } = useTranslation()
  const eventsData = useEvents((state) => state.eventsData)
  const fetchRequest = useEvents((state) => state.fetchRequest)

  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  return (
    <>
      <MultiContainer>
        <div className={styles.wrapper}>
          <Typography variant='h2' className={styles.eventsHeader}>
            {t('main_page.upcoming_events')}
          </Typography>
          <div className={styles.frameContainer}>
            {eventsData.map((item) => (
              <div key={item.id} className={styles.eventFrame}>
                <div className={styles.eventFrameImage}>
                  <img src={item.img} alt='events img' />
                </div>
                <div className={styles.eventFrameInfoBlock}>
                  <Typography
                    variant='h4'
                    className={styles.eventFrameInfoBlock_title}
                    truncate='25'
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant='span'
                    className={styles.eventFrameInfoBlock_description}
                  >
                    {parse(item.description)}
                  </Typography>
                  <div className={styles.dateContainer}>
                    <div className={styles.date}>
                      {' '}
                      <Link
                        to={appRoutes.events}
                        target='_top'
                        className={styles.btn}
                      >
                        <Button className={styles.btn}>
                          {t('common.read_more')}
                          <div className={styles.arrow}>
                            <img src={rightArrow} alt='arrow' />
                          </div>
                        </Button>
                      </Link>
                    </div>
                    <div className={styles.date}>
                      <Typography className={styles.calendarContainer}>
                        <div>
                          <img src={calendar} alt='events calendar' />
                        </div>
                        {item.date}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MultiContainer>
    </>
  )
}
