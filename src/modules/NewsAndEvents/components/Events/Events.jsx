import { useEvents } from './api/LocalApi'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography } from '@/UI/Typography/Typography'
import styles from './Events.module.scss'
import { useDateModal } from '@/modules/DateModal/api/LocalApi'
import { useNewsAndEvents } from '../../api/LocalApi'
import { Pagination } from '@/modules/Pagination/Pagination'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { months } from '@/utils/constants/constants'
import { Filters } from '@/modules/NewsAndEvents/components/Filters/Filters'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import { Button } from '@/UI/Button/Button'
import arrow from '@/assets/icons/rightArrow.svg'
import { Loader } from '@/modules/Loader/Loader.jsx'

export const Events = ({ fullEvents = true, detailId }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { EventsData, fetchRequest, fetchShortEvents, loading, page: savedPage } = useEvents()
  const { openModal, setEvents, selectedYear, selectedMonth } = useDateModal()
  const { searchValue } = useNewsAndEvents()
  const [page, setPage] = useState(savedPage)
  const month = months.find((month) => month.value === selectedMonth)
  const eventsForDetail = EventsData?.results?.filter(
    (eventsItem) => eventsItem.id !== Number(detailId),
  )
  const fullOrShortData = fullEvents
    ? EventsData?.results
    : eventsForDetail.slice(0, 2)
  const isTablet = useMediaQuery('(max-width: 1024px)')
  const isMobile = useMediaQuery('(max-width: 700px)')

  const handleCardClick = (id) => {
    navigate(`/events/${id}`, { state: { data: 'events' } })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (fullEvents) {
        const errorStatus = await fetchRequest({
          page: page || 1,
          year: selectedYear,
          month: selectedMonth,
          search: searchValue,
        })
        if (errorStatus === 404) {
          fetchRequest({
            page: 1,
            year: selectedYear,
            month: selectedMonth,
            search: searchValue,
          })
        }
      } else await fetchShortEvents()
    }
    fetchData()
  }, [page, selectedYear, selectedMonth, searchValue])

  const handlePageChange = (newPage) => {
    setPage(newPage)
    fetchRequest({
      page: newPage,
      year: selectedYear,
      month: selectedMonth,
      search: searchValue,
    })
    window.scrollTo(0, 0)
  }

  const handleModalBtn = () => {
    setEvents()
    openModal()
  }

  const getNotFoundMessage = () => {
    const search = searchValue ? ` «${searchValue}»` : ''
    return t('news_events_page.not_found', { query: search })
  }

  if (loading) return <Loader />

  return (
    <>
      <div>
        <div className={styles.eventsTopBox}>
          <Typography variant='h2' className={styles.eventsHeader}>
            {t('common.events')}
          </Typography>
          {fullEvents && (
            <Filters
              month={month}
              year={selectedYear}
              handleModalBtn={handleModalBtn}
            />
          )}
        </div>
        <div className={styles.eventsBox}>
          {fullOrShortData?.length > 0 ? (
            fullOrShortData?.map((item) => (
              <div
                key={item.id}
                className={styles.eventsCard}
                onClick={
                  !isTablet && !isMobile
                    ? () => handleCardClick(item.id)
                    : undefined
                }
              >
                <div>
                  <img
                    src={item.img}
                    alt='events'
                    className={styles.eventsImg}
                  />
                </div>
                <div className={styles.eventsCardContent}>
                  <Typography variant='h4' className={styles.eventsTitle}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant='small-text-regular'
                    className={styles.eventsDate}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    variant='small-text-regular'
                    className={styles.eventsDescription}
                  >
                    {parse(item.description)}
                  </Typography>
                  {isTablet && (
                    <Button
                      onClick={() => handleCardClick(item.id)}
                      className={styles.eventsReadBtn}
                    >
                      {t('common.read_more')}
                      <div>
                        <img src={arrow} alt='arrow' />
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <Typography variant='body-text' className={styles.eventsNotFound}>
              {getNotFoundMessage()}
            </Typography>
          )}
        </div>
        {EventsData?.count > 9 && fullEvents && (
          <Pagination
            page={page}
            onPageChange={handlePageChange}
            totalPages={Math.ceil(EventsData?.count / 6)}
          />
        )}
      </div>
    </>
  )
}
