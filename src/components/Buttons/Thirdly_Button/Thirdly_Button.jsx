import { CustomButtonPropTypes } from "../../../props/UIcompoType"


// eslint-disable-next-line react/prop-types
const Thirdly_Button = ({text,onClickfun,otherStyle,padding,rounded,bgColor,color }) => {
  return (
    <button 
    onClick={onClickfun}
    className={`btn text-lexend  uppercase ${bgColor}   ${rounded} ${otherStyle} ${padding} ${color}  `} >
        {text}
    </button>
  )
}

Thirdly_Button.PropTypes=CustomButtonPropTypes

export default Thirdly_Button