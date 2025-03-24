

import { useContext, useEffect, useState } from "react"

import ProductBlock__Main from "../../../Components/Block/ProductBlock__Main"
import Thirdly_Button from "../../../Components/Buttons/Thirdly_Button/Thirdly_Button"
import CustomContainer from "../../../Components/Container/Container"

import DisplayContainer from "../../../Components/Container/DisplayContainer"
import Heading from "../../../Components/Title/Heading/Heading"
import { ClientContext } from "../../../Context/clientContex"
import Spinner from "../../../Components/spinner/spinner"
import Pagination from "../../../Components/Pagination/Pagination";


const Client_ShopScreen = () => {
  const {productList}=useContext(ClientContext)
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPost,setCurrentPost]=useState();
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(()=>{
      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
    
      if(productList){
        setCurrentPost(productList.slice(firstPostIndex, lastPostIndex))
      }
  },[productList,currentPage])
  
  
  return (
    <div className="Client_HomeScreen-wrapper">
        <CustomContainer padding={"px-[100px] py-10"} justify={true} align={true}>
           <CustomContainer otherStyle={"w-full"} gap={"gap-10"}>
            <form className="FilterBox w-1/3">
              <Heading title={"Khoảng giá"} textSize={"text-2xl"} textColor={"text-blue"} otherEmphasis={"font-semibold"}/>
              <DisplayContainer padding={"py-2"} gap={"gap-2"} >
                <input type="number" placeholder="0" className=" border-2 px-2 py-2 text-lexend rounded-lg"/>
                <input type="number" placeholder="Giá cao nhất" className=" border-2 px-2 py-2 text-lexend rounded-lg"/>
              </DisplayContainer>

              <Heading title={"Sắp xếp theo"} textSize={"text-2xl"} textColor={"text-blue"} otherEmphasis={"mt-4 font-semibold mb-3"}/>              
              <select className="sort text-lexend w-full px-2 py-2 border-2 mb-3 rounded-lg">
                <option value={`name`}>Tên sản phẩm a-z</option>
                <option value={`highest`}>Giá cao đến thấp</option>
                <option value={`lowest`}>Giá thấp đến cao</option>
              </select>


              <Thirdly_Button 
              text={"Lọc"}
              bgColor={"primary-bg"} 
              color={"text-white"}
              rounded={"rounded-lg"}
              padding={"px-2 py-2"}
              otherStyle={"w-full mt-3 font-semibold "}
              />

              <div className="flex mt-5">
             
            

              </div>


            </form>


            <div className="ShopScreen_content w-2/3">
               <DisplayContainer gap={"gap-3"} otherStyles={"mb-5 flex-wrap"}>
                 {!currentPost?<div><Spinner/></div>:
                  currentPost.map((product,index)=>(
                    <ProductBlock__Main product={product} key={index} version={1}/>
                  ))
                 }

               </DisplayContainer>
              
            </div>
           </CustomContainer>
        </CustomContainer>
    </div>
  )
}

export default Client_ShopScreen