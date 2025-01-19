import styles from './Icon.module.scss'

export const BurgerMenuIcon = () => {
  return (
    <svg
      className={styles.burger}
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.5 12H40.5M7.5 24H40.5M7.5 36H40.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
