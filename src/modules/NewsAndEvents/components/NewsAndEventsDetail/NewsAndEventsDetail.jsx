import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Typography } from '@/UI/Typography/Typography'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs'
import { Loader } from '@/modules/Loader/Loader.jsx'
import { News } from '../News/News.jsx'
import { Events } from '../Events/Events.jsx'
import { useNewsDetail, useEventsDetail } from './api/LocalApi'
import { useTranslation } from 'react-i18next'
import { appRoutes } from '@/utils/constants/constants'
import styles from './NewsAndEventsDetail.module.scss'

export const NewsAndEventsDetail = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { state } = useLocation()
  const isNews = state?.data === 'news'
  const isEvents = state?.data === 'events'
  const {
    NewsDetailData,
    fetchNewsRequest,
    loading: newsLoading,
  } = useNewsDetail()
  const {
    EventsDetailData,
    fetchEventsRequest,
    loading: eventsLoading,
  } = useEventsDetail()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isNews) {
      fetchNewsRequest(id)
    } else if (isEvents) {
      fetchEventsRequest(id)
    }
  }, [id, isNews, isEvents, fetchNewsRequest, fetchEventsRequest])

  if (newsLoading || eventsLoading) {
    return <Loader />
  }

  const detailData = isNews
    ? NewsDetailData
    : isEvents
      ? EventsDetailData
      : null

  return (
    <MultiContainer className={styles.newsAndEventsDetail}>
      <Breadcrumbs
        currentPageLink={isNews ? appRoutes.news : appRoutes.events}
        currentPage={t(`common.${isNews ? 'news' : 'events'}`)}
        pageId={detailData.title}
      />
      <Typography variant='h2' className={styles.newsAndEventsDetailTitle}>
        {detailData.title}
      </Typography>
      <Typography
        variant='body-text'
        className={styles.newsAndEventsDetailDescription}
      >
        {detailData.description && parse(detailData.description)}
      </Typography>
      <div className={styles.newsAndEventsDetailImgBox}>
        <img
          src={detailData.img}
          alt='img'
          className={styles.newsAndEventsDetailImg}
        />
      </div>
      <Typography
        variant='body-text'
        className={styles.newsAndEventsDetailText}
      >
        {detailData.text && parse(detailData.text)}
      </Typography>
      {isNews && <News fullNews={false} detailId={id} />}
      {isEvents && <Events fullEvents={false} detailId={id} />}
    </MultiContainer>
  )
}
