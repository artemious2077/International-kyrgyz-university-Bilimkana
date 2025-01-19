import styles from './TeacherSlider.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useState } from 'react'
import parse from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import { EnrollArrow } from '@/assets/icons/EnrollArrow'
import { EmailIcon } from '@/assets/icons/EmailIcon'
import { PhoneIcon } from '@/assets/icons/PhoneIcon'

export const TeacherSlide = ({ ourTeachersData }) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const textThreshold = 100
  const isArray = Array.isArray(ourTeachersData.education)
  const shouldShowButton = isArray
    ? ourTeachersData.education.some((el) => el.length > textThreshold)
    : ourTeachersData.education.length > textThreshold

  return (
    <div key={ourTeachersData.id} className={styles.teacherFrame}>
      <div className={styles.teacherFrameImage}>
        <img src={ourTeachersData.img} alt='teacher photo' />
      </div>
      <div className={styles.teachText}>
        <Typography
          variant='small-text-regular'
          className={styles.teacherFrameName}
        >
          {ourTeachersData.full_name}
        </Typography>
        <Typography
          variant='extra-small-regular'
          className={styles.teacherFrameSpeciality}
        >
          {ourTeachersData.speciality}
        </Typography>

        <Typography
          variant='extra-small-regular'
          className={styles.teacherFrameEducation}
        >
          {isExpanded ? (
            isArray ? (
              ourTeachersData.education.map((el, index) => (
                <div key={index}>
                  <Typography>{parse(el)}</Typography>
                </div>
              ))
            ) : (
              <Typography>{parse(ourTeachersData.education)}</Typography>
            )
          ) : (
            <div>
              {isArray
                ? parse(
                    ourTeachersData.education[0].slice(0, textThreshold) +
                      '...',
                  )
                : parse(
                    ourTeachersData.education.slice(0, textThreshold) + '...',
                  )}
            </div>
          )}
        </Typography>
        {shouldShowButton && (
          <div onClick={handleToggle} className={styles.toggleButton}>
            {isExpanded ? (
              <div className={styles.readArrow}>
                <Typography
                  className={styles.close}
                  variant='extra-small-regular'
                >
                  {t('common.close')}
                </Typography>
                <EnrollArrow className={styles.arrowClose} />
              </div>
            ) : (
              <div className={styles.readArrow}>
                <Typography
                  className={styles.open}
                  variant='extra-small-regular'
                >
                  {t('common.read_more')}
                </Typography>
                <EnrollArrow className={styles.arrow} />
              </div>
            )}
          </div>
        )}

        <div className={styles.mainEmailPhone}>
          <div className={styles.mainEmail}>
            <EmailIcon />
            <div>
              <Typography
                variant='extra-small-regular'
                className={styles.teachEmail}
              >
                {ourTeachersData.email}
              </Typography>
            </div>
          </div>
          <div className={styles.mainCall}>
            <PhoneIcon />
            <div>
              <Typography
                variant='extra-small-regular'
                className={styles.teachEmail}
              >
                {ourTeachersData.number}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
