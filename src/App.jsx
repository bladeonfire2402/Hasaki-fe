import { Route, Routes } from 'react-router-dom'
import AuthScreen_Login from './Screens/Clients/Client-AuthScreen/AuthScreen-Login'
import Client_Layout from './Screens/Clients/Client-Layout'
import AuthScreen_Register from './Screens/Clients/Client-AuthScreen/AuthScreen-Register'
import AuthScreen_ResetPassword from './Screens/Clients/Client-AuthScreen/AuthScreen-ResetPassword'



function App() {
  return (
    <div className='app h-screen'>
      <Routes>
        <Route path='/*' element={<Client_Layout/>}/>
        <Route path='/admin' element={<AuthScreen_Login/>}/>
        <Route path='/auth/login' element={<AuthScreen_Login/>}/>
        <Route path='/auth/register' element={<AuthScreen_Register/>}/>
        <Route path='/auth/resetpwd' element={<AuthScreen_ResetPassword/>}/>

      </Routes>
    </div>
  )
}

export default App
