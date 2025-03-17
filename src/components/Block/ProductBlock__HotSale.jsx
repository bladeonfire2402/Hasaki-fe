import { use, useEffect, useState } from "react"
import Heading from "../Title/Heading/Heading"
import './index.css'


const ProductBlock__HotSale = ({product}) => {
  const [showDescription,setshowDescription]= useState(false)

  const [productSell,setproductSell]=useState(2)

  const randomOrg=()=>{
    const randomInt = Math.floor(Math.random() * 100) + 1;
    return randomInt
  }

  

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const ProductBlock = document.getElementById(product._id);
    if (!ProductBlock) return; // Kiểm tra nếu phần tử không tồn tại

    const ProductBlockImg = ProductBlock.querySelector('img');
    if (!ProductBlockImg) return; // Kiểm tra nếu không tìm thấy thẻ img

    const handleMouseOver = () => {
        setshowDescription(true)
    };

    const handleMouseOut = () =>{
      setshowDescription(false)
    }

    ProductBlockImg.addEventListener('mouseover', handleMouseOver);
    ProductBlockImg.addEventListener('mouseleave',handleMouseOut)
   
}, [showDescription]); // Chỉ chạy lại khi `showDescription` thay đổi


  return (
    <div id={`${product._id}`} className="ProductBlock flex flex-col items-center  gap-2 rounded-lg px-1 pb-3 relative">
      {showDescription==true ?
      <div className="DescriptionBlock  absolute z-99 right-2 top-3 ">
        <div className="left-content flex  gap-1 justify-center items-center rounded-lg animate-bounce text-sm primary-bg text-white text-lexend px-1 py-1">
        <p className="">{randomOrg()}</p>
      <p>Đã Bán</p>
      </div>  
      </div>: <></>}
      <div className="hide">
        <img src={product.imageUrl} className="w-[120px] mt-4"/>
      </div>
      <Heading title={product.productName} textColor={"text-blue"} otherEmphasis={"w-[150px] text-center "}/>
    </div>
  )
}



export default ProductBlock__HotSale