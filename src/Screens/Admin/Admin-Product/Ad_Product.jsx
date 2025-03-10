import { useContext, useState } from "react"
import { adminContext } from "../../../Context/adminContext"
import Spinner from "../../../Components/spinner/spinner"
import { cutDate } from "../../../utils/date-utils"
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CreateProductForm from "../../../Components/form/CreateProductForm/createProductForm";

const Ad_Product = () => {

  const {productList} = useContext(adminContext) // List sản phẩm
  const [create,setCreate]=useState(false)
  console.log(productList)

  return (
    <div className="Ad_Product-wrapper  relative">
        <h1 className="text-lexend text-xl px-3 py-2">Danh sách sản phẩm</h1>
        <div className="Ad_Product-features bg-black mb-3 rounded-md px-3 py-3  my-2 mx-3">
            <div className="text-white text-lexend " onClick={()=>{setCreate(!create)}}>Thêm sản phẩm</div>
        </div>
        {create==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 "><CreateProductForm/></div>}
        {!productList?
            <div className="loading"><Spinner/></div>
            :       
            <div className="Ad_Product-Result rounded-md overflow-hidden my-3 mx-3">
            <div className="flex justify-between bg-black text-white text-lexend  px-9 py-2">
                <h2>STT</h2>
                <h2>Tên SP</h2>
                <h2>Ảnh SP</h2>
                <h2>Mô tả</h2>
                <h2>Danh mục</h2>
                <h2>Giá tiền</h2>
                <h2>Ngày tạo</h2>
                <h2>Thao tác</h2>
            </div>

            {productList.map((product,index)=>(
                <div key={product._id} className="flex justify-between items-center text-black text-lexend border-2 px-9 py-5">
                  <h2>{index+1}</h2>
                <h2>{product.productName}</h2>
                <img className="w-[70px] h-[70px]" src={product.imageUrl}/>
                <h2>{product.description}</h2>
                <h2>{product.categoryId.name}</h2>
                <h2>{product.price}</h2>
                <h2>{cutDate(product.createdAt)}</h2>
                <div className="flex gap-2">
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-red-500  "><DeleteIcon style={{ color: 'white', fontSize: 20 }} /></div>
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-blue-500  "><UpgradeIcon style={{ color: 'white', fontSize: 20 }} /></div>                    
                </div>
                </div>
            ))}
            </div>
        }

    </div>
  )
}

export default Ad_Product