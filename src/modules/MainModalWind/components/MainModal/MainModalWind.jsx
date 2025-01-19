import { Typography } from '@/UI/Typography/Typography'
import styles from './MainModalWind.module.scss'
import './Modal.scss'
import { useForm } from 'react-hook-form'
import {
  useDropdownPrograms,
  useModalApi,
  useModalWind,
} from '../../api/MainModalApi.js'
import { useContext, useEffect, useState } from 'react'
import { useAcceptedModalHook } from '@/utils/helpers/Helpers.js'
import close from '@/assets/icons/close.svg'
import 'react-international-phone/style.css'
import { emailRegEx } from '@/utils/constants/constants.js'
import { ThemeContext } from '@/app/store/UseThemeProvider.jsx'
import { PhoneInput } from 'react-international-phone'
import { useTranslation } from 'react-i18next'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { FormArrow } from '@/assets/icons/FormArrow'

export const MainModalWind = () => {
  const { t } = useTranslation()
  const { isModal, closeModal } = useModalWind()
  const closeModalTab = (event) => {
    if (event.target === event.currentTarget) {
      closeModal()
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    const isPhoneValid = isValidPhoneNumber(data.number)
    if (isPhoneValid) {
      await postRequest(data)
      closeModal()
      openAcceptedModal()
    } else {
      setError('number', {
        type: 'manual',
        message: 'Неверный формат номера телефона',
      })
    }
  }

  const { theme } = useContext(ThemeContext)
  const [isChecked, setIsChecked] = useState(false)
  const [phone, setPhone] = useState('')
  const { postRequest } = useModalApi()
  const { openAcceptedModal } = useAcceptedModalHook()
  const { optionData, optionRequest } = useDropdownPrograms()

  const getDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const handleEmailChange = (e) => {
    const { value } = e.target
    setValue('email', value)
    if (emailRegEx.email.test(value)) {
      clearErrors('email')
    } else {
      setError('email', {
        type: 'manual',
        message: `${t('form_modal.email_error')}`,
      })
    }
  }

  useEffect(() => {
    optionRequest()
  }, [optionRequest])

  const handleCheckboxChange = (event) => setIsChecked(event.target.checked)

  const isFormValid = () => {
    const { full_name, date_of_birth, number, email, program, en_level } =
      watch()
    return (
      full_name &&
      date_of_birth &&
      isValidPhoneNumber(number) &&
      emailRegEx.email.test(email) &&
      program &&
      en_level &&
      isChecked
    )
  }

  return (
    <div className={styles.modalBg} onMouseDown={closeModalTab}>
      {isModal && (
        <div className={`${styles.modalBox} formBg ${theme}`}>
          <div className={styles.modalBox__cross}>
            <img src={close} alt='close' onClick={closeModal} />
          </div>
          <form className={styles.modalWInd} onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h2' className={styles.modalWind__header}>
              {t('form_modal.form')}
            </Typography>
            <div className={styles.line} />
            <div
              className={`${styles.modalWind__headerLine} lineTheme ${theme}`}
            ></div>
            <input
              type='text'
              className={`${styles.modalWind__formInput} inputBg ${theme}`}
              {...register('full_name', {
                required: true,
                pattern:
                  /^[A-Za-zА-Яа-яЁё]{1,50}(?:\s{1,4}[A-Za-zА-Яа-яЁё]{1,50}){0,3}$/,
              })}
              placeholder={t('form_modal.full_name')}
            />
            {errors.full_name && (
              <p className={styles.error}>{t('form_modal.error')}</p>
            )}
            <input
              type='date'
              {...register('date_of_birth', {
                required: t('form_modal.date_error'),
                onChange: (e) => {
                  const input = e.target
                  if (input.value) {
                    const date = new Date(input.value)
                    const currentYear = new Date()
                    if (date.getFullYear() < 1924) {
                      input.setCustomValidity(`${t('form_modal.date_min')}`)
                    } else if (date.getFullYear() > currentYear.getFullYear()) {
                      input.setCustomValidity(`${t('form_modal.date_max')}`)
                    } else {
                      input.setCustomValidity('')
                    }
                  }
                },
              })}
              min='1924-01-01'
              max={getDate()}
              className={`${styles.modalWind__formInput} inputBg ${theme}`}
            />
            {errors.date_of_birth && (
              <p className={styles.error}>{errors.date_of_birth.message}</p>
            )}
            <PhoneInput
              className={` inputBg ${theme}`}
              defaultCountry='kg'
              value={phone}
              onChange={(phone) => {
                setPhone(phone)
                if (isValidPhoneNumber(phone)) {
                  clearErrors('number')
                }
              }}
              {...register('number', {
                required: 'Номер телефона обязателен',
                validate: (value) =>
                  isValidPhoneNumber(value) || `${t('form_modal.phone_error')}`,
              })}
            />
            {errors.number && (
              <p className={styles.error}>{errors.number.message}</p>
            )}
            <input
              className={`${styles.modalWind__formInput} inputBg ${theme}`}
              {...register('email', {
                required: true,
                pattern: emailRegEx.email,
              })}
              placeholder={t('form_modal.email')}
              type='email'
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className={styles.error}>{t('form_modal.error')}</p>
            )}
            <select
              className={`${styles.formDropdown} dropdownBg ${theme}`}
              {...register('program', { required: `${t('form_modal.error')}` })}
            >
              <option
                value=''
                disabled
                selected
                className={styles.selectedOption}
              >
                {t('common.programs')}
              </option>
              {optionData.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
            {errors.program && (
              <p className={styles.dropdownError}>{errors.program.message}</p>
            )}
            {''}
            <select
              className={`${styles.formDropdown} dropdownBg ${theme}`}
              {...register('en_level', {
                required: `${t('form_modal.error')}`,
              })}
            >
              <option
                value=''
                disabled
                selected
                className={styles.selectedOption}
              >
                {t('form_modal.en_level')}
              </option>
              <option value='Не владею'>{t('levelOptions.no')}</option>
              <option value='Базовый ( А1 Elementary)'>
                {t('levelOptions.base')}
              </option>
              <option value='Базовый продвинутый (A2 Beginner)'>
                {t('levelOptions.intermediate')}
              </option>
              <option value='Уверенный (B1 Intermediate / B2 Upper Intermediate)'>
                {t('levelOptions.advanced')}
              </option>
              <option value='Профессиональный (C1 Advanced / C2 Proficiency)'>
                {t('levelOptions.professional')}
              </option>
            </select>
            {errors.en_level && (
              <p className={styles.dropdownError}>{errors.en_level.message}</p>
            )}
            <label htmlFor='checkbox' className={styles.checkboxLabel}>
              <input
                type='checkbox'
                id='checkbox'
                className={styles.checkbox}
                onChange={handleCheckboxChange}
              />
              <div className={`${styles.checkboxView} checkboxTheme ${theme}`}>
                <svg
                  className={styles.checkboxIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='12'
                  viewBox='0 0 16 12'
                  fill='none'
                >
                  <path
                    d='M15.4926 0.409529C15.7816 0.682748 15.9503 1.05956 15.9615 1.45711C15.9728 1.85466 15.8257 2.2404 15.5526 2.52953L7.05258 11.5295C6.91482 11.6751 6.74928 11.7916 6.56573 11.8722C6.38217 11.9527 6.18434 11.9957 5.98392 11.9985C5.78349 12.0013 5.58454 11.9639 5.39881 11.8885C5.21309 11.8131 5.04435 11.7012 4.90258 11.5595L0.402584 7.05953C0.137624 6.77518 -0.00662274 6.39909 0.000233694 6.01048C0.00709013 5.62188 0.164514 5.25111 0.43934 4.97629C0.714166 4.70146 1.08494 4.54404 1.47354 4.53718C1.86214 4.53032 2.23823 4.67457 2.52258 4.93953L5.93258 8.34753L13.3726 0.469529C13.6458 0.180524 14.0226 0.0118525 14.4202 0.000601086C14.8177 -0.0106503 15.2035 0.136439 15.4926 0.409529Z'
                    fill='#0FA958'
                  />
                </svg>
              </div>
              <Typography variant='p' className={styles.checkbox__description}>
                {t('form_modal.agreement')}
              </Typography>
            </label>
            <button
              className={`${styles.modalWind__btn} ${isFormValid() ? '' : styles.btnDisabled}`}
              type='submit'
              disabled={!isFormValid()}
            >
              <Typography variant='h9' className={styles.modalWind__title}>
                {t('form_modal.send')}
              </Typography>
              <FormArrow className={styles.arrow} />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
