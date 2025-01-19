import styles from './RadioInputs.module.scss'

export const RadioInputs = (props) => {
  const { data, selectedValue, setSelectedValue, name, getValue, getLabel } =
    props

  return (
    <div className={styles.radioInputs}>
      {data?.map((item) => (
        <label key={item} className={styles.radioInputLabel}>
          <input
            type='radio'
            name={name}
            value={getValue(item)}
            checked={selectedValue === getValue(item)}
            onChange={() => setSelectedValue(getValue(item))}
          />
          <span className={styles.radioLabelText}>{getLabel(item)}</span>
        </label>
      ))}
    </div>
  )
}
