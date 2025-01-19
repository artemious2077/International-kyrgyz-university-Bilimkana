import { Button } from '@/UI/Button/Button'
import { useLmsStore } from '../../api/UseLmsStore'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import styles from './LmsButton.module.scss'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'

export const LmsButton = () => {
  const { LMS, LMSRequest } = useLmsStore()
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width: 1080px)')
  useEffect(() => {
    LMSRequest()
  }, [LMSRequest])

  return (
    <a
      href={LMS[0]?.link}
      target='_blank'
      rel='noopener noreferrer'
      className={styles.lmsLink}
    >
      <Button
        className={styles.lmsBtn}
        variant={isMobile ? '' : 'outlinedOrange'}
        color='white'
      >
        {t('header.lms')}
      </Button>
    </a>
  )
}
