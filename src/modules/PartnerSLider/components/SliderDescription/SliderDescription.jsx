import { Typography } from '@/UI/Typography/Typography'
import styles from './SliderDescription.module.scss'
import rightArrow from '@/assets/icons/arrow-rigth.png'
import { Button } from '@/UI/Button/Button'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'

export const SliderDescription = ({ partner }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.frame}>
      <div className={styles.frameContent}>
        <Typography
          variant='h2'
          color='backgroundPrimary'
          className={styles.frame__title}
        >
          {partner.title}
        </Typography>
        <Typography variant='small-text' className={styles.frame__description}>
          {parse(partner.description)}
        </Typography>
      </div>
      <Button className={styles.frameBtn}>
        <a
          href={partner.link}
          target='_blank'
          rel='noreferrer noopener'
          className={styles.frameBtnTitle}
        >
          {t('common.read_more')}
        </a>
        <div className={styles.frameArrow}>
          <img src={rightArrow} alt='arrow' />
        </div>
      </Button>
    </div>
  )
}
