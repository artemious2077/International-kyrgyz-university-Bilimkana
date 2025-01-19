import { Typography } from '@/UI/Typography/Typography'
import styles from './TableEnrollment.module.scss'
import { useTranslation } from 'react-i18next'

export const TableEnrollment = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.table}>
      <div className={styles.testTable}>
        <div className={styles.testTable__section}>
          <div className={styles.tableSection}>
            <ul>
              <li>{t('enrollment.column.point')}</li>
              <li>{t('enrollment.column.level')}</li>
              <li>{t('enrollment.column.cef')}</li>
            </ul>
          </div>
          <div className={styles.tableSectionTitle}>
            <Typography variant='p'>{t('enrollment.string')}</Typography>
          </div>
        </div>
        <div className={styles.testTable__section}>
          <div className={styles.tableSectionIn}>
            <ul>
              <li>{t('enrollment.column1.numbersOfPoints')}</li>
              <li>Elementary</li>
              <li>A1</li>
            </ul>
          </div>
          <div className={styles.tableSectionDescription}>
            <Typography variant='span'>{t('enrollment.string1')}</Typography>
          </div>
        </div>
        <div className={styles.testTable__section}>
          <div className={styles.tableSectionIn}>
            <ul>
              <li>{t('enrollment.column2.numbersOfPoints')}</li>
              <li>Pre-Intermediante</li>
              <li>A2</li>
            </ul>
          </div>
          <div className={styles.tableSectionDescription}>
            <Typography variant='span'>{t('enrollment.string2')}</Typography>
          </div>
        </div>
        <div className={styles.testTable__section}>
          <div className={styles.tableSectionIn}>
            <ul>
              <li>{t('enrollment.column3.numbersOfPoints')}</li>
              <li>Intermediante</li>
              <li>B1</li>
            </ul>
          </div>
          <div className={styles.tableSectionDescription}>
            <Typography variant='span'>{t('enrollment.string3')}</Typography>
          </div>
        </div>
        <div className={styles.testTable__section}>
          <div className={styles.tableSectionIn}>
            <ul>
              <li>{t('enrollment.column4.numbersOfPoints')}</li>
              <li>Upper Intermediante</li>
              <li>B2</li>
            </ul>
          </div>
          <div className={styles.tableSectionDescription}>
            <Typography variant='span'>{t('enrollment.string4')}</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
