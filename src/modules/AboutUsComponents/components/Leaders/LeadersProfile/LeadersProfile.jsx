import styles from './LeadersProfile.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { Link } from 'react-router-dom'
import { UseAboutUsStores } from '@/modules/AboutUsComponents/api/UseAboutUsStores'

export const LeadersProfile = () => {
  const { leaderData } = UseAboutUsStores()

  return (
    <div className={styles.wrapper}>
      {leaderData.map((leader) => (
        <div key={leader.id} className={styles.leaderFame}>
          <div className={styles.leaderFame__img}>
            <img src={leader.img} alt='profile' />
          </div>
          <Typography variant='h4' className={styles.leaderFame__name}>
            {leader.full_name}
          </Typography>
          <Typography variant='span' className={styles.leaderFame__role}>
            {leader.role}
          </Typography>
          <Link to={`mailto:${leader.email}`}>
            <Typography variant='span' className={styles.leaderFame__email}>
              {leader.email}
            </Typography>
          </Link>
        </div>
      ))}
    </div>
  )
}
