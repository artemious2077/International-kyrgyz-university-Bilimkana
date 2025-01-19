import styles from './ProgramsFrame.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { Button } from '@/UI/Button/Button'
import arrow from '@/assets/icons/rightArrow.svg'
import { useAddInfoApi } from '../../api/LocalApi.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants.js'
import { useTranslation } from 'react-i18next'

export const ProgramsFrame = () => {
  const { t } = useTranslation()
  const programsFrame = useAddInfoApi((state) => state.programsFrame)
  const programsRequest = useAddInfoApi((state) => state.programsRequest)

  useEffect(() => {
    programsRequest()
  }, [programsRequest])

  return (
    <>
      {programsFrame.map((item) => (
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
                to={appRoutes.programs}
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
