import { Typography } from '@/UI/Typography/Typography'
import styles from './Copyright.module.scss'
import geeksLogo from '@/assets/icons/geeksCompanyLogo.svg'

export const Copyright = () => {
  return (
    <article>
      <div className={styles.copyright}>
        <a
          href='https://geeks.kg/geeks-pro'
          target='_blank'
          rel='noreferrer'
          className={styles.copyrightLink}
        >
          <Typography className={styles.copyrightTitle}>
            Made by Geeks Pro
          </Typography>
          <div className={styles.copyrightIcon}>
            <img src={geeksLogo} alt='geeks company icon' />
          </div>
        </a>
      </div>
    </article>
  )
}
