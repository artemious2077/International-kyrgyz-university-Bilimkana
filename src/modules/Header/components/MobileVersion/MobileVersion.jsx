import { LogoBilim } from '@/UI/LogoBilim/LogoBilim'
import styles from './MobileVersion.module.scss'
import { Button } from '@/UI/Button/Button'
import { CloseIcon } from '@/assets/icons/CloseIcon'
import { Navbar } from '../NavBar/Navbar'
import { ModalButton } from '../ModalButton/ModalButton'
import { LmsButton } from '../LmsButton/LmsButton'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
export const MobileVersion = ({ toggleMenu }) => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuContent}>
        <div className={styles.mobileMenuHeader}>
          <LogoBilim onClick={toggleMenu} variant='mobileLogo' />
          <div>
            <ThemeButton />
            <Button variant='noStyles' onClick={toggleMenu}>
              <CloseIcon />
            </Button>
          </div>
        </div>
        <div className={styles.mobileMenuNav}>
          <Navbar toggleMenu={toggleMenu} />
          <div className={styles.mobileMenuNavBtns}>
            <ModalButton />
            <LmsButton />
          </div>
        </div>
        <SocialNetworks variant='socialMobileStyle' />
      </div>
    </div>
  )
}
