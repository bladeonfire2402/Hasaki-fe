
import { ClientMenu } from "../../Constants/ClientConstant"
import CustomContainer from "../Container/Container"
import RoundedComponent from "../RounedComponent/RounedComponent"
import PersonIcon from '@mui/icons-material/Person';
import NorTitle from "../Title/NorTitle/NorTitle";
import ContainerRow from "../Container/ContainerRow";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HouseIcon from '@mui/icons-material/House';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const HeaderMenu = () => {
  
  return (
    <div className="HeaderMenu-wrapper ">
        <CustomContainer justify={true} gap={"gap-[30px]"}  padding={"px-[50px]"}>
          {/** Menu Đăng nhập*/}
          <div className="flex items-center gap-2">
            <RoundedComponent icon={PersonIcon}/>
            <div className="Submenu">
             <NorTitle title={ClientMenu.AuthMenu.Login} color={"text-white"}/>
             <ContainerRow>
               <NorTitle title={ClientMenu.AuthMenu.Submenu.Account} color={"text-white"}/>
               <ArrowDropDownIcon color="info" fontSize="medium"/>
             </ContainerRow>
            </div>
          </div>

          {/** Menu hệ thống cửa hàng*/}
          <div className="flex items-center gap-2">
            <RoundedComponent icon={HouseIcon}/>
            <div className="Submenu">
             <NorTitle title={ClientMenu.Store} color={"text-white"}/>
            

            </div>
          </div>

           {/** Menu hệ thống hỗ trợ khách hàng*/}
           <div className="flex items-center gap-2">
            <RoundedComponent icon={LocalPhoneIcon}/>
            <div className="Submenu">
             <NorTitle title={ClientMenu.Help} color={"text-white"}/>
            </div>
          </div>
        </CustomContainer>
    </div>
  )
}

export default HeaderMenu