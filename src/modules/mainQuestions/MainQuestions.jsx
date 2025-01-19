import { useState, useEffect, useContext } from 'react'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Typography } from '@/UI/Typography/Typography'
import { useFAQ } from './api/LocalApi'
import styles from './MainQuestions.module.scss'
import { ThemeContext } from '@/app/store/UseThemeProvider.jsx'
import './MQ_Theme.scss'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'

export const MainQuestions = () => {
  const { t } = useTranslation()
  const faqData = useFAQ((state) => state.FAQData)
  const fetchRequest = useFAQ((state) => state.fetchRequest)
  const [openFaq, setOpenFaq] = useState(false)
  const handleOpenFaq = (id) => {
    setOpenFaq(id === openFaq ? null : id)
  }

  useEffect(() => {
    fetchRequest()
  }, [])

  const { theme } = useContext(ThemeContext)

  return (
      <MultiContainer>
        <div className={styles.faq}>
          <Typography variant='h2' className={styles.faqHeader}>
            {t('main_page.faq')}
          </Typography>
          {faqData.map((item) => (
              <div key={item.id} className={styles.faqBox}>
                <div
                    className={styles.faqQuestion}
                    onClick={() => handleOpenFaq(item.id)}
                >
                  <Typography
                      variant='body'
                      className={`${styles.faqQuestionText} ${theme}`}
                  >
                    {parse(item.question)}
                  </Typography>
                  <div
                      className={`${styles.faqArrow} ${openFaq === item.id ? styles.rotate : ''}`}
                  >
                    <div className={`arrow ${theme}`} />
                  </div>
                </div>
                {openFaq === item.id && (
                    <div className={styles.faqAnswer}>{parse(item.answer)}</div>
                )}
              </div>
          ))}
        </div>
      </MultiContainer>
  )
}
