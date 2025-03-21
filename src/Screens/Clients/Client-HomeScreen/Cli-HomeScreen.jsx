import { useContext } from "react"
import Banner from "../../../Components/Banner/Banner"
import CustomContainer from "../../../Components/Container/Container"
import CategorySection from "../../../Components/HomeScreenCompo/CategorySection/CategorySection"
import HotSaleSection from "../../../Components/HomeScreenCompo/HotSaleSection/HotSaleSection"
import SuggestionSection from "../../../Components/HomeScreenCompo/SuggestionSection/SuggestionSection"
import { ClientContext } from "../../../Context/clientContex"


const Client_HomeScreen = ()=>{
    const {productList}=useContext(ClientContext)

    return(
        <div className="Client_HomeScreen">
           <div className="flex ">
            <Banner/>
           </div>
            <CustomContainer justify={true} padding={"px-[100px]"}>
              <div className="w-full">
                <HotSaleSection/>
                <CategorySection/>                
              </div>
            </CustomContainer>
            <CustomContainer justify={true} otherStyle={""}>
              <SuggestionSection productList={productList}/>
            </CustomContainer>
        </div>
    )

}
export default Client_HomeScreen