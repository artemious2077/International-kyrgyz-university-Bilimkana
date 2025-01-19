import styles from './CareerFrame.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useAddInfoApi } from '../../api/LocalApi.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants.js'
import arrow from '@/assets/icons/rightArrow.svg'
import { Button } from '@/UI/Button/Button'
import { useTranslation } from 'react-i18next'

export const CareerFrame = () => {
  const { t } = useTranslation()
  const careerFrame = useAddInfoApi((state) => state.careerFrame)
  const careerRequest = useAddInfoApi((state) => state.careerRequest)

  useEffect(() => {
    careerRequest()
  }, [careerRequest])

  return (
    <>
      {careerFrame.map((item) => (
        <div className={styles.infoFrame} key={item.id}>
          <div>
            <img
              src={item.img}
              alt='bg'
              className={styles.infoFrameBackground}
            />
          </div>
          <div className={styles.infoFrameContent}>
            <div className={styles.infoFrameContentContainer}>
              <Typography variant='h3' className={styles.infoFrameHeader}>
                {item.title}
              </Typography>
              <Typography
                variant='span'
                className={styles.infoFrameDescription}
              >
                {item.description}
              </Typography>
            </div>

            <Button className={styles.switchBtn}>
              <Link
                to={appRoutes.additionalInfo}
                target='_top'
                className={styles.infoFrameLinkBtn}
              >
                {t('common.read_more')}
                <div className={styles.switchBtn__arrow}>
                  <img src={arrow} alt='arrow' />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  )
}
