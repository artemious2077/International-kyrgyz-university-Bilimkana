import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import arrow from '@/assets/icons/languageArrow.svg'
import styles from './LanguageSwitcher.module.scss'

const languages = {
  ru: 'RU',
  ky: 'KG',
  en: 'EN',
}

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const getLanguageCode = (language) => language.split('-')[0]
  const initialLanguage = getLanguageCode(i18n.language)
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages[initialLanguage] && initialLanguage,
  )
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleSelect = () => setIsSelectOpen(!isSelectOpen)

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language)
    setSelectedLanguage(language)
    setIsSelectOpen(false)
    window.location.reload()
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSelectOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.languageBox} ref={dropdownRef}>
      <div className={styles.selectedLang} onClick={toggleSelect}>
        <div>{languages[selectedLanguage]}</div>
        <div
          className={`${styles.languageBoxImg} ${isSelectOpen ? styles.rotate : ''}`}
        >
          <img src={arrow} alt='select language' />
        </div>
      </div>
      {isSelectOpen && (
        <div className={styles.selectOptions}>
          {Object.keys(languages).map((language, i) => {
            if (language !== selectedLanguage) {
              return (
                <div
                  key={i}
                  className={styles.selectOption}
                  onClick={() => handleLanguageChange(language)}
                >
                  {languages[language]}
                </div>
              )
            }
          })}
        </div>
      )}
    </div>
  )
}
