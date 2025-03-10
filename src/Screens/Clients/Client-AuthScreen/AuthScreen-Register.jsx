import { useState } from "react";
import PrimaryButton from "../../../Components/Buttons/Primary_Button/PrimaryButton";
import "./Auth.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router";

const AuthScreen_Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigateToVerify= useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (!fullname || !email || !phone || !password) {
      setError("Vui lòng nhập đủ tất cả các trường");
      toast.error(error)
      return;
    }

    setLoading(true);
    try {
      const registerUrl = import.meta.env.VITE_API_ENDPOINT_REGISTER;
      if (!registerUrl) throw new Error("API endpoint is not defined");

      const response = await fetch(registerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, pwd: password, phone }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Register failed");

      console.log("Register successful", data);

      toast.success("Đăng kí thành công")

      //Chuyển đến trang xác nhận
      navigateToVerify("/auth/verifypwd")
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AuthScreen_Register-wrapper h-full">
      <div className="AuthScreen-wrapper flex justify-center h-full py-16">
        <ToastContainer/>
        <div className="AuthScreen__BoxContent rounded-[40px] w-1/2 shadow-2xs flex justify-center items-center">
          <div className="flex gap-[140px]">
            <div className="AuthScreen__BoxContent-Register">
              <h1 className="text-5xl text-white text-gilroy">Sign Up</h1>
             
              <div className="mt-8 flex flex-col gap-[20px]">
                <input
                  type="text"
                  className="px-6 py-2 rounded-md text-poppins w-[320px]"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  type="email"
                  className="px-6 py-2 rounded-md text-poppins w-[320px]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  className="px-6 py-2 rounded-md text-poppins w-[320px]"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="password"
                  className="px-6 py-2 rounded-md text-poppins w-[320px]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h2 className="text-poppins text-white mt-[20px] mb-[20px]">
                Forgot password?
              </h2>
              <PrimaryButton
                text={loading ? "Signing up..." : "Sign up"}
                onClickfun={handleRegister}
         
              />
              <h2 className="text-poppins text-white mt-[20px] mb-[20px]">
                Already have an account?
                <b className="text-[16px] cursor-pointer ml-2">Login now!</b>
              </h2>
            </div>
            <div className="flex items-center flex-col ml-[-10px]">
              <div className="text-missing-love text-6xl text-purple text-center">
                Welcome to
              </div>
              <img src="" alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen_Register;
