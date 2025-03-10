import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import './index.css';  // Đảm bảo rằng tệp index.css đã được tạo
import App from './App.jsx'


//Thêm các cái này
//BrowserRouter

//ThemeProvider
///App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
