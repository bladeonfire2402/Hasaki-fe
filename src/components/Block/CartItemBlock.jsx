
import { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../../Context/clientContex'
import { toast } from 'react-toastify'

// eslint-disable-next-line react/prop-types
const CartItemBlock = ({cartItem}) => {
    const {getCartItemUser,addToCart,user,removeOneFromCart} = useContext(ClientContext)
    const [cartitem,setcartitem]=useState('')
    const [reload,setReload]=useState(false)

    const handleAdd=(productId,userId)=>{
      addToCart(productId,userId)
      setTimeout(()=>{
        setReload(!reload)
      },500)
    }

    const handleRemove=(productId,userId)=>{
      removeOneFromCart(productId,userId)
      setTimeout(()=>{
        setReload(!reload)
      },500)
    }
    
   
    useEffect(()=>{
        if(cartItem){
            const cartcart = getCartItemUser(cartItem).then((response) => {
              setcartitem(response.cartItem)
             
              
            }).catch((err) => {
              toast.error("Lỗi :"+err.message)
            });

        }
    },[cartItem,reload])
   
  return (
     <div>
      {!cartitem?<div>
      </div>:
        <div className='rounded-md px-4 py-4 w-full flex primary-bg gap-3'>
          <img className='w-[140px] rounded-md' src={cartitem.product.imageUrl}/>
          <div className='text-white flex flex-col gap-2'>
            <div className='flex gap-2 items-center text-[18px]'>
              <h1 className='font-semibold'>Tên sản phẩm:</h1>
              <h1>{cartitem.product.productName}</h1>
            </div>
            <div className='flex gap-2 items-center'>
              <h1 className='font-semibold'>Giá tiền sản phẩm:</h1>
              <h1>{cartitem.product.price} VND</h1>
            </div>

            <div className='flex gap-2 items-center'>
              <h1 className='font-semibold'>Giá tiền cho {cartitem.quantity} sản phẩm:</h1>
              <h1>{cartitem.product.price * cartitem.quantity} VND</h1>
            </div>
            
            <div className='flex gap-2 items-center text-yellow-600 mt-2'>
              <button className='px-3 py-1 rounded-full bg-white hover:bg-blue-500 hover:text-white' onClick={()=>{ handleAdd(cartitem.product._id, user._id) }}>+</button>
              <div className='px-3 py-1 rounded-md bg-white'>{cartitem.quantity}</div>
              <button className='px-3 py-1 rounded-full bg-white hover:bg-blue-500 hover:text-white' onClick={()=>{handleRemove(cartitem.product._id, user._id)}}>-</button>
            </div>
          </div>
        </div>
      }
     </div>
  )
}

export default CartItemBlock