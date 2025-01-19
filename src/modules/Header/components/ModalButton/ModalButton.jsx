import { useTranslation } from 'react-i18next'
import styles from './ModalButton.module.scss'
import { useModalWind } from '@/modules/MainModalWind/api/MainModalApi'
import { Button } from '@/UI/Button/Button'
export const ModalButton = () => {
  const openModal = useModalWind((state) => state.openModal)

  const { t } = useTranslation()
  return (
    <Button className={styles.openModalLink} onClick={openModal}>
      {t('header.fill_form')}
    </Button>
  )
}
