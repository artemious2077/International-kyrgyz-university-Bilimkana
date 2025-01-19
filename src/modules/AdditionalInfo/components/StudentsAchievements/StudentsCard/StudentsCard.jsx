import { ArrowRight } from '@/assets/icons/ArrowRight'
import { Typography } from '@/UI/Typography/Typography'
import styles from './StudentsCard.module.scss'
import { useState } from 'react'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import parse from 'html-react-parser'

export const StudentsCard = ({ student }) => {
  const [isOpenCard, setOpenCard] = useState(null)
  const handleClick = (id) => {
    setOpenCard(isOpenCard === id ? null : id)
  }
  const isMobile = useMediaQuery('(max-width: 540px)')
  return (
    <div
      className={`${styles.studentsCard}
       ${isOpenCard === student.id ? styles.openCard : ''}`}
      key={student.id}
    >
      <div
        className={styles.studentsImage}
        onClick={() => handleClick(student.id)}
      >
        <img src={student.img} alt='student photo' />
      </div>
      {isOpenCard === student.id && (
        <Typography
          onClick={() => handleClick(student.id)}
          variant='small-text-medium'
          truncate={370}
          className={`${styles.studentsDescription}
           ${isMobile ? styles.animateMobile : styles.animateDesc} `}
        >
          {parse(student.description)}
        </Typography>
      )}
      <div
        onClick={() => handleClick(student.id)}
        className={styles.studentsCardArrow}
      >
        <ArrowRight
          className={`${styles.arrow}
           ${isOpenCard === student.id ? styles.arrowOpen : styles.arrowClose}`}
        />
      </div>
    </div>
  )
}
