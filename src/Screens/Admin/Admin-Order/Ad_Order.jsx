import { useContext, useState } from "react"
import { adminContext } from "../../../Context/adminContext"
import Spinner from "../../../Components/spinner/spinner"
import { cutDate } from "../../../utils/date-utils"
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CreateProductForm from "../../../Components/form/CreateProductForm/createProductForm";
import SearchIcon from '@mui/icons-material/Search';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InfoIcon from '@mui/icons-material/Info';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Ad_Order = () => {
  const {productList} = useContext(adminContext) // List sản phẩm
  const [create,setCreate]=useState(false)
  const optionValue=["Xem 5 đơn hàng","Xem 7 đơn hàng"]
  const orderStatus=["Đã xác nhận","Đang giao","Đã giao","Đã hủy"]
  const sortList = ["Mặc định","Theo tổng tiền từ cao đến thấp","Theo tổng tiền từ cao đến thấp"]
  
  
  
  return (
    <div className="Ad_Product-wrapper  relative">
        <div className="flex items-center justify-center  px-3 py-5 gap-2 text-blue">
          <LocalMallIcon fontSize="large"/>
          <h1 className="text-lexend text-3xl font-bold">Quản lý đơn hàng</h1>
        </div>
        <div className="Ad_Product-features bg-black mb-3 rounded-md px-4 py-5   mx-3 flex  gap-5">
        <div className="w-1/3 text-lexend text-md">
            <h1 className="text-white mb-2 text-lexend font-semibold">Thao tác</h1>
            <div className="flex  gap-2 justif">
             
              <div className="flex gap-1 text-white text-lexend h-fit bg-yellow-500 px-2 py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <ImportExportIcon/>
                <p>Xuất Excel</p>
              </div>

              <div className="flex gap-1 text-white text-lexend h-fit bg-gray-500 px-4 py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <AddToPhotosIcon/>
                <p>Xem thống kê</p>
              </div>
            </div>
            </div>  
            <div className="w-1/3">
            <h1 className="text-white mb-2 text-lexend font-semibold">Tìm kiếm đơn hàng</h1>
              <div className="relative w-full text-lexend">
               <input type="text" className="pl-2 pr-[90px] py-2 rounded-md w-full" placeholder="Mã đơn hàng"/>
               <div className="absolute middle right-0 flex justify-center items-center bg-blue-500 text-white px-2 py-2 rounded-r-md">
                  <p>Tìm</p>
                  <SearchIcon/>
               </div>
              </div>
              <div className="w-full text-lexend mt-5 font-semibold">
                <h2 className="text-white mb-2">Tùy chọn hiển thị</h2>
                <select className="w-full px-2 py-2 rounded-md ">
                  {optionValue.map((option)=>(
                    <option className="px-2 py-2 rounded-none" key={option}>{option}</option>
                  ))}
                </select>
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

              <h1 className="text-white mb-2 text-lexend font-semibold mt-5">Lọc theo trạng thái</h1>
              <div className="w-full text-lexend font-semibold">
                <select className="w-full px-2 py-2 rounded-md ">
                  {optionValue.map((option)=>(
                    <option className="px-2 py-2 rounded-none" key={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            
        </div>
        {create==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 "><CreateProductForm/></div>}
        {!productList?
            <div className="loading"><Spinner/></div>
            :       
            <div className="Ad_Product-Result rounded-md overflow-hidden my-3 mx-3">
            <div className="grid grid-cols-9 items-cente bg-black text-white text-lexend  px-9 py-2">
                <h2>STT</h2>
                <h2>Mã đơn hàng</h2>
                <h2>Tên KH</h2>
                <h2>Ghi chú</h2>
                <h2>Tổng số SP</h2>
                <h2>Trạng thái</h2>
                <h2>Phương thức</h2>
                <h2>Giá tiền</h2>
                <h2>Thao tác</h2>
            </div>

            {productList.map((product,index)=>(
                <div key={product._id} className="grid grid-cols-9  text-black text-lexend border-2 px-9 py-5">
                  <h2>{index+1}</h2>
                 <h2>{product.productName}</h2>
                 <img className="w-[70px] h-[70px]" src={product.imageUrl}/>
                 <h2>{product.description}</h2>
                 <h2>{product.categoryId.name}</h2>
                 <div>{product.status || <div className="">Active</div>}</div>
                 <h2>{product.price}</h2>
                 <h2>{cutDate(product.createdAt)}</h2>
                 <div className="flex gap-2 ">
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-red-500  " onClick={()=>{}}><DeleteIcon style={{ color: 'white', fontSize: 20 }} /></div>
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

export default Ad_Order