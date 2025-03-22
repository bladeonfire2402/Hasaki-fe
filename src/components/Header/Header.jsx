import CustomContainer from "../Container/Container"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import RoundedComponent from "../RounedComponent/RounedComponent"
import SearchBar from "../Searchbar/SearchBar"

import { useEffect, useState } from "react";
import imgData from "../../../public/assets/data/imgData";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ClientContext } from "../../Context/clientContex";



const HeaderHasaki = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartQuantity, setCartQuantity]= useState(0)
  
  const navigate = useNavigate()
  
  const {cart} = useContext(ClientContext)



  useEffect(() => {
    if (cart && cart.cart) {  // Kiểm tra nếu cart không undefined và có thuộc tính 'cart'
      setCartQuantity(cart.cart.length)
    }
  }, [cart]);

  return (
    <div className="Header-wrapper ">
      <CustomContainer align={true} justify={true} bgColor={"primary-bg"} padding={"px-[100px] py-6"}>
       <div className="flex items-center w-full justify-between">
        <div className="Header-wrapper__LogoTitle flex w-fit mr-14" onClick={()=>{navigate('/')}}>
          <img src={imgData.logoBruh} className="w-[170px]"/>
        </div>
        {/**Phần thanh tìm kiếm */}
        <SearchBar/>

        {/**Phần thanh menu */}
        <HeaderMenu/>

        {/**Phần nút giỏ hàng */}
        <div className="Header-cart relative" onClick={()=>{navigate('/cart')}}>
          <RoundedComponent icon={ShoppingCartIcon} color={"text-white"}/>
          <div className="absolute text-sm top-[-5px] rounded-full text-poppins bg-white px-1 right-0" >
            {!cartQuantity?"0":cartQuantity}
          </div>
        </div>
       </div>
      </CustomContainer>
    </div>
  )
}

export default HeaderHasaki
