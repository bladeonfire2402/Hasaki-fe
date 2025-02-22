import { Route, Routes } from 'react-router-dom'
import AuthScreen_Login from './Screens/Clients/Client-AuthScreen/AuthScreen-Login'
import Client_Layout from './Screens/Clients/Client-Layout'



function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/*' element={<Client_Layout/>}/>
        <Route path='/admin' element={<AuthScreen_Login/>}/>
      </Routes>
    </div>
  )
}

export default App
