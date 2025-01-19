import styles from './AddInformation.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { ProgramsFrame } from './components/ProgramsFrame/ProgramsFrame'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { CareerFrame } from './components/CareerFrame/CareerFrame'
import { useContext } from 'react'
import { ThemeContext } from '@/app/store/UseThemeProvider'
import { useTranslation } from 'react-i18next'

export const AddInformation = () => {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <MultiContainer>
      <div className={styles.wrapper}>
        <Typography variant='h2' className={`${styles.infoHeader} ${theme}`}>
          {t('common.additional_information')}
        </Typography>
        <div className={styles.infoFrameContainer}>
          <ProgramsFrame />
          <CareerFrame />
        </div>
      </div>
    </MultiContainer>
  )
}
