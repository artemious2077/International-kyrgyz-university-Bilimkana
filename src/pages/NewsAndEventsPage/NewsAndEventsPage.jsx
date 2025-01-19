import { NewsAndEvents } from '@/modules/NewsAndEvents/NewsAndEvents'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'

export const NewsAndEventsPage = () => {
  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <NewsAndEvents />
      <ScrollArrow />
    </main>
  )
}
