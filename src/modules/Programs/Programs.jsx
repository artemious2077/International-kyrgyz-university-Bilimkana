import { Typography } from '@/UI/Typography/Typography'
import styles from './Programs.module.scss'
import { ProgramSlider } from './components/ProgramSlider/ProgramSlider.jsx'
import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { useProgramsApi } from './api/useProgramsApi'
import { useEffect } from 'react'
import parse from 'html-react-parser'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'
import { usePDF } from './api/useProgramPdfApi'
import ProgramsPdf from './components/ProgramsPdf/ProgramsPdf'
import { Loader } from '../Loader/Loader'

export const Programs = () => {
  const { t } = useTranslation()
  const { programsData, fetchRequest, loading } = useProgramsApi()
  const { pdfData, pdfFetchRequest } = usePDF()

  useEffect(() => {
    fetchRequest()
    pdfFetchRequest()
  }, [fetchRequest, pdfFetchRequest])

  if (loading) {
    return <Loader />
  }

  return (
    <MultiContainer>
      <Breadcrumbs currentPage={t('common.programs')} />
      <div className={styles.programs}>
        <Typography variant='h1' className={styles.programsSLiderHeader}>
          {t('common.programs')}
        </Typography>
        <div className={styles.slider}>
          <ProgramSlider />
        </div>
        <div className={styles.container}>
          {programsData.map((item) => (
            <div key={item.id}>
              <Typography variant='h2' className={styles.programsSecondHeader}>
                {item.title}
              </Typography>
              {item.programs.map((programsItem) => (
                <div key={programsItem.id}>
                  <Typography variant='h5' className={styles.programsTitle}>
                    {programsItem.title}:
                  </Typography>
                  <div className={styles.programsDescription}>
                    <Typography variant='body-text'>
                      {parse(programsItem.description)}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className={styles.programsLastTitle}>
            <Typography
              variant='h5'
              className={styles.programsLastTitle__title}
            >
              {t('programs_page.motto')}
            </Typography>
          </div>
          <div className={styles.programsPdf}>
            {pdfData.map((pdf) => (
              <ProgramsPdf key={pdf.id} pdf={pdf} />
            ))}
          </div>
        </div>
      </div>
    </MultiContainer>
  )
}
