import  { useContext, useState } from 'react'
import { ClientContext } from '../../../Context/clientContex'
import Spinner from '../../spinner/spinner'

import WalletIcon from '@mui/icons-material/Wallet';
import imgData from '../../../../public/assets/data/imgData';

const ClientWallet = () => {
  const {user,wallet,addFunsToWallet}=useContext(ClientContext)
  const [add,setAdd]=useState(false)
  const [chargePoint,setchargePoint]=useState(50000)

  

  //
  const handleTitle=(walletpoints)=>{
    if(walletpoints>100000 && walletpoints<500000){
        return(
            <div className='flex items-center'>
                 <img className='w-[70px]' src={imgData.newUser}/>
            </div>

        )
    }
    else if(walletpoints>=500000 && walletpoints < 1000000){
        return(
            <div className='flex items-center'>
                <img className='w-[70px]' src={imgData.newUser}/>
                <img className='w-[100px]' src={imgData.lunaxiPlay}/>
        
            </div>

        )
    }
    else if(walletpoints>=1000000){
        return(
            <div className='flex items-center '>
                <img className='w-[70px]' src={imgData.newUser}/>
                <img className='w-[100px]' src={imgData.lunaxiPlay}/>
                <img className='w-[70px]' src={imgData.kingofBuy}/>
        </div>


        )
    }
    else if(walletpoints==0){
        return(
            <div className=''>Chưa có danh hiệu  </div>
        )
    }

  }


  
  
  return (
    <div>
        {wallet?
        <div className='rounded-md lightGolden-bg  px-4 py-4 text-white'>
            <div className='flex items-center gap-2 justify-center'>
                <WalletIcon/>
                <h1 className=" text-primary text-2xl font-semibold">Ví Lunaxi</h1>
            </div>
            {wallet.chargeList.length==0?<div>Chưa yêu thích sản phẩm nào</div>:<div></div>}

            <div className='flex  mt-2 gap-3 '>
                <div className='w-1/3'>
                    <div className='bg-white rounded-md px-4 py-5 h-fit '>
                        <h1 className='text-yellow-500 font-semibold text-xl text-center mb-3'>Thông tin ví </h1>
                        {!user && !wallet?<div></div>:
                        <div className='text-yellow-500 flex flex-col gap-2'>
                        <h2>Chủ ví: {user.fullname}</h2>
                        <h2>Số điểm: <b>{wallet.points} Luna point</b></h2>
                        <h2 className='text-md font-semibold'>Danh hiệu</h2>
                        <div className='-mt-[5px]'>
                            {handleTitle(wallet.points)}
                        </div>
                        <div>
                            <button className='text-white font-semibold lightGolden-bg px-3 py-2 rounded-md ' onClick={()=>{setAdd(!add)}}>Nạp tiền</button>
                        </div>
                        </div>}
                    </div>
                    {!add?<div></div>:
                    <div className='bg-white mt-2 rounded-md px-3 py-4 text-black'>
                      <h1 className='font-semibold text-xl'>Nạp điểm Lunaxi</h1>
                        <div 
                        onClick={()=>{setchargePoint(50000)}}
                        className={`px-2 py-2 rounded-md border-2 mt-2 cursor-pointer ${chargePoint==50000?"lightGolden-bg text-white":""}`

                        }>50000 Điểm
                        </div>
                        <div 
                        onClick={()=>{setchargePoint(100000)}}
                        className={`px-2 py-2 rounded-md border-2 mt-2 cursor-pointer ${chargePoint==100000?"lightGolden-bg text-white":""}`

                        }>100000 Điểm
                        </div>
                        <div 
                        onClick={()=>{setchargePoint(500000)}}
                        className={`px-2 py-2 rounded-md border-2 mt-2 cursor-pointer ${chargePoint==500000?"lightGolden-bg text-white":""}`

                        }>500000 Điểm
                        </div>
                        <div 
                        onClick={()=>{setchargePoint(1000000)}}
                        className={`px-2 py-2 rounded-md border-2 mt-2 cursor-pointer ${chargePoint==1000000?"lightGolden-bg text-white":""}`

                        }>1000000 Điểm
                        </div>
                        
                        <button 
                        className='px-2 py-2 rounded-md text-white  bg-blue-500 hover:bg-green-500 mt-3 cursor-pointer'
                        onClick={()=>{addFunsToWallet(user._id,chargePoint)}}
                        >Thanh toán</button>

                        
                    </div>
                    }
                </div>
                <div className='bg-white text-black px-5 py-4 rounded-md w-2/3'>
                    <h1 className='text-xl font-semibold'>Lịch sử nạp tiền</h1>
                    {wallet.chargeList.map((wish)=>(
                        <div className=' flex gap-4 mt-2 px-3 py-3 rounded-md border-2  ' key={wish._id} >
                            <img src={imgData.charge} className='w-[150px]  rounded-md  '/>
                           
                            <div className='flex flex-col gap-2 font-semibold'>
                                <h1 className='text-md'>Mốc nạp: {wish.point}</h1>
                                <h1 className='text-md'>Trạng thái: {wish.paymentStatus} </h1>
                                <h1 className='text-md'>Ngày nạp: {wish.createdAt} </h1>

                                <div className='flex gap-2'>
                                    
                                    <button className='px-3 rounded-md bg-blue-500 py-2 hover:bg-gray-400 text-white' >Xem chi tiết</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            

        </div>
        :<Spinner/>}

    </div>
  )
}

export default ClientWallet