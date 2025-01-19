import { useTranslation } from 'react-i18next'
import styles from './Breadcrumbs.module.scss'
import { NavLink } from 'react-router-dom'
import { Typography } from '../Typography/Typography'

export const Breadcrumbs = ({ currentPage, currentPageLink, pageId }) => {
  const { t } = useTranslation()
  const crumbs = []

  crumbs.push(
    <li key='main'>
      <NavLink to='/' className={styles.link}>
        <Typography
          variant='extra-small-regular'
          color='backgroundAccentDefault'
        >
          {t('common.home')}
        </Typography>
      </NavLink>
    </li>,
  )

  crumbs.push(
    <li key='icon1' className={styles.separator}>
      <Typography variant='extra-small-regular' color='backgroundAccentDefault'>
        /
      </Typography>
    </li>,
  )

  if (currentPage && currentPageLink) {
    crumbs.push(
      <li key='parentLink'>
        <NavLink to={currentPageLink} className={styles.link}>
          <Typography
            variant='extra-small-regular'
            color='backgroundAccentDefault'
          >
            {currentPage}
          </Typography>
        </NavLink>
      </li>,
    )

    crumbs.push(
      <li key='icon2' className={styles.separator}>
        <Typography
          variant='extra-small-regular'
          color='backgroundAccentDefault'
        >
          /
        </Typography>
      </li>,
    )

    crumbs.push(
      <li key='currentTitle'>
        <Typography
          variant='extra-small-regular'
          color='backgroundAccentDefault'
          truncate={30}
          className={styles.pageId}
        >
          {pageId}
        </Typography>
      </li>,
    )
  } else if (currentPage) {
    crumbs.push(
      <li key='currentTitle'>
        <Typography
          variant='extra-small-regular'
          color='backgroundAccentDefault'
          className={styles.currentPage}
        >
          {currentPage}
        </Typography>
      </li>,
    )
  }

  return <ul className={`${styles.breadcrumbsContainer}`}>{crumbs}</ul>
}
