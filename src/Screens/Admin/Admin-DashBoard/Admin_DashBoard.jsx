import { Route, Routes } from "react-router"
import SideBar from "../../../Components/SideBar/SideBar"
import Ad_Product from "../Admin-Product/Ad_Product"
import Ad_Client from "../Admin-Client/Ad_Client"
import Ad_Order from "../Admin-Order/Ad_Order"
import Ad_Categories from "../Admin-Categories/Ad_Categories"
import Ad_Refund from "../Admin-Refund/Ad_Refund"




const Admin_DashBoard = () => {
  return (
    <div className="Admin_DashBoard-wrapper flex h-full min-height-1000">
        <SideBar/>
        <div className="Dashboard w-full">
            <Routes>
                <Route path="/product" element={<Ad_Product/>}/>
                <Route path="/user" element={<Ad_Client/>}/>
                <Route path="/order" element={<Ad_Order/>}/>
                <Route path="/category" element={<Ad_Categories/>}/>
                <Route path="/refund" element={<Ad_Refund/>}/>

               
            </Routes>
        </div>

    </div>
  )
}

export default Admin_DashBoard