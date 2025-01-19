import styles from './ProgramsPdf.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import downloadPDF from '@/assets/icons/downloadPDF.svg'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'

const ProgramsPdf = ({ pdf }) => {
  const isScreen540px = useMediaQuery('(max-width: 540px)')
  const isMediumScreen = useMediaQuery('(max-width: 768px)')

  let truncateLength = 0
  if (isScreen540px) {
    truncateLength = 40
  } else if (isMediumScreen) {
    truncateLength = 80
  } else {
    truncateLength = 150
  }

  return (
    <div className={styles.pdf}>
      <div className={styles.pdfContent}>
        <Typography
          variant='body-text'
          className={styles.pdf__title}
          truncate={truncateLength}
        >
          {pdf.title}
        </Typography>
      </div>
      <a
        className={styles.pdfLink}
        href={pdf.pdf}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div>
          <img src={downloadPDF} alt='download pdf' />
        </div>
      </a>
    </div>
  )
}

export default ProgramsPdf
