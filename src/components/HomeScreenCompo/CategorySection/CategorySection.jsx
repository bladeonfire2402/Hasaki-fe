import { CategoryList } from "../../../assets/data/ProductData"
import CategoryBlock from "../../Block/CategoryBlock"
import DisplayContainer from "../../Container/DisplayContainer"
import Heading from "../../Title/Heading/Heading"


const CategorySection = () => {
   


   return (
    <div className="CategorySection-wrapper  py-5">
        <Heading 
        title={"Danh mục nổi bật"}
        textColor={"text-blue"} 
        textSize={"text-3xl"}
        otherEmphasis={"font-bold mb-1"}
        />

        <DisplayContainer padding={"py-7"}>
            {CategoryList.map((category)=>(
                <CategoryBlock category={category} key={category}/>
            ))}

        </DisplayContainer>
        
    </div>
  )
}

export default CategorySection