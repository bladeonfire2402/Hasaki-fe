
import { Route,Routes  } from 'react-router-dom'
import AuthScreen_Login from './Client-AuthScreen/AuthScreen-Login'
import AuthScreen_Register from './Client-AuthScreen/AuthScreen-Register'

const Client_Layout = () => {
  return (
    <div className='Client-Layout'>
        <Routes>
          <Route path='/auth/login' element={<AuthScreen_Login/>}/>
          <Route path='/auth/register' element={<AuthScreen_Register/>}/>
        </Routes>
    </div> 
    )
}

export default Client_Layout