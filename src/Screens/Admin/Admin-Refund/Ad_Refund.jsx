import { useContext, useEffect, useState } from "react"
import { adminContext } from "../../../Context/adminContext"
import Spinner from "../../../Components/spinner/spinner"
import UpdateIcon from '@mui/icons-material/Update';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import InfoIcon from '@mui/icons-material/Info';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import UpdateOrderForm from "../../../Components/form/UpdateOrderForm/updateOrderForm";

const Ad_Refund = () => {
  const {orderList,refundList,handleRefund} = useContext(adminContext) // List sản phẩm
  const [update,setUpdate]=useState(false)
  const [curOrder,setCurOder]=useState()

  console.log(refundList)


  
  const handleUpdateOrder  = (order) =>{
    setCurOder(order);
    setUpdate(!update);

  }

  
  return (
    <div className="Ad_Product-wrapper  relative">
        <div className="flex items-center justify-center  px-3 py-5 gap-2 text-blue">
          <LocalMallIcon fontSize="large"/>
          <h1 className="text-lexend text-3xl font-bold">Quản lý đổi trả</h1>
        </div>
       
        {update==false?<></>:<div className="w-full h-full  absolute top-0  bg-gray-200 ">
          <UpdateOrderForm order={curOrder}  setUpdate={setUpdate} update={update}/></div>}
        {!refundList?
            <div className="loading"><Spinner/></div>
            :       
            <div className="Ad_Product-Result rounded-md overflow-hidden my-3 mx-3">
            <div className="grid grid-cols-6 items-cente bg-black text-white text-lexend  px-5 py-2">
                <h2 className="w-[100px]">STT</h2>
                <h2>Mã đơn hàng</h2>
                <h2>Mã khách hàng</h2>
                <h2>Lí do đổi trả</h2>
                <h2>Trạng thái</h2>
                <h2>Thao tác</h2>
            </div>

            {refundList.map((refund,index)=>(
                <div key={refund._id} className="grid grid-cols-6 text-black text-lexend border-2 px-5 py-5">
                  <h2>{index+1}</h2>
                 <h2 className="break-words">{refund.orderId}</h2>
                 <h2 className="break-words">{refund.user}</h2>
                 <h2>{refund.reason}</h2>  
                 <h2 className="break-words">{refund.status}</h2>
                 <div className="flex gap-2 ml-2 ">
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-blue-500"
                  onClick={()=>{handleRefund("approve",refund._id,refund.orderId,refund.user,"Ok sản phẩm sẽ được hoàn tiền nhá")}}
                  ><CheckCircleIcon style={{ color: 'white', fontSize: 20 }} /></div>   
                  <div className="flex justify-center items-center py-2  h-fit rounded-md px-2 bg-red-500" onClick={()=>{
                    handleRefund("disaprove",refund._id,refund.orderId,refund.user,"Không nha bạn ơi")
                  }}>
                    <ThumbDownAltIcon style={{ color: 'white', fontSize: 20 }}/></div>                                     
                </div>
                </div>
            ))}
            </div>
        }

    </div>
  )
}

export default Ad_Refund