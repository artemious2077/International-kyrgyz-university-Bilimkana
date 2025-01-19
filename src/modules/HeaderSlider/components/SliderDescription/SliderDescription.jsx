import { Typography } from '@/UI/Typography/Typography'
import styles from './SliderDescription.module.scss'
import rightArrow from '../../../../assets/icons/arrow-rigth.png'
import { Link } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants.js'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Button } from '@/UI/Button/Button'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'

export const SliderDescription = ({ partner }) => {
  const { t } = useTranslation()

  return (
    <MultiContainer>
      <div className={styles.frame}>
        <div className={styles.frameContent}>
          <Typography variant='h2' truncate={70} className={styles.frameHeader}>
            {partner.title}
          </Typography>
          <Typography variant='body-text' className={styles.frameDescription}>
            {parse(partner.description)}
          </Typography>
          <div>
            <Button className={styles.frameBtn}>
              <Link
                to={appRoutes.aboutUs}
                target='_top'
                className={styles.link}
              >
                <p className={styles.frameBtnTitle}>{t('common.read_more')}</p>
                <div className={styles.frameArrow}>
                  <img src={rightArrow} alt='arrow' />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MultiContainer>
  )
}
