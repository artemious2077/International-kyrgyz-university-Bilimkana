import { loadComponent } from '@/utils/helpers/Helpers.js'
import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../Layout/Layout'
import { appRoutes } from '@/utils/constants/constants.js'
import { ProgramsPage } from '@/pages/ProgramsPage'

const MainPage = loadComponent(() => import('@/pages/MainPage'), 'MainPage')
const AboutUsPage = loadComponent(
  () => import('@/pages/AboutUsPage'),
  'AboutUsPage',
)
// const ProgramsPage = loadComponent(() => import('@/pages/ProgramsPage'), 'ProgramsPage');
const NotFoundPage = loadComponent(
  () => import('@/pages/NotFoundPage'),
  'NotFoundPage',
)
const NewsAndEventsPage = loadComponent(
  () => import('@/pages/NewsAndEventsPage/NewsAndEventsPage'),
  'NewsAndEventsPage',
)
const NewsAndEventsDetailPage = loadComponent(
  () => import('@/pages/NewsAndEventsDetailPage/NewsAndEventsDetailPage'),
  'NewsAndEventsDetailPage',
)
const AdditionalPage = loadComponent(
  () => import('@/pages/AdditionalPage'),
  'AdditionalPage',
)
const EnrollProcedurePage = loadComponent(
  () => import('@/pages/EnrollProcedurePage'),
  'EnrollProcedurePage',
)

export const Router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <Layout />,
    children: [
      {
        path: appRoutes.home,
        element: <MainPage />,
      },
      {
        path: appRoutes.aboutUs,
        element: <AboutUsPage />,
      },
      {
        path: appRoutes.enrollmentProcedure,
        element: <EnrollProcedurePage />,
      },
      {
        path: appRoutes.programs,
        element: <ProgramsPage />,
      },
      {
        path: appRoutes.news,
        element: <NewsAndEventsPage />,
      },
      {
        path: appRoutes.newsDetail,
        element: <NewsAndEventsDetailPage />,
      },
      {
        path: appRoutes.events,
        element: <NewsAndEventsPage />,
      },
      {
        path: appRoutes.eventsDetail,
        element: <NewsAndEventsDetailPage />,
      },
      {
        path: appRoutes.errorPage,
        element: <NotFoundPage />,
      },
      {
        path: appRoutes.additionalInfo,
        element: <AdditionalPage />,
      },
    ],
  },
])
