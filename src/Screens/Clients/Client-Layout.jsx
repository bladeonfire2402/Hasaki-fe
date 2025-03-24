import { Route,Routes  } from 'react-router-dom'

import HeaderHasaki from '../../Components/Header/Header'
import FooterHasaki from '../../Components/Footer/Footer'
import Client_HomeScreen from './Client-HomeScreen/Cli-HomeScreen'
import Client_ShopScreen from './Client-ShopScreen/Cli-ShopScreen'
import Cli_CartScreen from './Client-CartScreen/Cli_CartScreen'
import Cli_CheckOutScreen from './Client-CheckOutScreen/Client-CheckOutScreen'
import Client_ProfileScreen from './Client-ProfileScreen/Cli-ProfileScreen'
import ImageUpload from '../Test/TestUpload'
import Client_ProductDetailScreen from './Client-ProductDetailScreen/Cli-ProductDetailScreen'
import Client_CheckOutMomoStatus from './Client-CheckOutMomoStatus/Client-CheckOutMomoStatus'
import Client_CheckOutChargeStatus from './Client-CheckOutMomoStatus/Client-CheckOutChargeStatus'



const Client_Layout = () => {

  return (
    <div className='Client-Layout h-full'>
       <HeaderHasaki/>
        <Routes>
          <Route path='' element={<Client_HomeScreen/>}/>
          <Route path='/productDetail/:id' element={<Client_ProductDetailScreen/>}/>
          <Route path='/shop' element={<Client_ShopScreen/>}/>
          <Route path='/profile' element={<Client_ProfileScreen/>}/>
          <Route path='/test' element={<ImageUpload/>} />
          <Route path='/cart' element={<Cli_CartScreen/>}/>
          <Route path='/checkout' element={<Cli_CheckOutScreen/>}/>
          <Route path='/order/payment_return/*' element={<Client_CheckOutMomoStatus/>}/>
          <Route path='/charge/payment_return/*' element={<Client_CheckOutChargeStatus/>}/>
        </Routes>
       <FooterHasaki/>
    </div> 
    )
}

export default Client_Layout