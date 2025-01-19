import { Typography } from '@/UI/Typography/Typography'
import styles from './InterntshipStatic.module.scss'
import { useTranslation } from 'react-i18next'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import parse from 'html-react-parser'
import { UseAdditionalStores } from '../../api/UseAdditionalStores'

export const InterntshipStatic = () => {
  const { t } = useTranslation()
  const { intern } = UseAdditionalStores()
  return (
    <section className={styles.internshipStatic}>
      <MultiContainer>
        <Typography variant='h2' className={styles.internshipTitle}>
          {t('additional_info_page.intern')}
        </Typography>
        <div className={styles.internshipSteps}>
          {intern.map((item) => (
            <div className={styles.step} key={item.id}>
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{item.id}</span>
              </div>
              <div className={styles.textContainer}>
                <Typography
                  variant='h5'
                  color='backgroundBlack'
                  className={styles.textContainerTitle}
                >
                  {t(item.title)}
                </Typography>
                <div className={styles.textContainerDescription}>
                  {parse(t(item.description))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MultiContainer>
    </section>
  )
}
