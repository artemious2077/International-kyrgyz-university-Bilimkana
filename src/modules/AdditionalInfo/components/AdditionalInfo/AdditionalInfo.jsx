import styles from './AdditionalInfo.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useTranslation } from 'react-i18next'
import parse from 'html-react-parser'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs.jsx'
import { UseAdditionalStores } from '../../api/UseAdditionalStores'

export const AdditionalInfo = () => {
  const { t } = useTranslation()
  const { addInfo } = UseAdditionalStores()
  return (
    <section className={styles.additionalInfo}>
      <MultiContainer>
        <Breadcrumbs currentPage={t('common.additional_information')} />
        <Typography variant='h1' className={styles.addInfoTitle}>
          {t('common.additional_information')}
        </Typography>
        <div className={styles.welcomeBlock}>
          <div className={styles.bilimkanaImg}>
            {addInfo[0]?.img && <img src={addInfo[0]?.img} alt='bilimkana' />}
          </div>
          <Typography variant='body-text' className={styles.bannerDescription}>
            {addInfo[0]?.description && parse(addInfo[0]?.description)}
          </Typography>
        </div>
      </MultiContainer>
    </section>
  )
}
