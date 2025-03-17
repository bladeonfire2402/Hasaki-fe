import { useState } from "react"
import InventoryIcon from '@mui/icons-material/Inventory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CategoryIcon from '@mui/icons-material/Category';
import imgData from "../../../public/assets/data/imgData";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useNavigate } from "react-router";


const SideBar=()=>{
    const menu =["Product","User","Categories","Order","News"]

    const [onSelectedMenu,setOnSelectedMenu] = useState("Product")

    const navigate = useNavigate()

    const handleIcon = (menu)=>{
        if(menu==='Product'){
            return (<div><InventoryIcon/></div>)}
        else if(menu==="User"){
            return(<div><SupervisedUserCircleIcon/></div>)
        }else if(menu==="Categories"){
            return(<div><CategoryIcon/></div>)
        }else if(menu==="News"){
            return(<div><NewspaperIcon/></div>)
        }else if(menu==="Order"){
            return (<div><LocalMallIcon/></div>)
        }
    }

    const handleNavigate=(menu)=>{
        setOnSelectedMenu(menu)
        if(menu==='Product'){
            navigate('/admin/dashboard/product')
        }
        else if(menu==="User"){
            navigate('/admin/dashboard/user')
        }else if(menu==="Categories"){
            
            navigate('/admin/dashboard/category')
        }else if(menu==="News"){
            navigate('/admin/dashboard/user')
        }else if(menu==="Order"){
            navigate('/admin/dashboard/order')
        }
       
    }
    return(
        <div className="SideBar-wrapper w-1/5 primary-bg flex flex-col  text-white  cursor-pointer px-3 ">
            <div className="flex items-center px-7 py-5 gap-2">
                <img src={imgData.logo} className="w-8"/>
                <h2 className="text-lexend font-bold text-3xl ">Lunaxi</h2>
            </div>
           
            <div className="px-3 py-3 flex flex-col gap-5 rounded  border-2 rounded-lg">
            {menu.map((menu)=>(
                <div className={`flex items-center text-lexend text-2xl py-1 pl-4 gap-1 ${onSelectedMenu==menu?"bg-white rounded-md text-blue":""}`} key={menu} onClick={()=>{handleNavigate(menu)}}>
                    {handleIcon(menu)}
                    <h2 className="mt-1">{menu}</h2>
                </div>
            ))}
            </div>
            
        </div>
    )
}
export default SideBar