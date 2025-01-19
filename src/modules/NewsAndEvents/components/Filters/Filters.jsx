import { useTranslation } from 'react-i18next'
import { Typography } from '@/UI/Typography/Typography.jsx'
import { Button } from '@/UI/Button/Button.jsx'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import { FiltersIcon } from '@/assets/icons/FiltersIcon'
import styles from './Filters.module.scss'

export const Filters = ({ month, year, handleModalBtn }) => {
  const { t } = useTranslation()
  const isTablet = useMediaQuery('(max-width: 768px)')

  return (
    <div className={styles.filters}>
      <Typography variant='body-text'>
        {t(month?.label)}
        {month && year && ', '}
        {year}
      </Typography>
      {isTablet ? (
        <button onClick={handleModalBtn} className={styles.iconBtn}>
          <FiltersIcon />
        </button>
      ) : (
        <Button
          onClick={handleModalBtn}
          style={{
            width: '193px',
            height: '44px',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <Typography variant='body-text'>
            {t('news_events_page.month_year')}
          </Typography>
        </Button>
      )}
    </div>
  )
}
