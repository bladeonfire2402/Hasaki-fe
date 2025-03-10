import { Route, Routes } from 'react-router-dom'
import AuthScreen_Login from './Screens/Clients/Client-AuthScreen/AuthScreen-Login'
import Client_Layout from './Screens/Clients/Client-Layout'
import AuthScreen_Register from './Screens/Clients/Client-AuthScreen/AuthScreen-Register'
import AuthScreen_VerifyEmail from './Screens/Clients/Client-AuthScreen/AuthScreen-VerifyEmail'

import AdminLayout from './Screens/Admin/Admin_Layout'
import { ToastContainer } from 'react-toastify'
import ClientContextProvider from './Context/clientContex'



function App() {
  return (
    <div className='app h-screen'>
      <ToastContainer/>
      <ClientContextProvider>
        <Routes>
          <Route path='/*' element={<Client_Layout/>}/>
          <Route path='/admin/*' element={<AdminLayout/>}/>
          <Route path='/auth/login' element={<AuthScreen_Login/>}/>
          <Route path='/auth/register' element={<AuthScreen_Register/>}/>
          <Route path='/auth/verifypwd' element={<AuthScreen_VerifyEmail/>}/>
        </Routes>
      </ClientContextProvider>
    </div>
  )
}

export default App
