import {  useContext, useEffect, useState } from "react"
import { adminContext } from "../../../Context/adminContext"
import Spinner from "../../../Components/spinner/spinner"
import { cutDate } from "../../../utils/date-utils"
import DeleteIcon from '@mui/icons-material/Delete';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import CreateProductForm from "../../../Components/form/CreateProductForm/createProductForm";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import stringSlice from "../../../utils/string-util";
import Pagination from "../../../Components/Pagination/Pagination";
import UpdateProductForm from "../../../Components/form/UpdateProductForm/UpdateProductForm";
import DeletePopsup from "../../../Components/Pops up/DeletePopsup";
import axios from "axios";
import { toast } from "react-toastify";



const Ad_Product = () => {

  const {productList,reload,setReload} = useContext(adminContext) // List sản phẩm
  const [create,setCreate]=useState(false)
  const [update,setUpdate]=useState(false);
  const [onDelete,setonDelete]=useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPost,setCurrentPost]=useState();
  const [currentProduct,setcurrentProduct]=useState()
  
  
  const sortList = ["Theo tên a-z","Theo giá tiền từ thấp đến cao","Theo giá tiền từ cao đến thấp"]
  
  const handleUpdate = (product)=>{
    setUpdate(!update)
    setcurrentProduct(product)
  }

  const handleDelete = (product)=>{
    setonDelete(!onDelete)
    setcurrentProduct(product)
  }

  const Reload =()=>{
     setReload(!reload)
  }
  
  const deleteFunc = async () => {
    try {
      const deleteUrl = import.meta.env.VITE_API_ENDPOINT_DELETEPRODUCT;
  
      // Gửi dữ liệu trong phần body của yêu cầu DELETE
      const response = await axios.delete(deleteUrl, {
        data: {
          id: currentProduct._id,
          categoryId: currentProduct.categoryId._id
        }
      });
  
      setonDelete(!onDelete);
      toast.success(response.data.message || "Đã xóa product");
  
      // Đợi 3s rồi reload lại page
      setTimeout(() => {
        setReload(!reload);
      }, 3000);
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error("Lỗi xóa Sản phẩm");
    }
  };


  

  useEffect(()=>{
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
  
    if(productList){
      setCurrentPost(productList.slice(firstPostIndex, lastPostIndex))
    }
  },[productList,currentPage])


  return (
    <div className="Ad_Product-wrapper  relative">
        <div className="flex items-center justify-center  px-3 py-5 gap-2 text-blue">
          <InventoryIcon fontSize="large"/>
          <h1 className="text-lexend text-3xl font-bold">Quản lý sản phẩm</h1>
        </div>
        <div className="Ad_Product-features bg-black mb-3 rounded-md px-4 py-5   mx-3 flex  gap-5">
        <div className="w-1/3 text-lexend text-md">
            <h1 className="text-white mb-2 text-lexend font-semibold">Thao tác</h1>
            <div className="flex  gap-2 justify-between">
              <div className="flex gap-1 text-white justify-center text-lexend cursor-pointer h-fit bg-blue-500 px-2 py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <AddCircleIcon/>
                <p>Thêm SP</p>
              </div>

              <div className="flex gap-1 text-white text-lexend h-fit bg-yellow-500 px-2 cursor-pointer py-2 rounded-md" onClick={()=>{setCreate(!create)}}>
                <ImportExportIcon/>
                <p>Xuất Excel</p>
              </div>

              <div className="flex gap-1 text-white text-lexend h-fit bg-gray-500 px-4 cursor-pointer py-2 rounded-md" onClick={()=>{Reload()}}>
                <AddToPhotosIcon/>
                <p>Tải lại</p>
              </div>
            </div>
            </div>  
            <div className="w-1/3">
            <h1 className="text-white mb-2 text-lexend font-semibold">Tìm kiếm SP</h1>
              <div className="relative w-full text-lexend">
               <input type="text" className="pl-2 pr-[90px] py-2 rounded-md w-full" placeholder="Kem nền ..."/>
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
        {create==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 ">
          <CreateProductForm/></div>}
        {update==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 ">
          <UpdateProductForm product={currentProduct} setUpdate={setUpdate} update={update}/></div>}
        {onDelete==false?<></>:<div className="w-full h-full  absolute top-0   ">
          <DeletePopsup deleteFunc={deleteFunc} setDelete={setonDelete} ondelete={onDelete}/>
        </div>}

       
        {!currentPost?
            <div className="loading"><Spinner/></div>
            :       
            <div className="Ad_Product-Result rounded-md overflow-hidden my-3 mx-3">
            <div className="grid grid-cols-9 items-cente bg-black text-white text-lexend  px-9 py-2">
                <h2>STT</h2>
                <h2>Tên SP</h2>
                <h2>Ảnh SP</h2>
                <h2>Mô tả SP</h2>
                <h2>Danh mục</h2>
                <h2>Trạng thái</h2>
                <h2>Giá tiền</h2>
                <h2>Ngày tạo</h2>
                <h2>Thao tác</h2>
            </div>

            {currentPost.map((product,index)=>(
                <div key={product._id} className="grid grid-cols-9  text-black text-lexend border-2 px-9 py-5">
                  <h2>{index+1}</h2>
                 <h2>{product.productName}</h2>
                 <img className="w-[70px] h-[70px]" src={product.imageUrl}/>
                 <h2 className="mr-3">{stringSlice(product.description)}</h2>
                 <h2>{product.categoryId.name}</h2>
                 <div>{product.status || <div className="">Active</div>}</div>
                 <h2>{product.price}</h2>
                 <h2>{cutDate(product.createdAt)}</h2>
                 <div className="flex gap-2 ">
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-red-500  " onClick={()=>{handleDelete(product)}}><DeleteIcon style={{ color: 'white', fontSize: 20 }} /></div>
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-blue-500" onClick={()=>{handleUpdate(product)}}><UpgradeIcon style={{ color: 'white', fontSize: 20 }} /></div>   
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-green-500 " onClick={()=>{}}><InfoIcon style={{ color: 'white', fontSize: 20 }} /></div>                                     
                </div>
                </div>
            ))}

              <Pagination totalPosts={productList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>
        }

    </div>
  )
}

export default Ad_Product