import CustomContainer from "../Container/Container"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import RoundedComponent from "../RounedComponent/RounedComponent"
import SearchBar from "../Searchbar/SearchBar"
import LargetTitle from "../Title/LgTitle/LargeTitle"
import { useState } from "react";



const HeaderHasaki = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartQuantity, setCartQuantity]= useState(0)
  
  return (
    <div className="Header-wrapper ">
      <CustomContainer align={true} justify={true} bgColor={"primary-bg"} padding={"px-[100px] py-6"}>
       <div className="flex items-center w-full justify-between">
        <div className="Header-wrapper__LogoTitle flex w-fit mr-14">
          <img src="" className=""/>
          <LargetTitle title={"Lunaxi"} color={"text-white"} otherStyle={"uppercase"}/>
        </div>
        {/**Phần thanh tìm kiếm */}
        <SearchBar/>

        {/**Phần thanh menu */}
        <HeaderMenu/>

        {/**Phần nút giỏ hàng */}
        <div className="Header-cart relative">
          <RoundedComponent icon={ShoppingCartIcon} color={"text-white"}/>
          <div className="absolute text-sm top-[-5px] rounded-full text-poppins bg-white px-1 right-0">
            {cartQuantity}
          </div>
        </div>
       </div>
      </CustomContainer>
    </div>
  )
}

export default HeaderHasaki
