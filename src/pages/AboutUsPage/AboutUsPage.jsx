import { AboutUsContent } from '@/modules/AboutUsComponents/AboutUsContent'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'

export const AboutUsPage = () => {
  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <AboutUsContent />
      <ScrollArrow />
    </main>
  )
}
export default AboutUsPage
