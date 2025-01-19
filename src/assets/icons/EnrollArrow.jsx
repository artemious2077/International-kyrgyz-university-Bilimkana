import styles from './Enroll.module.scss'

export const EnrollArrow = ({ className }) => {
  return (
    <svg
      className={`${styles.enrollOrderArrow} ${className}`}
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
    >
      <path
        d='M6.5 9L12.5 15L18.5 9'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
