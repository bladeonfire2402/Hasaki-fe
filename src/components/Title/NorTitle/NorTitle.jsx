import { useEffect, useState } from "react"
import { TitleText_PropTypes } from "../../../props/UIcompoType"


// eslint-disable-next-line react/prop-types
const NorTitle=({title,color, otherStyle})=>{
    const [isBr, setIsBr] = useState(false)

    const isBrList=["Hệ thống cửa hàng", "Hỗ trợ khách hàng"]

    useEffect(()=>{
        //Xuống dòng nếu có các title là các trường hợp trong mảng
        isBrList.forEach((item)=>{
            if(title==item){
                setIsBr(true)
            }
        })
     
        
    },[])

    return(
        <h4 className={`text-[13px]  text-lexend ${color} ${otherStyle} ${isBr==true ? "w-[80px] text-wrap" : ""}`}>{title}</h4>
    )
}

NorTitle.propsType= TitleText_PropTypes

export default NorTitle