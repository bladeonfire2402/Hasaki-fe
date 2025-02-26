

import { ProductData } from "../../../assets/data/ProductData"
import ProductBlock__Main from "../../../Components/Block/ProductBlock__Main"
import Thirdly_Button from "../../../Components/Buttons/Thirdly_Button/Thirdly_Button"
import CustomContainer from "../../../Components/Container/Container"

import DisplayContainer from "../../../Components/Container/DisplayContainer"
import Heading from "../../../Components/Title/Heading/Heading"


const Client_ShopScreen = () => {
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
            </form>


            <div className="ShopScreen_content w-2/3">
               <DisplayContainer gap={"gap-3"} otherStyles={"mb-5"}>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
               </DisplayContainer>
               <DisplayContainer gap={"gap-3"}>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
                <ProductBlock__Main product={ProductData[0]} version={1}/>
               </DisplayContainer>
            
            
            </div>
           </CustomContainer>
        </CustomContainer>
    </div>
  )
}

export default Client_ShopScreen