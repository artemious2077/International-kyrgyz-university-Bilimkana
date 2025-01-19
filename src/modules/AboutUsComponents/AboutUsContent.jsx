import { MultiContainer } from '@/UI/MultiContainer/MultiСontainer'
import { FirstContent } from './components/FirstContent/FirstContent'
import { SecondContent } from './components/SecondContent/SecondContent'
import { AU_slider } from './components/AU_Slider/AU_Slider'
import { Breadcrumbs } from '@/UI/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { Loader } from '@/modules/Loader/Loader'
import { Leaders } from './components/Leaders/Leaders'
import { UseAboutUsStores } from './api/UseAboutUsStores'

export const AboutUsContent = () => {
  const { t } = useTranslation()
  const { loading, fetchRequest } = UseAboutUsStores()
  useEffect(() => {
    fetchRequest()
  }, [fetchRequest])

  if (loading) {
    return <Loader />
  }
  return (
    <section>
      <MultiContainer>
        <Breadcrumbs currentPage={t('common.about_us')} />
        <FirstContent />
      </MultiContainer>
      <AU_slider />
      <MultiContainer>
        <SecondContent />
      </MultiContainer>
      <Leaders />
    </section>
  )
}
