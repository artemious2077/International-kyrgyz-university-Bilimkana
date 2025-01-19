import { EnrollOrder } from '@/modules/EnrollOrder/EnrollOrder'
import { ScrollArrow } from '@/UI/ScrollArrow/ScrollArrow'
import { SocialNetworks } from '@/UI/SocialNetworks/SocialNetworks'

export const EnrollProcedurePage = () => {
  return (
    <main>
      <SocialNetworks variant='socialBar' />
      <EnrollOrder />
      <ScrollArrow />
    </main>
  )
}
