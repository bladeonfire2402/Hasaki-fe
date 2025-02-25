import { SecondaryButtonPropTypes } from '../../../props/UIcompoType';
import '../buttonstyle.css'; 


// eslint-disable-next-line react/prop-types
const SecondaryButton=({text,onClickfun,otherStyle,padding,rounded })=>{
    return <button className={`btn secondary text-lexend  uppercase   ${rounded} ${otherStyle} ${padding} `} onClick={onClickfun}>
       {text}
    </button>
}

SecondaryButton.PropTypes=SecondaryButtonPropTypes

export default SecondaryButton

