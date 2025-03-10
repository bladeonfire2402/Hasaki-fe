import { Route,Routes  } from 'react-router-dom'
import AuthScreen_Register from './Client-AuthScreen/AuthScreen-Register'
import HeaderHasaki from '../../Components/Header/Header'
import FooterHasaki from '../../Components/Footer/Footer'
import Client_HomeScreen from './Client-HomeScreen/Cli-HomeScreen'
import Client_ShopScreen from './Client-ShopScreen/Cli-ShopScreen'
import Client_ProfileScreen from './Client-ProfileScreen/Cli-ProfileScreen'
import ImageUpload from '../Test/TestUpload'


const Client_Layout = () => {
  return (
    <div className='Client-Layout h-full'>
       <HeaderHasaki/>
        <Routes>
          <Route path='' element={<Client_HomeScreen/>}/>
          <Route path='/auth/register' element={<AuthScreen_Register/>}/>
          <Route path='/shop' element={<Client_ShopScreen/>}/>
          <Route path='/profle' element={<Client_ProfileScreen/>}/>
          <Route path='/test' element={<ImageUpload/>} />
        </Routes>
       <FooterHasaki/>
    </div> 
    )
}

export default Client_Layout