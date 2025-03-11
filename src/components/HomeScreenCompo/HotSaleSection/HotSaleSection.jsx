import { ProductData } from "../../../assets/data/ProductData"
import DisplayContainer from "../../Container/DisplayContainer"
import ProductBlock__HotSale from "../../Block/ProductBlock__HotSale"
import Heading from "../../Title/Heading/Heading"


const HotSaleSection = () => {
  return (
    <div className="HotSaleSection-wrapper">
        <Heading 
        title={"Bán chạy"}
        textColor={"text-blue"} 
        textSize={"text-3xl"}
        otherEmphasis={"font-bold mb-1"}
        />
        <DisplayContainer padding={"py-7"} otherStyles={"justify-between"}>
          {ProductData.map((product)=>(
            <ProductBlock__HotSale product={product} key={product.id}/>
          ))}
        </DisplayContainer>

    </div>
  )
}

export default HotSaleSection