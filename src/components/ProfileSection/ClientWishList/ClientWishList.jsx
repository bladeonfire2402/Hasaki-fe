import  { useContext, useEffect } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import Spinner from '../../spinner/spinner'
import { Favorite } from '@mui/icons-material'

const ClientWishList = () => {
  const {wishlist,removeFromWishList,user}=useContext(ClientContext)

  useEffect(()=>{
    if(wishlist){
        console.log(wishlist)
    }
  },[wishlist])
  
  return (
    <div>
        {wishlist?
        <div className='rounded-md green-bg  px-4 py-4 text-white'>
            <div className='flex items-center gap-2 justify-center'>
                <Favorite/>
                <h1 className=" text-primary text-2xl font-semibold">Danh sách sản phẩm yêu thích</h1>
            </div>
            {wishlist==0?<div>Chưa yêu thích sản phẩm nào</div>:<div></div>}
            
            {wishlist.map((wish)=>(
                <div className='mt-2 flex gap-4 px-3 py-3 rounded-md border-2  ' key={wish._id} >
                    <img src={wish.imageUrl} className='w-[150px]  rounded-md  '/>
                    {console.log(wish)}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-md'>Tên Sản Phẩm: {wish.productName}</h1>
                        <h1 className='text-md'>Giá Sản Phẩm: {wish.price} VND</h1>
                        <div className='flex gap-2'>
                            <button className='px-3 rounded-md bg-blue-500 py-2 hover:bg-blue-700' >Mua ngay</button>
                            <button className='px-3 rounded-md bg-red-500 py-2 hover:bg-gray-700' onClick={()=>{removeFromWishList(user._id,wish._id)}}>Xóa khỏi danh sách</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
        :<Spinner/>}

    </div>
  )
}

export default ClientWishList