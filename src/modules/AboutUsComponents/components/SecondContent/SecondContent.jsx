import { Typography } from '@/UI/Typography/Typography'
import styles from './SecondContent.module.scss'
import parse from 'html-react-parser'
import { SwitchButton } from '@/UI/SwitchButton/SwitchButton'
import { useTranslation } from 'react-i18next'
import { UseAboutUsStores } from '@/modules/AboutUsComponents/api/UseAboutUsStores'
import { useState } from 'react'

export const SecondContent = () => {
  const { t } = useTranslation()
  const [activeBtn, setActiveBtn] = useState('history_description')
  const { aboutUsData } = UseAboutUsStores()
  const currentContent = (item) => {
    setActiveBtn(item)
  }

  return (
    <div>
      <div className={styles.buttonsFrame}>
        <SwitchButton
          className={`${styles.switchBtn} ${activeBtn === 'history_description' ? styles.active : ''}`}
          onClick={() => currentContent('history_description')}
          tabIndex={1}
        >
          {t('about_us_page.our_history')}
        </SwitchButton>
        <SwitchButton
          className={`${styles.switchBtn} `}
          onClick={() => currentContent('mission_text')}
        >
          {t('about_us_page.mission')}
        </SwitchButton>
        <SwitchButton
          className={`${styles.switchBtn} `}
          onClick={() => currentContent('philosophy_text')}
        >
          {t('about_us_page.philosophy')}
        </SwitchButton>
        <SwitchButton
          className={`${styles.switchBtn} `}
          onClick={() => currentContent('why_biu_text')}
        >
          {t('about_us_page.why_biu')}
        </SwitchButton>
        <SwitchButton
          className={`${styles.switchBtn} `}
          onClick={() => currentContent('purpose_text')}
        >
          {t('about_us_page.goals')}
        </SwitchButton>
        <SwitchButton
          className={`${styles.switchBtn} `}
          onClick={() => currentContent('visions_text')}
        >
          {t('about_us_page.visions')}
        </SwitchButton>
      </div>
      {aboutUsData.map((item) => (
        <div key={item.id} className={styles.btnDescription}>
          {activeBtn === 'history_description' && (
            <div key={item.id}>
              <div className={styles.historyBlock__container}>
                <div className={styles.historyBlock}>
                  <div className={styles.historyBlock__border}>
                    <Typography
                      variant='h1'
                      className={styles.historyBlock__header}
                    >
                      {t('about_us_page.our_history')}
                    </Typography>
                    <Typography
                      variant='span'
                      className={styles.historyBlock__description}
                    >
                      {parse(item.history_description)}
                    </Typography>
                  </div>
                </div>
                <div className={styles.imgContent}>
                  <img src={item.university_profile_img} alt='img' />
                </div>
              </div>
              <Typography
                variant='body-text'
                className={styles.secondDescription}
              >
                {parse(item.history_text)}
              </Typography>
            </div>
          )}
          {activeBtn === 'mission_text' && (
            <div key={item.id} className={styles.missionFrame}>
              <div className={styles.imgContent}>
                <img src={item.mission_img} alt='img' />
              </div>
              <Typography
                variant='body-text'
                className={styles.missionFrame__description}
              >
                {parse(item.mission_text)}
              </Typography>
            </div>
          )}
          {activeBtn === 'philosophy_text' && (
            <Typography
              variant='body-text'
              className={styles.secondDescription}
            >
              {parse(item.philosophy_text)}
            </Typography>
          )}
          {activeBtn === 'why_biu_text' && (
            <Typography
              variant='body-text'
              className={styles.secondDescription}
            >
              {parse(item.why_biu_text)}
            </Typography>
          )}
          {activeBtn === 'purpose_text' && (
            <Typography
              variant='body-text'
              className={styles.secondDescriptionWithMarker}
            >
              {parse(item.purpose_text)}
            </Typography>
          )}
          {activeBtn === 'visions_text' && (
            <Typography
              variant='body-text'
              className={styles.secondDescriptionWithMarker}
            >
              {parse(item.visions_text)}
            </Typography>
          )}
        </div>
      ))}
    </div>
  )
}
