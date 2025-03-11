
import { ClientMenu } from "../../Constants/ClientConstant"
import CustomContainer from "../Container/Container"
import RoundedComponent from "../RounedComponent/RounedComponent"
import PersonIcon from '@mui/icons-material/Person';
import NorTitle from "../Title/NorTitle/NorTitle";
import ContainerRow from "../Container/ContainerRow";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from "react-router";
import { useContext } from "react";
import { ClientContext } from "../../Context/clientContex";


const HeaderMenu = () => {
  const navigateToLogin=useNavigate()
  const {clitoken}=useContext(ClientContext)
  
  return (
    <div className="HeaderMenu-wrapper ">
        <CustomContainer justify={true} gap={"gap-[30px]"}  padding={"px-[50px]"}>
          {/** Menu Đăng nhập*/}
          <div className="flex items-center gap-2" >
            <RoundedComponent icon={PersonIcon} color={"text-white"}/>
            <button onClick={()=>{navigateToLogin('/auth/login')}}>
            </button>
            <div className="Submenu">
              {!clitoken?
              <div>
                 <button className="flex flex-col " onClick={()=>{navigateToLogin('/auth/login')}}>
                  <NorTitle title={"Đăng nhập /"} color={"text-white"}/>
                  <NorTitle title={"Đăng kí"} color={"text-white"}/>
                 </button>
              </div>
              :
              <ContainerRow>
              <NorTitle title={ClientMenu.AuthMenu.Submenu.Account} color={"text-white"} />
              <ArrowDropDownIcon color="info" fontSize="medium"/>
            </ContainerRow>}
             
            </div>
          </div>

          {/** Menu hệ thống cửa hàng*/}
          <div className="flex items-center gap-2">
            <RoundedComponent icon={HouseIcon} color={"text-white"}/>
            <div className="Submenu">
             <NorTitle title={ClientMenu.Store} color={"text-white"}/>
            </div>
          </div>

           {/** Menu hệ thống hỗ trợ khách hàng*/}
           <div className="flex items-center gap-2">
            <RoundedComponent icon={LocalPhoneIcon} color={"text-white"}/>
            <div className="Submenu">
             <NorTitle title={ClientMenu.Help} color={"text-white"}/>
            </div>
          </div>
        </CustomContainer>
    </div>
  )
}

export default HeaderMenu