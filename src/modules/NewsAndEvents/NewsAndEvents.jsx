import { News } from './components/News/News'
import { Events } from './components/Events/Events'
import { Button } from '@/UI/Button/Button'
import search from '@/assets/icons/search.svg'
import searchClear from '@/assets/icons/close.svg'
import styles from './NewsAndEvents.module.scss'
import { useNewsAndEvents } from './api/LocalApi'
import { useEffect, useState } from 'react'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { useLocation, useNavigate } from 'react-router-dom'
import { appRoutes } from '@/utils/constants/constants'

export const NewsAndEvents = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const [currentInput, setCurrentInput] = useState('')
  const { setNews, setEvents, activeTab, setSearchValue, searchValue } =
    useNewsAndEvents()
  const isNewsPage = location.pathname === appRoutes.news

  useEffect(() => {
    isNewsPage ? setNews() : setEvents()
  }, [isNewsPage, setNews, setEvents])

  useEffect(() => {
    setCurrentInput(searchValue || '')
  }, [searchValue])

  const handleActiveButton = (tab) => activeTab !== tab && 'outlinedOrange'
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchValue(currentInput)
  }
  const handleClear = () => {
    setCurrentInput('')
    setSearchValue('')
  }

  const buttonStyles = {
    width: '100%',
    height: '44px',
    overflow: 'hidden',
    borderRadius: '8px',
  }

  return (
    <MultiContainer>
      <div className={styles.newsAndEvents}>
        <div className={styles.newsAndEventsTop}>
          <div className={styles.btnWrapper}>
            <Button
              onClick={() => navigate(appRoutes.news)}
              variant={handleActiveButton('news')}
              style={buttonStyles}
              color='black'
            >
              {t('common.news')}
            </Button>
            <Button
              onClick={() => navigate(appRoutes.events)}
              variant={handleActiveButton('events')}
              style={buttonStyles}
              color='black'
            >
              {t('common.events')}
            </Button>
          </div>
          <form className={styles.newsAndEventsSearch} onSubmit={handleSearch}>
            <div className={styles.newsAndEventsInput}>
              <input
                type='text'
                maxLength={500}
                placeholder={t('news_events_page.search')}
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
              />
              {currentInput && (
                <div
                  onClick={handleClear}
                  className={styles.newsAndEventsSearchClear}
                >
                  <img src={searchClear} alt='clear search' />
                </div>
              )}
            </div>
            <button type='submit' className={styles.newsAndEventsSearchIcon}>
              <img src={search} alt='search' />
            </button>
          </form>
        </div>
        <Breadcrumbs
          currentPage={t(`common.${isNewsPage ? 'news' : 'events'}`)}
        />
        {isNewsPage ? <News /> : <Events />}
      </div>
    </MultiContainer>
  )
}
