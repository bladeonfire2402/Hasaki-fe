import { useState } from "react"
import NorTitle from "../Title/NorTitle/NorTitle"
import './index.css'
import imgData from "../../../public/assets/data/imgData"

// eslint-disable-next-line react/prop-types
const CategoryBlock = ({category}) => {
  const [imageUrl,setImageUrl]=useState("")

  const checkCategoryProduct = ()=>{
     if(category.product.length!=0){
       const product = category.product[0]

       const productImg=product.imageUrl
       return productImg
     }
  }

  const mem=checkCategoryProduct()
  return (
    <div className='CategoryBlock-wrapper flex flex-col items-center border-2 px-2 py-2 rounded-lg'>
        <img className="rounded-lg w-[130px] h-[130px] temporaly" src={mem || imgData.noProduct}/>
        <NorTitle title={category.name} otherStyle={"mt-2"} color={"text-blue"}/>
    </div>
  )
}

export default CategoryBlock