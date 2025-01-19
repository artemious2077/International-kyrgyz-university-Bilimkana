import styles from './OT_CustomDots.module.scss'

export const OT_CustomDots = ({ isActive, onClick }) => (
  <div className='cont'>
    <div
      className={`${styles.customDot} ${isActive ? styles.activeDot : ''}`}
      onClick={onClick}
    />
  </div>
)
