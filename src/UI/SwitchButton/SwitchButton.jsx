export const SwitchButton = ({
  children,
  className,
  type,
  onClick,
  tabIndex,
}) => {
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={onClick}
        tabIndex={tabIndex}
      >
        {children}
      </button>
    </>
  )
}
