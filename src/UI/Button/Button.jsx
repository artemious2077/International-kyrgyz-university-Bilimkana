import arrowRight from '@/assets/icons/black_r_arrow.svg'
import arrowLeft from '@/assets/icons/black_l_arrow.svg'
import './Button.scss'

export const Button = (props) => {
  const {
    children,
    onClick,
    variant,
    style,
    rightArrow = false,
    leftArrow = false,
    color,
    className,
    disabled = false,
  } = props
  const classNames = [
    'customButton',
    variant === 'outlinedOrange' ? 'outlinedOrange' : '',
    variant === 'outlinedGrey' ? 'outlinedGrey' : '',
    variant === 'noStyles' ? 'noStyles' : '',
    color === 'white' ? 'white' : '',
    color === 'black' ? 'black' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      className={`${className} ${classNames}`}
      onClick={!disabled ? onClick : undefined}
      style={style}
      disabled={disabled}
    >
      {rightArrow && (
        <div>
          <img src={arrowRight} alt='arrow_right' />
        </div>
      )}
      {children}
      {leftArrow && (
        <div>
          <img src={arrowLeft} alt='arrow_left' />
        </div>
      )}
    </button>
  )
}
