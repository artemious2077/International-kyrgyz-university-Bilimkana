import { FooterLinks } from '@/utils/constants/constants'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import styles from './FooterNavBar.module.scss'

export const FooterNavBar = ({ onClick }) => {
  const { t } = useTranslation()

  return (
    <nav>
      <ul className={styles.navBar}>
        {FooterLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              className={styles.navBarLink}
              to={item.path}
              onClick={onClick}
            >
              {t(item.label)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
