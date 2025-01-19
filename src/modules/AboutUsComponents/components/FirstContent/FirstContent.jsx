import styles from './FirstContent.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { UseAboutUsStores } from '../../api/UseAboutUsStores'

export const FirstContent = () => {
  const { t } = useTranslation()
  const { aboutUsData } = UseAboutUsStores()
  return (
    <>
      {aboutUsData.map((item) => (
        <div key={item.id} className={styles.firstContent}>
          <div className={styles.contentBlock}>
            <div className={styles.contentBlock__border}>
              <Typography variant='h1' className={styles.contentBlock__header}>
                {t('about_us_page.university_profile')}
              </Typography>
              <Typography
                variant='body-text'
                className={styles.contentBlock__description}
              >
                {item.university_profile_description}
              </Typography>
            </div>
          </div>
          <div className={styles.imgContent}>
            <img src={item.university_profile_img} alt='img' />
          </div>
        </div>
      ))}
      <div className={styles.container}>
        {aboutUsData.map((item) => (
          <div key={item.id}>
            <Typography
              className={styles.secondDescription}
              variant='body-text'
            >
              {parse(item.university_profile_text)}
            </Typography>
          </div>
        ))}
      </div>
    </>
  )
}
