import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
import { NewsAndEventsDetail } from '@/modules/NewsAndEvents/components/NewsAndEventsDetail/NewsAndEventsDetail'
export const NewsAndEventsDetailPage = () => {
  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <NewsAndEventsDetail />
      <ScrollArrow />
      <ScrollArrow />
    </main>
  )
}
