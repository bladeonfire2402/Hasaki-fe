import { useState } from "react"
import PrimaryButton from "../../../Components/Buttons/Primary_Button/PrimaryButton"
import LargetTitle from "../../../Components/Title/LgTitle/LargeTitle"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router";
import './Auth.css'

const AuthScreen_VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigateToLogin = useNavigate();

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setError(null);

    const verifyUrl = import.meta.env.VITE_API_ENDPOINT_VERIFYEMAIL; // Thay bằng API thực tế

    if (!email || !verifyCode) {
      setError("Vui lòng nhập đầy đủ thông tin");
      toast.error( error ||"Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(verifyUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, uniqueString: verifyCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Lỗi xác thực");
        toast.error(error || "Lỗi xác thực");
        return;
      }

      
      toast.success("Xác thực tài khoản thành công");

      setTimeout(()=>{
        navigateToLogin("/auth/login");
      },5000)

    } catch (err) {
      setError(err||"Có lỗi xảy ra, vui lòng thử lại");
      toast.error(err||"Có lỗi xảy ra, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthScreen_ResetPassword-wrapper h-full">
      <ToastContainer />
      <div className="AuthScreen-wrapper flex justify-center h-full py-16">
        <div className="AuthScreen__BoxContent-ResetPassword rounded-[40px] shadow-2xs flex flex-col items-center over-hidden">
          <div className="w-full">
            <img src="https://img.freepik.com/free-vector/real-time-sync-concept-illustration_114360-457.jpg" 
                 className="h-[250px] w-full object-fill" 
                 alt="Verification" />
          </div>
          <div className="flex justify-center items-center flex-col py-5 px-8">
            <LargetTitle title={"Verify Account"} color={"text-white"} />

            <input 
              type="email" 
              className="px-6 py-2 rounded-md text-poppins w-[320px] mt-3 mb-4" 
              placeholder="Enter Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input 
              type="text" 
              className="px-6 py-2 rounded-md text-poppins w-[320px] mb-5" 
              placeholder="Verification Code" 
              value={verifyCode} 
              onChange={(e) => setVerifyCode(e.target.value)}
              required
            />

            <PrimaryButton text={loading ? "Loading..." : "Confirm"} onClickfun={handleVerifyCode}  />

            <h2 className="text-poppins text-white mt-[30px]">
              Verifycode is expried? 
              <b className="text-[16px] cursor-pointer ml-2" onClick={() => navigateToLogin("/auth/login")}>
                Resend Now!
              </b>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen_VerifyEmail;
