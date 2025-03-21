import { useContext, useState } from 'react';
import PrimaryButton from '../../../Components/Buttons/Primary_Button/PrimaryButton.jsx'
import './Auth.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router"; 
import { ClientContext } from '../../../Context/clientContex.jsx';
import { Link } from 'react-router';

const AuthScreen_Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("")
  const [loading,setLoading]=useState("")
  const navigateToMain= useNavigate()
  const {setcliToken}=useContext(ClientContext)
  const navigateToRes= useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
        const loginUrl = import.meta.env.VITE_API_ENDPOINT_LOGIN;
        if (!loginUrl) {
            throw new Error("API endpoint is not defined");
        }
       
        const response = await fetch(loginUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, pwd: password })
        });
        
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};
        
        if (!response.ok) {
          toast.error(data.message || "login failed")
          throw new Error(data.message)
        }
        else{
          toast.success(data.message)
          setcliToken(data.accessToken)
          localStorage.setItem("token", data.accessToken);
          
          setTimeout(()=>{
            navigateToMain('/')
          },3000)
        }
        
        
        // Xử lý lưu token hoặc điều hướng
    } catch (err) {
        console.error("Error:", err);
        setError(err.message);
    } finally {
        setLoading(false);
    }
};
  return (
    <div className="AuthScreen_Login-wrapper h-full">
      <ToastContainer/>
      <div className="AuthScreen-wrapper flex justify-center h-full py-16">
         <div className="AuthScreen__BoxContent rounded-[40px] w-1/2 shadow-2xs flex justify-center items-center ">
           <div className=" flex gap-[140px]">
             <div className="AuthScreen__BoxContent-SignIn ">
              <h1 className="text-5xl text-white text-gilroy ">Sign In</h1>
              <div className="mt-8 flex flex-col gap-[20px]">
               <input type="email" className="px-6 py-2 rounded-md text-poppins w-[320px]" placeholder="Enter your email"
               required
               value={email}
               onChange={(e)=>{setEmail(e.target.value)}}
               ></input>
               <input type="password" className="px-6 py-2 rounded-md text-poppins  w-[320px]" placeholder="Enter your password"
               value={password}
               onChange={(e)=>{setPassword(e.target.value)}}
               ></input>
              </div>
              <h2 className="text-poppins text-white mt-[20px] mb-[20px]">Forgot password ?</h2>
              <PrimaryButton text={"Sign In"} onClickfun={handleLogin}/>
              <h2 className='text-poppins text-white mt-[20px] mb-[20px] '>Dont have account ? 
                <Link to={'/auth/register'}><b className=' text-[16px] cursor-pointer ml-2'>Register now !</b></Link></h2>
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