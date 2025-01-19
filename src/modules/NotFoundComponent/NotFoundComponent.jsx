import notFound from '@/assets/images/notFound/notFound.webp'
import styles from './NotFoundComponent.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { Button } from '@/UI/Button/Button'
import { Link } from 'react-router-dom'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { useTranslation } from 'react-i18next'

export const NotFoundComponent = () => {
  const { t } = useTranslation()

  return (
    <MultiContainer>
      <div className={styles.errorBlock}>
        <div className={styles.typographyContainer}>
          <Typography variant='h4' className={styles.errorHeader}>
            <b className={styles.orangeText}>404</b> -{' '}
            {t('not_found_page.error')}
          </Typography>
          <Typography className={styles.errorDescription}>
            {t('not_found_page.url')}
          </Typography>
          <Typography className={styles.errorDescription}>
            {t('not_found_page.all_we_know')}
          </Typography>
          <Link className={styles.btnLink} to='/' target='_top'>
            <Button className={styles.btn}>{t('form_modal.return')}</Button>
          </Link>
        </div>
        <div className={styles.errorImg}>
          <img src={notFound} alt='404 error' />
        </div>
      </div>
    </MultiContainer>
  )
}
