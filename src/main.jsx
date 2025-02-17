import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
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
