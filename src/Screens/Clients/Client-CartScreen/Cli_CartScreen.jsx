import  { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import CartItemBlock from '../../../Components/Block/CartItemBlock'
import { useNavigate } from "react-router";
import Spinner from '../../../Components/spinner/spinner';

const Cli_CartScreen = () => {
  const [Cart,setCart]=useState()
  const [cartPrices,setcartPrices]=useState(0)
  const [loading,setLoading]=useState(false)
  const {cart}=useContext(ClientContext)

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
    }
  },[Cart])

  useEffect(()=>{
    if(cart!=undefined && cart.cart!==undefined){
       setCart(cart.cart)
    }
  },[cart])

  return (
    <div>
      {loading==false?<div className='max-w-4xl mx-auto p-6 rounded-md h-[500px] my-10 text-lexend flex justify-center items-center'><Spinner/></div>:
      <div className="max-w-4xl mx-auto p-6 rounded-md bg-gray-200 my-10 text-lexend">
        <h1 className="text-3xl font-bold text-center mb-6 uppercase text-orange">Giỏ hàng</h1>

        { !Cart ?(
          <p className="text-center text-lg">Lấy dữ liệu...</p>
        ) : (
          <div className=" flex flex-col gap-2 ">
            {Cart.map((cartItem,index)=>(
              <CartItemBlock key={index} cartItem={cartItem}/>
            ))}
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
            <span>Tổng cộng:</span>
            <span> {cartPrices} VNĐ</span>
          </div>
          <button 
          className="w-full mt-4 py-2 bg-white text-black rounded-md hover:bg-blue-500 uppercase text-xl font-semibold hover:text-white"
          onClick={()=>{navigate('/checkout')}}
          >
            Thanh toán
          </button>
        </div>
      </div>
      }
    </div>
  )
}

export default Cli_CartScreen
