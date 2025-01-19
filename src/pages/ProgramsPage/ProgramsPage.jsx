import { Programs } from '@/modules/Programs/Programs'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'
export const ProgramsPage = () => {
  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <Programs />
      <ScrollArrow />
    </main>
  )
}
