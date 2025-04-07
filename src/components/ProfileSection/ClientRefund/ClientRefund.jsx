import  { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import ReplayIcon from '@mui/icons-material/Replay';


const ClientRefund=()=>{
    const {userOrder,cancelOrder,reqRefund,askForRefund}=useContext(ClientContext)
    const [deliveredOrder,setdeliveredOrder]=useState([])
    const [refundOrder,setRefundOrder]=useState()
    const [reason,setReason]=useState('')
    

    console.log(reqRefund)
    
    useEffect(()=>{
        console.log(reqRefund)
    },[reqRefund])

    useEffect(()=>{
        if(userOrder){
            setdeliveredOrder(userOrder.filter(order=>order.orderStatus==="Delivered"))
        }
    },[])

    useEffect(()=>{
        if(deliveredOrder){
            setRefundOrder(deliveredOrder[0])
         
        }
    },[deliveredOrder,refundOrder])



    return(
        <div className='rounded-md green-bg  px-4 py-4 text-white'>
            {deliveredOrder ?
            <div>
                 <div className='flex items-center justify-center gap-2 '>
                    <ReplayIcon fontSize='large'/>
                    <h1 className=" text-primary text-2xl font-semibold">Đổi trả sản phẩm</h1>
                </div>
                <div className='flex gap-3'>
                    <div className='w-1/3'>
                       <div className='text-primary text-xl font-semibold mt-2 mb-2'>Đơn hàng có thể đổi trả</div>
                       <div className='flex flex-col gap-2 text-sm'>
                        {deliveredOrder.map((order,index)=>(
                            <div className='rounded-md px-2 py-2 bg-white flex gap-2 cursor-pointer '
                            onClick={()=>{setRefundOrder(order)}}
                            key={index}>
                                <img
                                className='w-[100px]' 
                                src='https://img.freepik.com/free-photo/cardboard-box-with-cargo-checklist-pencil_107791-16644.jpg?ga=GA1.1.1620027113.1741853030&semt=ais_hybrid'/>
                                <div className='text-red-500'>
                                    <div><b>Mã đơn hàng </b> {order._id}</div>
                                    <div><b>Trạng thái </b><br/> {order.orderStatus}</div>
                                </div>
                            </div>
                        ))}
                       </div>

                       <div>
                        <div className='text-primary text-xl font-semibold mt-2 mb-2'>Các yêu cầu đổi trả</div>
                         {!reqRefund?"":
                         <div>
                            {reqRefund.map((request,index)=>(
                                <div key={index} className='bg-white text-black px-2 py-2 rounded-md'>
                                    <img
                                    className='w-[100px] rounded-md' 
                                    src='https://img.freepik.com/free-vector/cashback-concept-with-light-sign_23-2148464383.jpg?ga=GA1.1.1620027113.1741853030&semt=ais_hybrid&w=740'/>
                                    <h1 className='font-semibold text-blue-500'>Mã đơn hàng</h1>
                                    <h1>{request.orderId}</h1>
                                    <h1 className='font-semibold text-blue-500'>Lí do</h1>
                                    <h1>{request.reason}</h1>
                                    <h1 className='font-semibold text-blue-500'>Trạng thái</h1>
                                    <h1>{request.status}</h1>

                                    <h1 className='font-semibold text-blue-500'>Admin FeedBack</h1>
                                    <h1>{request.feedBack}</h1>
                                </div>
                            ))}
                         </div>
                         }
                       </div>
                    
                    </div>
                    <div className='w-2/3 bg-white rounded-md  text-red-500 px-2 py-2 mt-5'>
                      {refundOrder?<div>
                        <h1 className='text-xl font-semibold text-center'>Form yêu cầu đổi trả</h1>
                        <h2 className='font-semibold text-lg text-black'>Mã đơn hàng</h2>
                        <h2 className='font-semibold '>{refundOrder._id}</h2>
                        <h2 className='font-semibold text-lg text-black'>Mã khách hàng</h2>
                        <h2 className='font-semibold '>{refundOrder.user._id}</h2>
                        <h2 className='font-semibold text-lg'>Lí do đổi trả</h2>

                        <textarea
                         value={reason}
                         onChange={(e)=>{setReason(e.target.value)}}
                         type='text' className='px-2 py-2 rounded-md h-[100px] w-full bg-red-200' placeholder='' required/>
                        <button type='submit' className='px-2 py-2 primary-bg text-white  rounded-md' onClick={()=>{askForRefund(
                            refundOrder._id,
                            refundOrder.user._id,
                            reason
                        )}}>Gửi yêu cầu</button>
                      </div>:<div></div>}
                     
                    </div>
                </div>
            </div>
            :<div>loading ...</div>}

        </div>
    )

}

export default ClientRefund