import { useContext } from "react"

import CategoryBlock from "../../Block/CategoryBlock"
import DisplayContainer from "../../Container/DisplayContainer"
import Heading from "../../Title/Heading/Heading"
import { ClientContext } from "../../../Context/clientContex"


const CategorySection = () => {
    const {categoryList}=useContext(ClientContext)
   

    console.log(categoryList)


   return (
    <div className="CategorySection-wrapper  py-5">
        <Heading 
        title={"Danh mục nổi bật"}
        textColor={"text-blue"} 
        textSize={"text-3xl"}
        otherEmphasis={"font-bold mb-1"}
        />
        {
            !categoryList ?<div></div>:
            <DisplayContainer padding={"py-7"} otherStyles={"justify-between"}>
            {categoryList.map((category)=>(
                <CategoryBlock category={category} key={category._id} />
            ))}

        </DisplayContainer>
        }
    </div>
  )
}

export default CategorySection