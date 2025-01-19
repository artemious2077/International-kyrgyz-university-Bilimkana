import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import styles from './Students.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useTranslation } from 'react-i18next'
import { StudentsCard } from './StudentsCard/StudentsCard'
import { useDragToScroll } from '@/utils/hooks/useDragToScroll'
import { UseAdditionalStores } from '../../api/UseAdditionalStores'

export const StudentsAchievements = () => {
  const { t } = useTranslation()
  const containerRef = useDragToScroll()
  const { students } = UseAdditionalStores()
  return (
    <section className={styles.studentsAchievements}>
      <MultiContainer>
        <Typography variant='h2' className={styles.sectionTitle}>
          {t('additional_info_page.achievements')}
        </Typography>
        <div className={styles.studentsContainer} ref={containerRef}>
          {students.map((item) => (
            <StudentsCard key={item.id} student={item} />
          ))}
        </div>
      </MultiContainer>
    </section>
  )
}
