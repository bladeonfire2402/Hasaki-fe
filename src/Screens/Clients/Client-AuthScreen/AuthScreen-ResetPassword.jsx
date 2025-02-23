
import PrimaryButton from "../../../Components/Buttons/Primary_Button/PrimaryButton"
import LargetTitle from "../../../Components/Title/LgTitle/LargeTitle"
import './Auth.css'

const AuthScreen_ResetPassword = () => {
  return (
    <div className="AuthScreen_ResetPassword-wrapper h-full">
          <div className="AuthScreen-wrapper flex justify-center h-full py-16">
             <div className="AuthScreen__BoxContent-ResetPassword rounded-[40px]  shadow-2xs flex flex-col items-center over-hidden ">
               <div className="w-full ">
                <img src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg" className="h-[250px] w-full object-fill"/>
               </div>
               <div className="flex justify-center items-center flex-col py-5 px-8 ">
               <LargetTitle title={"Forgot Your Password"} color={"text-white"}/>
               <input type="email" className="px-6 py-2 rounded-md text-poppins w-[320px] my-8" placeholder="Enter Email"></input>
               <PrimaryButton text={"Confirm"}/>

               <h2 className='text-poppins text-white mt-[20px] mb-[20px] '>Already have account ? <b className=' text-[16px] cursor-pointer ml-2'>Login now !</b></h2>
  
               </div>

             </div>
          </div>
    </div>
  )
}

export default AuthScreen_ResetPassword