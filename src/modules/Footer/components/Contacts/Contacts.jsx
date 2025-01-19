import { Typography } from '@/UI/Typography/Typography'
import { UseContactsStore } from '../../api/UseContactsStore'
import styles from './Contacts.module.scss'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const Contacts = () => {
  const { contactsData, contactsRequest } = UseContactsStore()
  const { t } = useTranslation()
  useEffect(() => {
    contactsRequest()
  }, [contactsRequest])
  return (
    <ul className={styles.contacts}>
      <li>
        <Typography variant='h5' className={styles.contactsTitle}>
          {t('footer.email')}
        </Typography>
        <Link to={`mailto:${contactsData[0]?.email}`}>
          <Typography variant='body-text'>{contactsData[0]?.email}</Typography>
        </Link>
      </li>
      <li>
        <Typography variant='h5' className={styles.contactsTitle}>
          {t('footer.phone')}
        </Typography>
        <Link to={`tel:${contactsData[0]?.number}`}>
          <Typography variant='body-text'>{contactsData[0]?.number}</Typography>
        </Link>
        <Link to={`tel:${contactsData[0]?.number_2}`}>
          <Typography variant='body-text'>
            {contactsData[0]?.number_2}
          </Typography>
        </Link>
      </li>
      <li>
        <Typography variant='h5' className={styles.contactsTitle}>
          {t('footer.address')}
        </Typography>
        <Typography variant='body-text'>{contactsData[0]?.address}</Typography>
        <Link
          to={contactsData[0]?.gps}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Typography variant='body-text'>{contactsData[0]?.gps}</Typography>
        </Link>
      </li>
    </ul>
  )
}
