import { Route,Routes  } from 'react-router-dom'
import AuthScreen_Register from './Client-AuthScreen/AuthScreen-Register'
import HeaderHasaki from '../../Components/Header/Header'
import FooterHasaki from '../../Components/Footer/Footer'
import Client_HomeScreen from './Client-HomeScreen/Cli-HomeScreen'

const Client_Layout = () => {
  return (
    <div className='Client-Layout h-full'>
       <HeaderHasaki/>
        <Routes>
          <Route path='' element={<Client_HomeScreen/>}/>
          <Route path='/auth/register' element={<AuthScreen_Register/>}/>
        </Routes>
       <FooterHasaki/>
    </div> 
    )
}

export default Client_Layout