import { Heading_PropTypes } from "../../../props/UIcompoType"


// eslint-disable-next-line react/prop-types
const Heading = ({title, textSize, textColor, otherEmphasis}) => {
  return (
    <h3
    className={`${textSize} ${textColor} ${otherEmphasis} text-lexend`}
    >{title}
    </h3>
  )
}

Heading.propsType= Heading_PropTypes


export default Heading