import styles from './AcceptedModalWind_styles.module.scss'
import cross from '../../../../assets/icons/closeIcon.svg'
import acceptEllipse from '../../../../assets/icons/acceptEllipse.svg'
import { Typography } from '@/UI/Typography/Typography'
import { useAcceptedModalHook } from '@/utils/helpers/Helpers.js'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const AcceptedModalWind = () => {
  const { t } = useTranslation()
  const closeAcceptedModal = useAcceptedModalHook(
    (state) => state.closeAcceptedModal,
  )

  const modalContent = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    document.body.classList.add('modalOpen')
    return () => document.body.classList.remove('modalOpen')
  }, [])

  return (
    <div className={styles.modalBg} onClick={closeAcceptedModal}>
      <div className={styles.modalWIndBg} onClick={modalContent}>
        <div className={styles.modalWIndBg__closeIcon}>
          <img src={cross} alt='cross icon' onClick={closeAcceptedModal} />
        </div>
        <div className={styles.modalWIndBg__acceptEllipse}>
          <img src={acceptEllipse} alt='accept ellipse' />
        </div>
        <Typography variant='p' className={styles.modalWIndBg__header}>
          {t('form_modal.success')}
        </Typography>
        <div onClick={closeAcceptedModal} className={styles.modalWIndBg__link}>
          <Typography variant='span'>{t('form_modal.return')}</Typography>
        </div>
      </div>
    </div>
  )
}
