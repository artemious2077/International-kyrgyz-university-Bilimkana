import { Button } from '@/UI/Button/Button'
import { useMediaQuery } from '@/utils/hooks/useMediaQuery'
import styles from './Pagination.module.scss'

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const isMobile = useMediaQuery('(max-width: 550px)')

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const showPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }

    const handleActivePage = (currentPage) =>
      page === currentPage ? 'outlinedOrange' : 'outlinedGrey'

    const maxPageNumbers = isMobile ? 0 : 4

    const getPageNumbersToShow = () => {
      if (totalPages <= maxPageNumbers + 2) {
        return pageNumbers
      }

      const pages = []
      if (page <= maxPageNumbers + 1) {
        pages.push(...pageNumbers.slice(0, maxPageNumbers + 1))
        if (totalPages > maxPageNumbers + 1) {
          pages.push('...')
          pages.push(totalPages)
        }
      } else if (page >= totalPages - maxPageNumbers) {
        pages.push(1)
        if (totalPages > maxPageNumbers + 1) {
          pages.push('...')
        }
        pages.push(...pageNumbers.slice(totalPages - maxPageNumbers - 1))
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(
          ...pageNumbers.slice(
            page - Math.floor(maxPageNumbers / 2) - 1,
            page + Math.ceil(maxPageNumbers / 2),
          ),
        )
        pages.push('...')
        pages.push(totalPages)
      }
      return pages
    }

    return getPageNumbersToShow().map((item, index) => {
      if (item === '...') {
        return <span key={index}>...</span>
      }

      return (
        <Button
          key={item}
          onClick={() => handlePageChange(item)}
          variant={handleActivePage(item)}
          color='black'
          className={styles.paginationBtns}
        >
          {item}
        </Button>
      )
    })
  }

  return (
    <div className={styles.pagination}>
      <Button
        leftArrow
        className={styles.paginationBtns}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      />
      {showPageNumbers()}
      <Button
        rightArrow
        className={styles.paginationBtns}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      />
    </div>
  )
}
