import styles from './EnrollOrder.module.scss'

import { useEffect, useState } from 'react'
import { UseEnrollmentProcedure } from '@/modules/EnrollOrder/api/UseEnrollmentProcedure.js'
import { TableEnrollment } from '@/modules/EnrollOrder/component/TableEnrollment/TableEnrollment.jsx'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { Loader } from '@/modules/Loader/Loader.jsx'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer.jsx'
import { Typography } from '@/UI/Typography/Typography.jsx'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs.jsx'
import { EnrollArrow } from '@/assets/icons/EnrollArrow'
import { TableMobile } from '@/modules/EnrollOrder/component/TableEnrollmentMobile/TableMobile.jsx'

export const EnrollOrder = () => {
  const { loading, data, fetchData } = UseEnrollmentProcedure()
  const [expandedId, setExpandedId] = useState(null)
  const { t } = useTranslation()
  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return <Loader />
  }

  const sortedData = data.slice().sort((a, b) => a.id - b.id)

  return (
    <MultiContainer>
      <Breadcrumbs currentPage={t('common.enrollment_procedure')} />
      <Typography variant='h2' className={styles.heading}>
        {t('common.enrollment_procedure')}
      </Typography>
      {sortedData.map((item) => {
        const isExpanded = expandedId === item.id
        const truncatedText =
          item.description.slice(0, 225) +
          (item.description.length > 225 ? '...' : '')
        const shouldTruncate = item.description.length > 225

        return (
          <div key={item.id} className={styles.enrollment}>
            <div className={styles.enrollmentTitle}>
              <div className={styles.enrollmentTitleId}>{item.id}</div>
              <Typography variant='h2'>{item.title}</Typography>
            </div>
            <div className={styles.enrollmentContent}>
              <div className={styles.enrollmentContentImg}>
                <img src={item.img} alt='Photos of the enrollment procedure' />
              </div>
              <Typography variant='body-text' className={styles.enrollmentText}>
                {!isExpanded ? parse(truncatedText) : parse(item.description)}

                {shouldTruncate && !isExpanded && (
                  <span
                    onClick={() => handleExpand(item.id)}
                    className={styles.readMoreButton}
                  >
                    {t('enrollment.readMore')}
                    <EnrollArrow
                      className={isExpanded ? styles.arrowUp : styles.arrowDown}
                    />
                  </span>
                )}
              </Typography>
              {isExpanded && item.id === 2 && (
                <>
                  <TableEnrollment />
                  <TableMobile />
                  <span
                    onClick={() => handleExpand(item.id)}
                    className={styles.closeTableButton}
                  >
                    {t('enrollment.close')}
                    <EnrollArrow className={styles.arrowUp} />
                  </span>
                </>
              )}
              {isExpanded && item.id !== 2 && (
                <span
                  onClick={() => handleExpand(item.id)}
                  className={styles.closeTableButton}
                >
                  {t('enrollment.close')}
                  <EnrollArrow className={styles.arrowUp} />
                </span>
              )}
            </div>
          </div>
        )
      })}
    </MultiContainer>
  )
}
