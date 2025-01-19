import { UseAdditionalStores } from '@/modules/AdditionalInfo/api/UseAdditionalStores'
import { AdditionalInfo } from '@/modules/AdditionalInfo/components/AdditionalInfo/AdditionalInfo'
import { InterntshipStatic } from '@/modules/AdditionalInfo/components/InternshipStatick/InternshipStatic'
import { StudentsAchievements } from '@/modules/AdditionalInfo/components/StudentsAchievements/StudentsAchievements'
import { Loader } from '@/modules/Loader/Loader'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
import { useEffect } from 'react'

export const AdditionalPage = () => {
  const { loading, fetchData } = UseAdditionalStores()
  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) {
    return <Loader />
  }

  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <AdditionalInfo />
      <InterntshipStatic />
      <StudentsAchievements />
      <ScrollArrow />
    </main>
  )
}
