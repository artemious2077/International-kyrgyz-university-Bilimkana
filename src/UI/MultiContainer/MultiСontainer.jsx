import styles from './MultiContainer.module.scss'

export const MultiContainer = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>
}
