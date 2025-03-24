import PersonIcon from '@mui/icons-material/Person';
import { useContext } from 'react';
import { ClientContext } from '../../../Context/clientContex';


const ClientInfo = () => {
    const {user}=useContext(ClientContext)
    return(
        <div className="rounded-md green-bg  px-4 py-4 text-white">
            {!user?"":
            <div>
                <div className='flex items-center justify-center gap-2 '>
                <PersonIcon fontSize='large'/>
                <h1 className=" text-primary text-2xl font-semibold">Thông tin cá nhân</h1>
            </div>
            <hr className="mt-4"/>
                <div className="flex flex-col gap-3 mt-3 ">
                    <div className="flex gap-2"><h2 className='font-semibold'>Họ và Tên:</h2><h2>{user.fullname}</h2></div>
                    <div className="flex gap-2"><h2 className='font-semibold'>Số điện thoại:</h2><h2>{user.phone}</h2></div>
                    <div className="flex gap-2"><h2 className='font-semibold'>Email:</h2><h2>{user.email}</h2></div>
                    <div className="flex gap-2"><h2 className='font-semibold'>Giới tính:</h2><h2>None</h2></div>
                    <div className="flex gap-2"><h2 className='font-semibold'>Xác thực:</h2><h2>{user.verified?"Đã xác thực":"Chưa xác thực"}</h2></div>
                </div>
                <button className='px-4 py-3 text-black bg-white font-semibold text-md rounded-md mt-4 hover:bg-blue-500 hover:text-white'>
                    Cập nhập thông tin
                </button>
            </div>
            }
        </div>
    )
}

export default ClientInfo