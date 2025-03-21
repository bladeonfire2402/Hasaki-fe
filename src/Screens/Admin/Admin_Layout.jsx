import { Route, Routes } from "react-router";
import AdminLoginScreen from "./Admin-Login/Ad-LoginScreen";
import Admin_DashBoard from "./Admin-DashBoard/Admin_DashBoard";
import AdminContextProvider from "../../Context/adminContext";


const AdminLayout = () => {
  return (
    <AdminContextProvider>
      <div className="AdminLayout_wrapper h-full " >
        <Routes>
          <Route path="/dashBoard/*" element={<Admin_DashBoard />} />
          <Route path="/loginSa" element={<AdminLoginScreen />} />
          
        </Routes>
      </div>
    </AdminContextProvider>
  );
};

export default AdminLayout;
