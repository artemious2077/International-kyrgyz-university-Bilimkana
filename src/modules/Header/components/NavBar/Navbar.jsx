import React from 'react'

import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { HeaderLinks } from '@/utils/constants/constants'
import { useTranslation } from 'react-i18next'

export const Navbar = ({ toggleMenu, onclick }) => {
  const { t } = useTranslation()
  return (
    <ul className={styles.navList}>
      {HeaderLinks.map((item) => (
        <li key={item.id} onClick={onclick}>
          <NavLink
            onClick={toggleMenu}
            to={item.path}
            className={styles.navLink}
            style={({ isActive }) => ({
              color: isActive
                ? 'var(--text-orange-color)'
                : 'var(--text-white-color)',
            })}
          >
            {t(item.label)}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
