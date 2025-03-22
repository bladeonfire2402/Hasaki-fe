import { useContext } from "react"
import { toast } from "react-toastify"
import { ClientContext } from "../../Context/clientContex"


// eslint-disable-next-line react/prop-types
const ApprovePaymentPopsup = ({userId,userAddrees,method,close,setClose}) => {
      const {checkoutMomo,checkoutCod}=useContext(ClientContext)
    
     const handleCheckOut=async(method,address)=>{
        
        if(address==''){
            toast.error("Vui lòng nhập địa chỉ")
            setClose(!close)
            return
        }
    
        if(method=="MOMO"){
            await checkoutMomo(userId,address)
        }
        else{
            await checkoutCod(userId,address)
        }
    
      }
    
    return (
      <div className='mx-auto w-1/3 p-6 bg-blue-500 shadow-lg rounded-md mt-[200px] flex flex-col items-center shadow-md'>
          <h2 className="text-xl mb-4 text-lexend  text-white font-semibold">Xác nhận thanh toán đơn hàng</h2>
          <div className="flex gap-2 items-center">
              <button className="mt-5 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700" 
              onClick={()=>{handleCheckOut(method,userAddrees)}}>Có nha</button>
              <button className="mt-5 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-700" onClick={()=>{setClose(!close)}}>Quay về</button>
  
          </div>
      </div>
    )
  }
  
  export default ApprovePaymentPopsup