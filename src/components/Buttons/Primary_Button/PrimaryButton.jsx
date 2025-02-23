import { PrimaryButtonPropTypes } from '../../../props/UIcompoType';
import '../buttonstyle.css'; 


// eslint-disable-next-line react/prop-types
const PrimaryButton=({text,onClickfun})=>{
    return <button className="btn primary text-gilroy text-lg uppercase px-5 py-2 w-[320px] rounded-md zoom-effect" onClick={onClickfun}>
       {text}
    </button>
}

PrimaryButton.PropTypes=PrimaryButtonPropTypes

export default PrimaryButton

