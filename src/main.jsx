import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';
import './index.css';  // Đảm bảo rằng tệp index.css đã được tạo
import App from './App.jsx'

//Thêm các cái này
//BrowserRouter
//StoreContextProvider
//ThemeProvider
///App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer/>
      <App></App>
    </BrowserRouter>
  </StrictMode>,
)
