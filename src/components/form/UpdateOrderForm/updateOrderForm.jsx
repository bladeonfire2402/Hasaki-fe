import { useContext, useState } from 'react';
import axios from 'axios';
import { adminContext } from '../../../Context/adminContext';
import Spinner from '../../spinner/spinner';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const UpdateOrderForm = ({ order,setUpdate,update}) => {
  const { reload,setReload } = useContext(adminContext);
  const orderStatus = ["Pending", "Approved","Processing","Shipped","Delivered","Cancelled"];

  console.log(order)

  const handleButtonStatus=(status,order)=>{
    if(order.orderStatus==="Delivered" || order.orderStatus==="Cancelled" ){
        if(status=="Delivered" || status=="Cancelled"){
            return <button className='cursor-not-allowed bg-gray-500 text-white px-2 py-2'>{status}</button>
        }
        else{
            return <button className={`px-2 py-2 rounded-md hover:bg-red-300
            ${status=="Pending" ?"bg-blue-500 text-white":""}
            ${status=="Approved" ?"bg-green-500 text-white":""}
            ${status=="Processing" ?"bg-yellow-700 text-white":""}
            ${status=="Shipped" ?"bg-purple-500 text-white":""}
            `}
            onClick={()=>{updateorder(status)}}
            >
                {status}
            </button>
        }
    }
    else{
        return <button className={`px-2 py-2 rounded-md hover:bg-red-300
        ${status=="Pending" ?"bg-blue-500 text-white":""}
        ${status=="Approved" ?"bg-green-500 text-white":""}
        ${status=="Processing" ?"bg-yellow-700 text-white":""}
        ${status=="Shipped" ?"bg-purple-500 text-white":""}
         ${status=="Delivered" ?"bg-yellow-500 text-white":""}
        ${status=="Cancelled" ?"bg-red-500 text-white":""}
        `}
        onClick={()=>{updateorder(status)}}
        >
            {status}
        </button>
    }
  }

  


  const updateorder = async (status) => {
    try {
      const updateUrl = import.meta.env.VITE_API_ENDPOINT_UPDATEORDERSTATUS;
      const response = await axios.put(updateUrl, {
        orderId:order._id,
        orderStatus: status, 
      });
      console.log('order updated successfully:', response.data);
      toast.success("Đã thay đổi trạng thái đơn hàng thành công");
      setReload(!reload)

    } catch (error) {
      console.error('Error creating order:', error);
      toast.error("Lỗi update đơn hàng");
    }
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Thay đổi trạng thái đơn hàng: <b className='text-red-500'>{order._id || ""}</b>
      </h2>

      {/* Kiểm tra nếu categoryList có dữ liệu */}
      {!order ? (
        <Spinner />
      ) : (
        <div className='flex flex-col justify-between text-lexend'>
         
         <div className='flex gap-2'>
            <div className='w-1/2'>
                <h1>Cập nhập trạng thái</h1>
                <div className='flex gap-2 py-2 flex-wrap'>
                    {orderStatus.map((status)=>(
                       handleButtonStatus(status,order)
                    ))}
                </div>
            </div>
            <div className=''>
             <h1>Thông tin đơn</h1>
             <h2>Địa chỉ nhận hàng: {order.address}</h2>
             <h2>Tên người nhận: {order.user.fullname}</h2>
             <h2>Trạng thái đơn hàng: {order.orderStatus}</h2>
             <h2>Phương thức thanh toán: {order.paymentMethod}</h2>
             <h2>Trạng thái thanh toán: {order.paymentStatus}</h2>


            </div>
         </div>
            <button className='w-full mt-5 py-2 px-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-900'
            onClick={()=>{setUpdate(!update)}}
            >
                Quay về
            </button>
    

          
        </div>
      )}
    </div>
  );
};

export default UpdateOrderForm;
