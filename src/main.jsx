import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './app/Routes/Router'
import './app/styles/global.scss'
import '@/utils/i18n/i18n'
import { ThemeProvider } from './app/store/UseThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={Router} />
  </ThemeProvider>,
)
