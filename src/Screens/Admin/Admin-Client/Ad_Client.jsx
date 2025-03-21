import { useContext, useState } from "react"
import { adminContext } from "../../../Context/adminContext"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Spinner from "../../../Components/spinner/spinner"
import { cutDate } from "../../../utils/date-utils"
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CreateProductForm from "../../../Components/form/CreateProductForm/createProductForm";
import SearchIcon from '@mui/icons-material/Search';

import ImportExportIcon from '@mui/icons-material/ImportExport';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InfoIcon from '@mui/icons-material/Info';

const Ad_Client = () => {

  const {userList} = useContext(adminContext) // List sản phẩm
  const [create,setCreate]=useState(false)
  const optionValue=["Xem 5 user","Xem 7 user"]
  const sortList = ["Mặc định","Ngày tạo mới nhất","Theo tên a-z"]

  console.log(userList)
  
  
  return (
    <div className="Ad_Product-wrapper  relative">
        <div className="flex items-center justify-center  px-3 py-5 gap-2 text-blue">
          <AccountCircleIcon fontSize="large"/>
          <h1 className="text-lexend text-3xl font-bold">Quản lý người dùng</h1>
        </div>
        <div className="Ad_Product-features bg-black mb-3 rounded-md px-4 py-5   mx-3 flex  gap-5">
        <div className="w-1/3 text-lexend text-md cursor-default">
            <h1 className="text-white mb-2 text-lexend font-semibold">Thao tác</h1>
            <div className="flex  gap-2">      
              <div className="flex gap-1 cursor-pointer text-white text-lexend h-fit bg-yellow-500 px-2 py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <ImportExportIcon/>
                <p>Xuất Excel</p>
              </div>

              <div className="flex gap-1 cursor-pointer text-white text-lexend h-fit bg-gray-500 px-4 py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <AddToPhotosIcon/>
                <p>Xem thống kê</p>
              </div>
            </div>
            </div>  
            <div className="w-1/3">
            <h1 className="text-white mb-2 text-lexend font-semibold">Tìm kiếm người dùng</h1>
              <div className="relative w-full text-lexend">
               <input type="text" className="pl-2 pr-[90px] py-2 rounded-md w-full" placeholder="Nguyễn Văn A"/>
               <div className="absolute middle right-0 flex justify-center items-center bg-blue-500 text-white px-2 py-2 rounded-r-md">
                  <p>Tìm</p>
                  <SearchIcon/>
               </div>
              </div>
              
            </div>
            <div className="w-1/3">
              <h1 className="text-white mb-2 text-lexend font-semibold">Sắp xếp theo</h1>
              <div className="w-full text-lexend font-semibold">
                <select className="w-full px-2 py-2 rounded-md ">
                  {sortList.map((option)=>(
                    <option className="px-2 py-2 rounded-none" key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
        </div>
        {create==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 "><CreateProductForm/></div>}
        {!userList?
            <div className="loading"><Spinner/></div>
            :       
            <div className="Ad_Product-Result rounded-md overflow-hidden my-3 mx-3">
            <div className="grid grid-cols-8 items-cente bg-black text-white text-lexend  px-9 py-2">
                <h2>STT</h2>
                <h2>Họ Tên</h2>
                <h2 className="">Email</h2>
                <h2>Số điện thoai</h2>
                <h2>Trạng thái</h2>
                <h2>Xác thực</h2>
                <h2>Ngày tạo</h2>
                <h2>Thao tác</h2>
            </div>

            {userList.map((user,index)=>(
                <div key={user._id} className="grid grid-cols-8  text-black text-lexend border-2 px-9 py-5">
                  <h2>{index+1}</h2>
                 <h2>{user.fullname}</h2>
                 
                 <h2 className="[line-break:anywhere]">{user.email}</h2>
                 <h2>{user.phone}</h2>
                 <div>{user.status || <div className="">Active</div>}</div>
                 <h2>{user.verified==false ? "Chưa xác thực" :"Đã xác thực"}</h2>
                 <h2>{cutDate(user.createdAt)}</h2>
                 <div className="flex gap-2 ">
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-red-500  "><DeleteIcon style={{ color: 'white', fontSize: 20 }} /></div>
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-blue-500  "><UpgradeIcon style={{ color: 'white', fontSize: 20 }} /></div>   
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-green-500  "><InfoIcon style={{ color: 'white', fontSize: 20 }} /></div>                                     
                </div>
                </div>
            ))}
            </div>
        }

    </div>
  )
}

export default Ad_Client