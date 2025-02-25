import { Container_PropTypes } from "../../props/UIcompoType"

// eslint-disable-next-line react/prop-types
const DisplayContainer = ({children, padding, otherStyles})=>{
    return<div className={`flex justify-between ${padding} ${otherStyles}`}>
        {children}
    </div>
}

DisplayContainer.propsType=Container_PropTypes

export default DisplayContainer