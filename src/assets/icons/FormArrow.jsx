import styles from './FormIcons.module.scss'

export const FormArrow = ({ className }) => {
  return (
    <svg
      className={`${styles.formArrow} ${className}`}
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.7688 4.26172L20.3995 12.5001L11.7688 20.7386'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.3983 12.5L3.59845 12.5'
        stroke='currentColor'
        strokeWidth='1.2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
