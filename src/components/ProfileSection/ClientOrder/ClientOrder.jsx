import  { useContext } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import { ShoppingBag } from '@mui/icons-material'


const ClientOrder = () => {
    const {userOrder,cancelOrder}=useContext(ClientContext)

    const handleOrderStatus = (orderStatus)=>{
        let orderState;
        switch(orderStatus){
            case "Pending":
                orderState="Chờ duyệt"
                break;
            case"Approved":
                orderState="Đã xác nhận"
                break;
            case "Processing":
                orderState="Đang xử lý"
                break;
            case"Shipped":
                orderState="Đang vận chuyển"
                break;
            case"Delivered":
                orderState="Đã vận chuyển"
                break;
            case "Cancelled":
                orderState="Đã hủy đơn hàng "
                break;
            case"Return":
                orderState="Đổi trả"
                break;
            default:
                break
        }
        return orderState

    }

    const handlePaymentStatus = (paymentStatus)=>{
        let paymentstate;
        switch(paymentStatus){
            case "Pending":
                paymentstate="Chờ thanh toán"
                break;
            case"Paid":
                paymentstate="Đã thanh toán"
                break;
            case"Failed":
                paymentstate="Thất bại"
                break;
            case"Refunded":
               paymentstate="Hoàn tiền"
               break;
            default:
                break
        }
        return paymentstate   
    }

    const handleProductQuantity=(cartItems)=>{
        const totalProduct = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        return totalProduct
    }

    const handleOrderStatusButton = (orderStatus,orderid)=>{
        if(orderStatus=="Pending"|| orderStatus=="Processing" || orderStatus=="Approved"){
            return(
                <div className='mt-2 flex gap-2'>
                    <button className='px-2 py-2 bg-red-500 text-white rounded-md hover:bg-gray-500'
                    onClick={()=>{cancelOrder(orderid)}}
                    >Hủy đơn</button>
                    <button className='px-2 py-2 bg-blue-500 text-white rounded-md hover:bg-gray-500'>Sửa đơn hàng</button>
                </div>
            )
        }
        else if(orderStatus=="Shipped" || orderStatus=="Cancelled" || orderStatus=="Return"){
            return(
                <div className='mt-2 flex gap-2'>
                 <button className='px-2 py-2 bg-gray-500 text-white rounded-md '>Đã hủy </button>
            </div>
            )
        }
        else if(orderStatus=="Delivered"){
            return(
                <div className='mt-2 '>
                    <button className='px-2 py-2 bg-yellow-500 text-white rounded-md hover:bg-gray-500'>Đổi trả</button>
                </div>
            )
        }
    }
  
    return(
        <div className="rounded-md green-bg  px-4 py-4 text-white">
            {!userOrder?"" 
            :
            <div>
                <div className='flex items-center justify-center gap-2 '>
                <ShoppingBag fontSize='large'/>
                <h1 className=" text-primary text-2xl font-semibold">Danh sách đơn hàng</h1>
            </div>
            {userOrder.length==0?<div>Chưa có đơn nào hàng BRUHHHH</div>:""}
            <hr className="mt-4 mb-2"/>
                <div className='flex flex-col gap-3 '>
                    {userOrder.map((order,index)=>(
                        <div key={index} className='flex gap-8 rounded-md bg-white px-2 py-2'>
                            <img
                            className='w-[120px]'  
                            src='https://img.freepik.com/free-photo/cardboard-box-with-cargo-checklist-pencil_107791-16644.jpg?ga=GA1.1.1620027113.1741853030&semt=ais_hybrid'/>
                            <div className='order-info text-black'>
                                <h1><b>Người nhận đơn hàng: </b>{order.user.fullname}</h1>
                                <h1><b>Địa chỉ nhận hàng: </b>{order.address}</h1>
                                <h1><b>Phương thức thanh toán: </b>{order.paymentMethod}</h1>
                                <h1><b>Tình trạng thanh toán: </b>{handlePaymentStatus(order.paymentStatus)}</h1>
                                <h1><b>Trạng thái đơn hàng: </b>{handleOrderStatus(order.orderStatus)}</h1>
                            </div>
                            <div className='text-black'>
                                <h1 className='text-red-500'><b>Tổng tiền: </b>{order.totalAmount} VND</h1>
                                <h1><b>Số loại sản phẩm: </b>{order.orderItems.length}</h1>
                                <h1><b>Số sản phẩm: </b>{handleProductQuantity(order.orderItems)}</h1>
                             
                               {handleOrderStatusButton(order.orderStatus,order._id)}

                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            }
        </div>
    )
}

export default ClientOrder