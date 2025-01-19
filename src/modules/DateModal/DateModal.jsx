import { useDateModal } from './api/LocalApi'
import { useNews } from '../NewsAndEvents/components/News/api/LocalApi'
import { useEvents } from '../NewsAndEvents/components/Events/api/LocalApi'
import { useEffect, useState } from 'react'
import { Typography } from '@/UI/Typography/Typography'
import { Button } from '@/UI/Button/Button'
import styles from './DateModal.module.scss'
import { useTranslation } from 'react-i18next'
import { RadioInputs } from './components/RadioInputs/RadioInputs'
import { months } from '@/utils/constants/constants'

export const DateModal = () => {
  const { t } = useTranslation()
  const {
    isNews,
    isEvents,
    closeModal,
    selectedYear,
    selectedMonth,
    setSelectedYear,
    setSelectedMonth,
  } = useDateModal()
  const { NewsData } = useNews()
  const { EventsData } = useEvents()
  const [currentYear, setCurrentYear] = useState(selectedYear)
  const [currentMonth, setCurrentMonth] = useState(selectedMonth)
  const data = isNews
    ? NewsData
    : isEvents
      ? EventsData
      : { active_dates: { years: [] } }

  const handleButtons = (year, month) => {
    setSelectedYear(year)
    setSelectedMonth(month)
    closeModal()
  }

  useEffect(() => {
    document.body.classList.add('modalOpen')
    return () => document.body.classList.remove('modalOpen')
  }, [])

  const buttonStyles = {
    width: '192px',
    height: '44px',
    overflow: 'hidden',
    borderRadius: '12px',
  }

  return (
    <div className={styles.modalBg} onClick={closeModal}>
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <Typography variant='h2' className={styles.modalHeader}>
          {t('news_events_page.choose_year')}
        </Typography>
        <div className={styles.modalLine} />
        <RadioInputs
          data={data?.active_dates?.years}
          selectedValue={currentYear}
          setSelectedValue={setCurrentYear}
          name='year'
          getValue={(year) => year}
          getLabel={(year) => year}
        />
        <div className={styles.modalLine} />
        <RadioInputs
          data={months}
          selectedValue={currentMonth}
          setSelectedValue={setCurrentMonth}
          name='month'
          getValue={(month) => month.value}
          getLabel={(month) => t(month.label)}
        />
        <div className={styles.modalBtns}>
          <Button
            onClick={() => handleButtons(currentYear, currentMonth)}
            style={buttonStyles}
          >
            {t('news_events_page.apply')}
          </Button>
          <Button
            onClick={() => handleButtons(null, null)}
            style={buttonStyles}
          >
            {t('news_events_page.reset')}
          </Button>
        </div>
      </div>
    </div>
  )
}
