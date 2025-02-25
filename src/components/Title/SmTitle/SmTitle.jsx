import { useEffect, useState } from "react"
import { TitleText_PropTypes } from "../../../props/UIcompoType"


// eslint-disable-next-line react/prop-types
const SmTitle=({title,color, otherStyle})=>{
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
        <p className={`text-[10px]  text-lexend ${color} ${otherStyle} ${isBr==true ? "w-[80px] text-wrap" : ""}`}>{title}</p>
    )
}

SmTitle.propsType= TitleText_PropTypes

export default SmTitle