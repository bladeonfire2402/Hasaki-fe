
import DisplayContainer from "../../Container/DisplayContainer"
import ProductBlock__HotSale from "../../Block/ProductBlock__HotSale"
import Heading from "../../Title/Heading/Heading"
import { useContext, useEffect, useState } from "react"
import { ClientContext } from "../../../Context/clientContex"


const HotSaleSection = () => {
  const {productList,getTopViews}=useContext(ClientContext)

  const [topViewProduct,settopViewProduct]=useState()

  useEffect(()=>{
    const views =  getTopViews().then((res)=>{
      settopViewProduct(res.topViews)
      console.log(res)
    })  
  },[])
  
  return (
    <div className="HotSaleSection-wrapper">
        <Heading 
        title={"Sản phẩm hot nhất"}
        textColor={"text-blue"} 
        textSize={"text-3xl"}
        otherEmphasis={"font-bold mb-1"}
        />
        {
        !topViewProduct
        ?
        <div></div>
        :
          <DisplayContainer padding={"py-7"} otherStyles={"gap-5"}>
            {topViewProduct.map((topViewProduct,index)=>(
              <ProductBlock__HotSale product={topViewProduct.product} view={topViewProduct.views} key={index}/>
              
            ))}
          </DisplayContainer>
        }

    </div>
  )
}

export default HotSaleSection