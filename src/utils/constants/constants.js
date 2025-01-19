export const appRoutes = {
  home: '/',
  aboutUs: '/about-us',
  programs: '/programs',
  enrollmentProcedure: '/enrollment-procedure',
  news: '/news',
  newsDetail: '/news/:id',
  events: '/events',
  eventsDetail: '/events/:id',
  additionalInfo: '/additional-info',
  errorPage: '*',
}

export const BASE_URL = import.meta.env.VITE_API_URL

export const emailRegEx = {
  email: new RegExp(
    '^(([^<>()[\\].,;:\\s@"]+(\\.[^<>()[\\].,;:\\s@"]+)*)|(".+"))@(gmail\\.com|yandex\\.ru|mail\\.ru|outlook\\.com|yahoo\\.com|icloud\\.com)$',
    'iu',
  ),
}

export const HeaderLinks = [
  { id: 1, label: 'common.about_us', path: appRoutes.aboutUs },
  { id: 2, label: 'common.programs', path: appRoutes.programs },
  {
    id: 3,
    label: 'common.enrollment_procedure',
    path: appRoutes.enrollmentProcedure,
  },
  { id: 4, label: 'common.news', path: appRoutes.news },
]

export const FooterLinks = [
  { id: 1, label: 'common.about_us', path: appRoutes.aboutUs },
  { id: 2, label: 'common.programs', path: appRoutes.programs },
  {
    id: 3,
    label: 'common.enrollment_procedure',
    path: appRoutes.enrollmentProcedure,
  },
  {
    id: 4,
    label: 'common.additional_information',
    path: appRoutes.additionalInfo,
  },
  { id: 5, label: 'common.news', path: appRoutes.news },
  { id: 6, label: 'common.events', path: appRoutes.events },
]

export const months = [
  { value: 1, label: 'months.january' },
  { value: 2, label: 'months.february' },
  { value: 3, label: 'months.march' },
  { value: 4, label: 'months.april' },
  { value: 5, label: 'months.may' },
  { value: 6, label: 'months.june' },
  { value: 7, label: 'months.july' },
  { value: 8, label: 'months.august' },
  { value: 9, label: 'months.september' },
  { value: 10, label: 'months.october' },
  { value: 11, label: 'months.november' },
  { value: 12, label: 'months.december' },
]
