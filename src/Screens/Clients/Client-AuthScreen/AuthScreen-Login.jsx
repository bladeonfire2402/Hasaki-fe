import PrimaryButton from '../../../Components/Buttons/Primary_Button/PrimaryButton.jsx'
import './Auth.css'


const AuthScreen_Login = () => {
  return (
    <div className="AuthScreen_Login-wrapper h-full">
      <div className="AuthScreen-wrapper flex justify-center h-full py-16">
         <div className="AuthScreen__BoxContent rounded-[40px] w-1/2 shadow-2xs flex justify-center items-center ">
           <div className=" flex gap-[140px]">
             <div className="AuthScreen__BoxContent-SignIn ">
              <h1 className="text-5xl text-white text-gilroy ">Sign In</h1>
              <div className="mt-8 flex flex-col gap-[20px]">
               <input type="email" className="px-6 py-2 rounded-md text-poppins w-[320px]" placeholder="Enter your email"></input>
               <input type="password" className="px-6 py-2 rounded-md text-poppins  w-[320px]" placeholder="Enter your password" ></input>
              </div>
              <h2 className="text-poppins text-white mt-[20px] mb-[20px]">Forgot password ?</h2>
              <PrimaryButton text={"Sign In"}/>
              <h2 className='text-poppins text-white mt-[20px] mb-[20px] '>Dont have account ? 
                <b className=' text-[16px] cursor-pointer ml-2'>Register now !</b></h2>
             </div>
             <div className='flex items-center flex-col ml-[-10px]'>
               <div className="text-missing-love text-6xl text-purple text-center">Welcome back</div>
               <img src='' className=''/>
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default AuthScreen_Login