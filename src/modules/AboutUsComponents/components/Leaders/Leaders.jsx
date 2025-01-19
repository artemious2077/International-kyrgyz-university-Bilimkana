import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import styles from './Leaders.module.scss'
import { LeadersProfile } from './LeadersProfile/LeadersProfile'
import { Typography } from '@/UI/Typography/Typography'
import { useTranslation } from 'react-i18next'

export const Leaders = () => {
  const { t } = useTranslation()
  return (
    <>
      <MultiContainer>
        <div className={styles.wrapper}>
          <Typography variant='h2' className={styles.header}>
            {t('about_us_page.supervisors')}
          </Typography>
          <LeadersProfile />
        </div>
      </MultiContainer>
    </>
  )
}
