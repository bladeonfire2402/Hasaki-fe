import { ImageFragment } from "../../../assets/data/ImgData"
import ProductBlock__Main from "../../Block/ProductBlock__Main"
import DisplayContainer from "../../Container/DisplayContainer"
import Heading from "../../Title/Heading/Heading"
import './index.css'


// eslint-disable-next-line react/prop-types
const SuggestionSection = ({productList}) => {
  return (
    <div className="SuggestionSection-wrapper py-4 w-full ">
        <div className="flex justify-center items-center gap-1 py-3 ">
         <Heading title={"Sản Phẩm Được Đề Xuất"} textColor={"text-white"} textSize={"text-4xl"} otherEmphasis={"font-bold  mb-2"}/>
         <img className="w-[45px] -mt-[5px]   animate-bounce " src={ImageFragment.Star}/>
        </div>
    
        <DisplayContainer gap={"gap-5"} padding={"py-7 px-[100px]"} otherStyles={'flex-wrap justify-between  '}>
           {!productList?<div className="text-white"></div>:
             // eslint-disable-next-line react/prop-types
             productList.map((product)=>(
               <ProductBlock__Main product={product} key={product._id}/>
             ))
           }
         
        </DisplayContainer>
        <DisplayContainer gap={"gap-5"} padding={"py-7 px-[100px]"}>
           
        </DisplayContainer>
    </div>
  )
}

export default SuggestionSection