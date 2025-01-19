import { MainMap } from '@/modules/MainMap/MainMap'
import { HeaderSlider } from '@/modules/HeaderSlider/HeaderSLider'
import { AddInformation } from '@/modules/AddInformation/AddInformation'
import { PartnerSlider } from '@/modules/PartnerSLider/PartnerSlider'
import { LastNews } from '@/modules/LastNews/LastNews'
import { Events } from '@/modules/Events/Events'
import { OurTeachers } from '@/modules/OurTeachers/OurTeachers'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { MainQuestions } from '@/modules/mainQuestions/MainQuestions.jsx'
import { useEffect } from 'react'
import { Loader } from '@/modules/Loader/Loader.jsx'
import { useHeadData } from '@/modules/HeaderSlider/api/LocalApi.js'

export const MainPage = () => {
  const { headData, loading, fetchRequest } = useHeadData()
  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])
  if (loading) {
    return <Loader />
  }
  return (
    <main>
      <HeaderSlider headData={headData} />
      <SocialNetworks variant='socialBar' />
      <ScrollArrow />
      <AddInformation />
      <PartnerSlider />
      <LastNews />
      <Events />
      <OurTeachers />
      <MainQuestions />
      <MainMap />
    </main>
  )
}
export default MainPage
