
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './Routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/portfolio'>
    <AllRoutes />
  </BrowserRouter>,
)
