import { TitleText_PropTypes } from "../../../props/UIcompoType"


// eslint-disable-next-line react/prop-types
const LargetTitle=({title,color, otherStyle})=>{
    return(
        <h1 className={`text-3xl text-gilroy ${color} ${otherStyle}`}>{title}</h1>
    )
}

LargetTitle.propsType= TitleText_PropTypes

export default LargetTitle