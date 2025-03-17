
import DisplayContainer from "../../Container/DisplayContainer"
import ProductBlock__HotSale from "../../Block/ProductBlock__HotSale"
import Heading from "../../Title/Heading/Heading"
import { useContext } from "react"
import { ClientContext } from "../../../Context/clientContex"


const HotSaleSection = () => {
  const {productList}=useContext(ClientContext)
  
  return (
    <div className="HotSaleSection-wrapper">
        <Heading 
        title={"Bán chạy"}
        textColor={"text-blue"} 
        textSize={"text-3xl"}
        otherEmphasis={"font-bold mb-1"}
        />
        {
          !productList?<div></div>:
        <DisplayContainer padding={"py-7"} otherStyles={"gap-5"}>
          {productList.slice(0,8).map((product)=>(
            <ProductBlock__HotSale product={product} key={product.id}/>
          ))}
        </DisplayContainer>
        }

    </div>
  )
}

export default HotSaleSection