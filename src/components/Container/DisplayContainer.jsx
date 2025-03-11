import { Container_PropTypes } from "../../props/UIcompoType"

// eslint-disable-next-line react/prop-types
const DisplayContainer = ({children, padding,gap, otherStyles})=>{
    return<div className={`flex ${padding} ${gap} ${otherStyles}`}>
        {children}
    </div>
}

DisplayContainer.propsType=Container_PropTypes

export default DisplayContainer