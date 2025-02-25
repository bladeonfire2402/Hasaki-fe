
import { Container_PropTypes } from "../../props/UIcompoType"

// eslint-disable-next-line react/prop-types
const CustomContainer = ({align,justify,children,bgColor,flexType,gap,padding, otherStyle})=>{
    return(
        <div className={`
        flex ${padding} ${otherStyle} ${flexType}  ${gap}  ${bgColor}  ${align==true ? "items-center" :""} ${justify==true ? "justify-center" :""}`
        }>
            {children}
        </div>
    )
}

CustomContainer.propsType = Container_PropTypes

export default CustomContainer