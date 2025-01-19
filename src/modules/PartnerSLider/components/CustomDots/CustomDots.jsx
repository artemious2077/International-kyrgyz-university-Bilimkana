import React from 'react'
import styles from './CustomDots.module.scss'

export const CustomDots = ({ isActive, onClick }) => (
  <div
    className={`${styles.customDot} ${isActive ? styles.activeDot : ''}`}
    onClick={onClick}
  ></div>
)
export default CustomDots
