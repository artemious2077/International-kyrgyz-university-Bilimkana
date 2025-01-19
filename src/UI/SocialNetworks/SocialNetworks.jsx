import { FacebookIcon } from '@/assets/icons/FacebookIcon'
import { InstagramIcon } from '@/assets/icons/InstagramIcon'
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon'
import { TikTokIcon } from '@/assets/icons/TikTokIcon'
import { TelegramIcon } from '@/assets/icons/TelegramIcon'
import styles from './SocialNetworks.module.scss'
import { useSocialStore } from './api/UseSocialStore'
import { useEffect, useState } from 'react'

export const SocialNetworks = ({ variant }) => {
  const { socials, fetchData } = useSocialStore()
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    fetchData()
    const footer = document.querySelector('footer')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true)
          } else {
            setIsFooterVisible(false)
          }
        })
      },
      { threshold: 0.01 },
    )
    if (footer) {
      observer.observe(footer)
    }
    return () => {
      if (footer) {
        observer.unobserve(footer)
      }
    }
  }, [fetchData])

  return (
    <div
      className={`${styles[variant]} ${variant === 'socialBar' && isFooterVisible ? styles.noVisible : ''}`}
    >
      <a href={socials[0]?.telegram} target='_blank' rel='noopener noreferrer'>
        <TelegramIcon />
      </a>
      <a href={socials[0]?.instagram} target='_blank' rel='noopener noreferrer'>
        <InstagramIcon />
      </a>
      <a href={socials[0]?.facebook} target='_blank' rel='noopener noreferrer'>
        <FacebookIcon />
      </a>
      <a href={socials[0]?.tiktok} target='_blank' rel='noopener noreferrer'>
        <TikTokIcon />
      </a>
      <a href={socials[0]?.whatsapp} target='_blank' rel='noopener noreferrer'>
        <WhatsAppIcon />
      </a>
    </div>
  )
}
