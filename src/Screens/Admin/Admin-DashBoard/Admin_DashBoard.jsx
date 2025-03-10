import { Route, Routes } from "react-router"
import SideBar from "../../../Components/SideBar/SideBar"
import Ad_Product from "../Admin-Product/Ad_Product"
import { useState } from "react"

const Admin_DashBoard = () => {
  const [manageTitle,setmanageTitle]= useState("Product")
  return (
    <div className="Admin_DashBoard-wrapper flex ">
        <SideBar/>
        <div className="Dashboard w-full">
            <div className="flex justify-center items-center  primary-bg py-5">
                <h1 className="text-poppins text-4xl text-white uppercase font-bold">LUNAXI {manageTitle}</h1>
            </div>
            <Routes>
                <Route path="/product" element={<Ad_Product/>}/>
                <Route path="/user"/>
            </Routes>
        </div>

    </div>
  )
}

export default Admin_DashBoard