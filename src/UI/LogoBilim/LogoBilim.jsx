import headerLogo from '@/assets/icons/headerLogo.svg'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
export const LogoBilim = ({ variant, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className={`${styles.logo} ${styles[variant]}`}
      to='/'
    >
      <img src={headerLogo} alt='company logo' />
    </Link>
  )
}
