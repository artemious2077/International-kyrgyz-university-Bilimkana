import styles from './Icon.module.scss'

export const FacebookIcon = () => {
  return (
    <svg
      className={styles.facebook}
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='40'
        width='40'
        height='40'
        rx='20'
        transform='rotate(90 40 0)'
        fill='white'
      />
      <g clipPath='url(#clip0_3338_19326)'>
        <path
          className={styles.path}
          d='M35 20C35 11.7158 28.2842 5 20 5C11.7158 5 5 11.7158 5 20C5 27.4869 10.4853 33.6925 17.6562 34.8178V24.3359H13.8477V20H17.6562V16.6953C17.6562 12.9359 19.8957 10.8594 23.322 10.8594C24.9631 10.8594 26.6797 11.1523 26.6797 11.1523V14.8438H24.7883C22.9249 14.8438 22.3438 16 22.3438 17.1863V20H26.5039L25.8389 24.3359H22.3438V34.8178C29.5147 33.6925 35 27.487 35 20Z'
          fill='#233974'
        />
        <path
          d='M25.8389 24.3359L26.5039 20H22.3438V17.1863C22.3438 15.9999 22.9249 14.8438 24.7883 14.8438H26.6797V11.1523C26.6797 11.1523 24.9631 10.8594 23.3219 10.8594C19.8957 10.8594 17.6562 12.9359 17.6562 16.6953V20H13.8477V24.3359H17.6562V34.8178C18.4316 34.9393 19.2152 35.0002 20 35C20.7848 35.0002 21.5684 34.9393 22.3438 34.8178V24.3359H25.8389Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_3338_19326'>
          <rect
            width='30'
            height='30'
            fill='white'
            transform='translate(5 5)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
