import PrimaryButton from "../../../Components/Buttons/Primary_Button/PrimaryButton"
import './Auth.css'

const AuthScreen_Register = () => {
  
  return (
    <div className="AuthScreen_Register-wrapper h-full">
          <div className="AuthScreen-wrapper flex justify-center h-full py-16">
             <div className="AuthScreen__BoxContent rounded-[40px] w-1/2 shadow-2xs flex justify-center items-center ">
               <div className=" flex gap-[140px]">
                 <div className="AuthScreen__BoxContent-Register ">
                  <h1 className="text-5xl text-white text-gilroy-bold ">Sign Up</h1>
                  <div className="mt-8 flex flex-col gap-[20px]">
                   <input type="text" className="px-6 py-2 rounded-md text-poppins w-[320px] " placeholder=" Fullname"></input>
                   <input type="email" className="px-6 py-2 rounded-md text-poppins w-[320px] " placeholder=" Email"></input>

                   <input type="tel" className="px-6 py-2 rounded-md text-poppins w-[320px] " placeholder=" Phone number"></input>
                   <input type="password" className="px-6 py-2 rounded-md text-poppins  w-[320px]" placeholder=" Password" ></input>
                  </div>
                  <h2 className="text-poppins text-white mt-[20px] mb-[20px]">Forgot password ?</h2>
                  <PrimaryButton text={"Sign up"} />
                  <h2 className='text-poppins text-white mt-[20px] mb-[20px] '>Already have account ? 
                    <b className=' text-[16px] cursor-pointer ml-2'>Login now !</b></h2>
                 </div>
                 <div className='flex items-center flex-col ml-[-10px]'>
                   <div className="text-missing-love text-6xl text-purple text-center">Welcome to</div>
                   <img src='' className=''/>
                 </div>
               </div>
             </div>
          </div>
    </div>
  )
}

export default AuthScreen_Register