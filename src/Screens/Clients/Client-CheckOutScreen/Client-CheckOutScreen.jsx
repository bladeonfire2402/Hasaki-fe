import  {  useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import CartItemBlock from '../../../Components/Block/CartItemBlock'
import { useNavigate } from "react-router";
import Spinner from '../../../Components/spinner/spinner';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import ApprovePaymentPopsup from '../../../Components/Pops up/approvePopsUp';

const Cli_CheckOutScreen = () => {
  const [Cart,setCart]=useState()
  const [cartPrices,setcartPrices]=useState(0)
  const [totalPrice,settotalPrice]=useState(0)
  const {cart,user}=useContext(ClientContext)
  const [loading,setLoading]=useState(false)
  const [address,setAddress]=useState('')
  const [checkoutMomo,setcheckoutMomo]=useState(false)
  const [checkoutCod,setcheckoutCod]=useState(false)

  const navigate=useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(!loading)
    },1000)
  },[])
  
  useEffect(()=>{
    if(Cart){
        const orderItems = Cart.map(item => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price // Lấy giá tại thời điểm checkout
      }));

      const itemsPrice = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setcartPrices(itemsPrice)
      settotalPrice(itemsPrice+20000)
      
    }
  },[Cart])

  useEffect(()=>{
    if(cart!=undefined && cart.cart!==undefined){
       setCart(cart.cart)
    }
  },[cart])

  return (
    <div>
      {loading==false?<div className='max-w-5xl mx-auto p-6 rounded-md h-[500px] my-10 text-lexend flex justify-center items-center'><Spinner/></div>
      :
      <div className="max-w-5xl mx-auto p-6 rounded-md bg-gray-200 my-10 text-lexend relative">
        <div className='flex  gap-2 justify-center text-orange'>
            <PointOfSaleIcon fontSize='large'/>
            <h1 className="text-3xl font-bold text-center mb-6 uppercase text-orange">Thanh toán</h1>
        </div>
        {!checkoutCod?""
        :
        <div className='absolute w-full h-full top-[5px]'>
            <ApprovePaymentPopsup userId={user._id} userAddrees={address} method={"COd"} close={checkoutCod} setClose={setcheckoutCod}/>
        </div>
        }
        {!checkoutMomo?""
        :
        <div className='absolute w-full h-full top-[5px]'>
            <ApprovePaymentPopsup userId={user._id} userAddrees={address} method={"MOMO"} close={checkoutMomo} setClose={setcheckoutMomo}/>
        </div>
        }

      { !Cart ?(
        <p className="text-center text-lg">Lấy dữ liệu...</p>
      ) : (
        <div className='flex justify-between gap-4'>
            <div className='userinfo w-2/5'>
                {!user?"dd"
                :
                <div className='flex px-3 py-3 text-white flex-col rounded rounded-md primary-bg'>
                    <div className='flex gap-2 items-center'>
                        <AccountCircleIcon/>
                        <h1 className='text-xl font-semibold text-center '>Thông tin khách hàng</h1>
                    </div>
                    <h1 className='mt-2'><b>Họ tên:</b> {user.fullname}</h1>
                    <h1 className='mt-1'><b>Email:</b> {user.email}</h1>
                    <h1 className='mt-1'><b>Số điện thoại:</b> {user.phone}</h1>
                    <h1 className='mt-1'><b>Địa chỉ giao hàng</b></h1>
                    <input className='rounded mt-1 text-black px-2 py-2 h-[60px]' 
                    required
                    value={address}
                    onChange={(e)=>{setAddress(e.target.value)}}
                    />
                </div>
                }
            </div>
            <div className=" flex flex-col gap-2 ">
            {Cart.map((cartItem,index)=>(
                <CartItemBlock key={index} cartItem={cartItem}/>
            ))}
            </div>
        </div>
      )}
      {Cart==0?<div className='flex flex-col items-center justify-center gap-2'>
        <img className='rounded-full w-[300px] h-[200px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPfN8ErmzvyyqRZsNVAIu88BZU0lRHNVeYWw&s'/>
        <div className='flex gap-1 text-xl text-orange mt-2'>
          <h1 className=''>Chưa có sản phẩm ,</h1>
          <h1 className='font-semibold hover:text-blue-500 cursor-pointer' onClick={()=>{navigate("/")}}>Mua sắm ngay !</h1>
        </div>
      </div>:""}

      <div className="mt-6 p-4 bg-gray-200 rounded-lg primary-bg">
        <div className="flex justify-between text-xl font-semibold text-white">
          <span>Tiền sản phẩm:</span>
          <span> {cartPrices} VNĐ</span>
        </div>
        <div className="flex justify-between text-xl font-semibold text-white">
          <span>Tiền ship:</span>
          <span> 20000 VNĐ</span>
        </div>
        <div className="flex justify-between text-xl font-semibold text-white">
          <span>Tổng cộng:</span>
          <span> {totalPrice} VNĐ</span>
        </div>
        <div className='flex items-center gap-3'>
            <button 
            className="w-full mt-4 py-2 bg-white text-black rounded-md hover:bg-blue-500 uppercase text-xl font-semibold hover:text-white"
            onClick={()=>{setcheckoutMomo(!checkoutMomo)}}
            >
             Momo
            </button>
            <button className="w-full mt-4 py-2 bg-white text-black rounded-md hover:bg-blue-500 uppercase text-xl font-semibold hover:text-white"
            onClick={()=>{setcheckoutCod(!checkoutCod)}}
            >
             Trực tiếp
            </button>
        </div>
        
      </div>
    </div>
      }
    </div>
    
  )
}

export default Cli_CheckOutScreen
