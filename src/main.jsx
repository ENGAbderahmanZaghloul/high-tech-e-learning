import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/swiper/swiper-bundle.min.css"  // الأنماط الخاصة بـ Swiper
import "../node_modules/swiper/modules/navigation.min.mjs"  // استيراد أنماط التنقل
import "../node_modules/swiper/modules/pagination.min.mjs"  // استيراد أنماط التنقل

// import "swiper/swiper-bundle.min.css";
// import "swiper/css/navigation";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
      <App/>
  </BrowserRouter>
    
  </StrictMode>,
)
