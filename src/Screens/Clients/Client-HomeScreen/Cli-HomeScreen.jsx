import Banner from "../../../Components/Banner/Banner"
import CustomContainer from "../../../Components/Container/Container"
import CategorySection from "../../../Components/HomeScreenCompo/CategorySection/CategorySection"
import HotSaleSection from "../../../Components/HomeScreenCompo/HotSaleSection/HotSaleSection"
import SuggestionSection from "../../../Components/HomeScreenCompo/SuggestionSection/SuggestionSection"

const Client_HomeScreen = ()=>{
    return(
        <div className="Client_HomeScreen">
            <CustomContainer justify={true} padding={"px-[100px]"}>
              <div className="w-full">
                <Banner/>
                <HotSaleSection/>

                <CategorySection/>                
              </div>
            </CustomContainer>
            <CustomContainer justify={true}>
              <SuggestionSection/>
            </CustomContainer>

        </div>
    )

}
export default Client_HomeScreen