import styles from './ThemeButton.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '@/app/store/UseThemeProvider.jsx'

export const ThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  return (
    <label
      className={`${styles['custom-switch']} ${theme === 'dark' ? styles.dark : styles.light}`}
    >
      <input
        type='checkbox'
        checked={theme === 'dark'}
        onChange={changeTheme}
      />
      <span className={styles.slider}></span>
      <span className={styles.circle}>
        <div className={styles.circleImg} />
      </span>
    </label>
  )
}
