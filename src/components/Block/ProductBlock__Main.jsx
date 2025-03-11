import Heading from "../Title/Heading/Heading"
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import './index.css'

// eslint-disable-next-line react/prop-types
const ProductBlock__Main = ({product,version}) => {
  const [category,setCategory]=useState("")
  
  useEffect(()=>{
    if(product){
      if(product.categoryId){
        setCategory(product.categoryId.name)
      }
    } 
  },[])
  
 
  return (
    <div className={`ProductBlock__Main-wrapper flex flex-col gap-3  rounded-lg pt-3  pb-5 relative ${version==1?"border-2 px-3":"px-5"}`} >
        <div className="flex justify-center">
            <img src={product.imageUrl || ""} className={`"${version==1?"w-[100px]":" "} w-[200px] mt-4"`}/>
        </div>
        <Heading textSize={version==1?"text-[15px]":"text-lg"} title={product.productName}  otherEmphasis={`font-semibold`}/>
        <Heading textSize={version==1?"text-sm":"text-md"} title={product.price +" VNĐ"} textColor={"text-red"} otherEmphasis={"w-[150px] font-semibold"}/>
        <div className="flex items-center gap-1">
          <InventoryIcon fontSize="small" color="primary"/>
          <Heading textSize={"text-sm"} title={category || "Chưa danh mục"} textColor={"text-gray"} otherEmphasis={"w-[150px] "}/>
        </div>
        <div className="btn-order flex w-full text-white items-center justify-center gap-1 primary-bg rounded-lg py-3 cursor-pointer">
            <ShoppingCartIcon  fontSize={version==1?"small":""}/>
           <Heading textSize={version==1?"text-[12px]":"text-sm"} title={"Thêm vào giỏ hàng"} textColor={"text-white"} otherEmphasis={"uppercase "}/>
            
        </div>
    </div>
  )
}

export default ProductBlock__Main