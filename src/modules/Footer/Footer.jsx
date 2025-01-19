import styles from './Footer.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useTranslation } from 'react-i18next'
import { LogoBilim } from '@/UI/LogoBilim/LogoBilim'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
import { FooterNavBar } from './components/FooterNavBar/FooterNavBar'
import { Contacts } from './components/Contacts/Contacts'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { Copyright } from './components/Copyright/Copyright'

export const Footer = () => {
  const { t } = useTranslation()
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <footer className={styles.footer}>
        <MultiContainer className={styles.footerContent}>
          <div className={styles.socialFrame}>
            <LogoBilim variant='footerLogo' onClick={handleLinkClick} />
            <div className={styles.socialFrameNetworks}>
              <Typography
                variant='body-text-medium'
                className={styles.socialFrameTitle}
              >
                {t('footer.social_media')}
              </Typography>
              <SocialNetworks variant='footerStyle' />
            </div>
          </div>
          <FooterNavBar onClick={handleLinkClick} />
          <Contacts />
        </MultiContainer>
      </footer>
      <Copyright />
    </>
  )
}
