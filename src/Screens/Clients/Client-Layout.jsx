import { Route,Routes  } from 'react-router-dom'

import HeaderHasaki from '../../Components/Header/Header'
import FooterHasaki from '../../Components/Footer/Footer'
import Client_HomeScreen from './Client-HomeScreen/Cli-HomeScreen'
import Client_ShopScreen from './Client-ShopScreen/Cli-ShopScreen'
import Client_ProfileScreen from './Client-ProfileScreen/Cli-ProfileScreen'
import ImageUpload from '../Test/TestUpload'
import Client_ProductDetailScreen from './Client-ProductDetailScreen/Cli-ProductDetailScreen'


const Client_Layout = () => {
  return (
    <div className='Client-Layout h-full'>
       <HeaderHasaki/>
        <Routes>
          <Route path='' element={<Client_HomeScreen/>}/>
          <Route path='/productDetail/:id' element={<Client_ProductDetailScreen/>}/>
          <Route path='/shop' element={<Client_ShopScreen/>}/>
          <Route path='/profle' element={<Client_ProfileScreen/>}/>
          <Route path='/test' element={<ImageUpload/>} />
        </Routes>
       <FooterHasaki/>
    </div> 
    )
}

export default Client_Layout