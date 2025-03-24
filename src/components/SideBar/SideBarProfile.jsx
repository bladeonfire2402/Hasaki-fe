import {  Person  } from "@mui/icons-material"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import './index.css'
import { useContext } from "react";
import { ClientContext } from "../../Context/clientContex";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WalletIcon from '@mui/icons-material/Wallet';

// eslint-disable-next-line react/prop-types
const SideBarProfile=({setSection})=>{
    const navigate=useNavigate();
    const {user } = useContext(ClientContext);

    const logout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        //setToken("");
        //setAdmin(false);
        toast.success("Logout Successfully")
        navigate("/");
      }
    
    return(
        <div className="SideBar-wrapper green-bg px-4 text-lexend rounded-md py-3">
            <div className="flex justify-center flex-col items-center rounded-md h-48 w-full bg-primary">
                <div className="rounded-full bg-white size-[70px] flex  items-center justify-center mb-5">
                    <Person fontSize="large"/>
                </div>
                <h1 className="text-xl font-medium text-white">Phạm Đình Liêm</h1>
            </div>

            {/*Switch*/}
            <div className="shadow-vip rounded-md  Sidebar-item-switch" onClick={()=>{setSection("profile")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Thông tin cá nhân </h3></div>
                    <PersonIcon fontSize="medium"/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch" onClick={()=>{setSection("order")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Danh sách đơn hàng</h3></div>
                    <ShoppingCartIcon fontSize="medium"/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch"  onClick={()=>{setSection("prescription")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Sản phẩm yêu thích</h3></div>
                    <FavoriteIcon fontSize="medium"/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch"  onClick={()=>{setSection("wallet")}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Ví Lunaxi</h3></div>
                    <WalletIcon fontSize="medium"/>
                </div>
            </div>

            <div className="shadow-vip rounded-md mt-3 Sidebar-item-switch" onClick={()=>{logout()}}>
                <div className="flex justify-between items-center py-3 px-2">
                    <div className="flex gap-2"><h3>Đăng xuất</h3></div>
                </div>
            </div>
            
            
        </div>
    )
}
export default SideBarProfile