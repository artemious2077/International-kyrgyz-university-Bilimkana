import styles from './Header.module.scss'

import '@/app/styles/global.scss'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { LanguageSwitcher } from '@/modules/LanguageSwitcher/LanguageSwitcher'
import { ThemeButton } from './components/ThemeButton/ThemeButton'
import { LmsButton } from './components/LmsButton/LmsButton'
import { BurgerMenuIcon } from '@/assets/icons/BurgerMenuIcon'
import { Button } from '@/UI/Button/Button'
import { Navbar } from './components/NavBar/Navbar'
import { ModalButton } from './components/ModalButton/ModalButton'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import { LogoBilim } from '@/UI/LogoBilim/LogoBilim'
import { useState } from 'react'
import { MobileVersion } from './components/MobileVersion/MobileVersion'

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1080px)')
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <header className={styles.header}>
      <MultiContainer>
        <nav className={styles.headerContainer}>
          <LogoBilim onClick={handleLinkClick} variant='headerLogo' />
          {isMobile ? (
            <>
              <div className={styles.burgerBtns}>
                <LanguageSwitcher />
                <Button variant='noStyles' onClick={toggleMenu}>
                  <BurgerMenuIcon />
                </Button>
              </div>
              {isMenuOpen && <MobileVersion toggleMenu={toggleMenu} />}
            </>
          ) : (
            <>
              <Navbar onclick={handleLinkClick} />
              <div className={styles.headerRightEnd}>
                <ThemeButton />
                <LanguageSwitcher />
                <ModalButton />
                <LmsButton />
              </div>
            </>
          )}
        </nav>
      </MultiContainer>
    </header>
  )
}
