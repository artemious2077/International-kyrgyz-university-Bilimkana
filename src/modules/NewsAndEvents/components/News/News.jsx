import { useNews } from './api/LocalApi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@/UI/Typography/Typography'
import { useNewsAndEvents } from '../../api/LocalApi'
import { useDateModal } from '@/modules/DateModal/api/LocalApi'
import calendar from '@/assets/icons/calendar.svg'
import styles from './News.module.scss'
import { Pagination } from '@/modules/Pagination/Pagination'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { months } from '@/utils/constants/constants'
import { Filters } from '@/modules/NewsAndEvents/components/Filters/Filters'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import { Button } from '@/UI/Button/Button'
import arrow from '@/assets/icons/rightArrow.svg'
import { Loader } from '@/modules/Loader/Loader.jsx'

export const News = ({ fullNews = true, detailId }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { NewsData, fetchRequest, fetchShortNews, loading, page: savedPage } = useNews()
  const { openModal, setNews, selectedYear, selectedMonth } = useDateModal()
  const { searchValue } = useNewsAndEvents()
  const [page, setPage] = useState(savedPage)
  const [pageSize, setPageSize] = useState(null)
  const month = months.find((month) => month.value === selectedMonth)
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const isMobile = useMediaQuery('(max-width: 700px)')
  const newsForDetail = NewsData?.results?.filter(
    (newsItem) => newsItem.id !== Number(detailId),
  )
  const fullOrShortData = fullNews
    ? NewsData?.results
    : newsForDetail?.slice(0, isTablet ? 2 : 3)

  const handleCardClick = (id) => {
    navigate(`/news/${id}`, { state: { data: 'news' } })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (isMobile) {
      setPageSize(6)
    } else if (isTablet) {
      setPageSize(8)
    } else {
      setPageSize(9)
    }
  }, [isTablet, isMobile])

  useEffect(() => {
    const fetchData = async () => {
      if (fullNews) {
        const errorStatus = await fetchRequest({
          page: page || 1,
          page_size: pageSize,
          year: selectedYear,
          month: selectedMonth,
          search: searchValue,
        })
        if (errorStatus === 404) {
          fetchRequest({
            page: 1,
            page_size: pageSize,
            year: selectedYear,
            month: selectedMonth,
            search: searchValue,
          })
        }
      } else await fetchShortNews()
    }
    if (pageSize !== null) {
      fetchData()
    }
  }, [page, pageSize, selectedYear, selectedMonth, searchValue])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    fetchRequest({
      page: newPage,
      page_size: pageSize,
      year: selectedYear,
      month: selectedMonth,
      search: searchValue,
    })
    window.scrollTo(0, 0)
  }

  const handleModalBtn = () => {
    setNews()
    openModal()
  }

  const getNotFoundMessage = () => {
    const search = searchValue ? ` «${searchValue}»` : ''
    return t('news_events_page.not_found', { query: search })
  }

  if (loading) return <Loader />

  return (
    <>
      <div className={styles.newsTopBox}>
        <Typography variant="h2" className={styles.newsHeader}>
          {t('news_events_page.last_news')}
        </Typography>
        {fullNews && (
          <Filters
            month={month}
            year={selectedYear}
            handleModalBtn={handleModalBtn}
          />
        )}
      </div>
      <div className={styles.newsBottomBox}>
        {fullOrShortData?.length > 0 ? (
          fullOrShortData?.map((item) => (
            <div
              key={item.id}
              className={styles.newsCard}
              onClick={
                !isTablet && !isMobile
                  ? () => handleCardClick(item.id)
                  : undefined
              }
            >
              <div>
                <img src={item.img} alt="news" className={styles.newsImg} />
              </div>
              <div className={styles.newsCardContent}>
                <Typography variant="h4" className={styles.newsTitle}>
                  {item.title}
                </Typography>
                <Typography
                  variant="small-text-regular"
                  className={styles.newsDescription}
                >
                  {parse(item.description)}
                </Typography>
                <div className={styles.newsCalendar}>
                  <div>
                    <img src={calendar} alt="calendar" />
                  </div>
                  <Typography
                    variant="small-text-regular"
                    className={styles.newsDate}
                  >
                    {item.date}
                  </Typography>
                </div>
                {isTablet && (
                  <Button
                    onClick={() => handleCardClick(item.id)}
                    className={styles.newsReadBtn}
                  >
                    {t('common.read_more')}
                    <div>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </Button>
                )}
              </div>
            </div>
          ))
        ) : (
          <Typography variant="body-text" className={styles.newsNotFound}>
            {getNotFoundMessage()}
          </Typography>
        )}
      </div>
      {NewsData?.count > pageSize && fullNews && pageSize && (
        <Pagination
          page={page}
          onPageChange={handlePageChange}
          totalPages={Math.ceil(NewsData?.count / pageSize)}
        />
      )}
    </>
  )
}
