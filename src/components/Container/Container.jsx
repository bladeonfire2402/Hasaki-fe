
import { Container_PropTypes } from "../../props/UIcompoType"

// eslint-disable-next-line react/prop-types
const CustomContainer = ({align,justify,children,bgColor,flexType,gap})=>{
    return(
        <div className={`
        flex px-[100px] ${flexType}  ${gap}  ${bgColor} py-7  ${align==true ? "items-center" :""} ${justify==true ? "justify-center" :""}`
        }>
            {children}
        </div>
    )
}

CustomContainer.propsType = Container_PropTypes

export default CustomContainer