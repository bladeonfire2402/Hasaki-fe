import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const ClientContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ClientContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [clitoken, setcliToken] = useState("");
    const [productList, setproductList] = useState();
    const [proError, setproError] = useState();
    const [categoryList, setcategoryList] = useState();
    const [user, setUser] = useState("");
    const [reload, setReload] = useState(false);
    const [reloadCart,setReloadCart]=useState(false)
    const navigate= useNavigate()

    const getProductList = async () => {
        const getProductUrl = import.meta.env.VITE_API_ENDPOINT_GETPRODUCT;
        try {
            const response = await axios.get(getProductUrl);
            setproductList(response.data.products); // Cập nhật trạng thái sản phẩm
        } catch (e) {
            setproError(e);
        }
    };

    const getCategoriesList = async () => {
        const getCategoriesUrl = import.meta.env.VITE_API_ENDPOINT_GETCATEGORIES;
        try {
            const response = await axios.get(getCategoriesUrl);
            setcategoryList(response.data.categories); // Cập nhật trạng thái danh mục
        } catch (e) {
            console.log(e);
        }
    };

    
    const getTokenAndUser = async () => {
        const getUserInfo = import.meta.env.VITE_API_ENDPOINT_GETUSERINFO;
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const response = await axios.get(getUserInfo, {
                    params: {
                        token: token,  // Token được gửi qua query parameter 'token'
                    }
                });

                if (response.status === 200) {
                    console.log("User data:", response.data.user);
                    setUser(response.data.user);
                    setcliToken(token);
                }
            } catch (e) {
                console.log("Error:", e.response ? e.response.data : e.message);
            }
        } else {
            console.log("No token found");
        }
    };

    const getCartUser = async () => {
        const getCartUri = import.meta.env.VITE_API_ENDPOINT_GETUSERCART;
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }
    
            // Gửi userId qua query parameters (params)
            const response = await axios.get(getCartUri, { 
                params: { userId: user._id }  // Truyền qua query string
            });
            
            if (response.status === 200) {
                setCart(response.data.userCart);  // Cập nhật giỏ hàng
            }
        } catch (error) {
            console.log(error.message);
            toast.error("Lỗi khi fetching người cart");
        }
    };

    const getCartItemUser = async (cartItemIdBruh) => {
        const uri = import.meta.env.VITE_API_ENDPOINT_GETUSERCARTITEM;
        
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí");
                return;
            }
    
            // Gửi yêu cầu GET với query parameter cartItemId
            const response = await axios.get(uri, { 
                params: { cartItemId: cartItemIdBruh } 
            });
    
            // Kiểm tra mã trạng thái và dữ liệu trả về
            if (response.status === 200) {
                if (response.data && response.data.cartItem) {
                    return response.data;  // Trả về dữ liệu cartItem nếu có
                } else {
                    toast.error("Không tìm thấy sản phẩm trong giỏ hàng.");
                }
            } else {
                toast.error("Lỗi khi lấy dữ liệu giỏ hàng.");
            }
        } catch (error) {
            console.error("Lỗi khi fetching cartItem:", error.message);
            toast.error("Lỗi khi lấy dữ liệu giỏ hàng");
        }
    };

    const addToCart = async (productId,userId)=>{
        const addtoCartUri=import.meta.env.VITE_API_ENDPOINT_ADDTOCART
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(addtoCartUri,{
                _id:productId,
                userId:userId
            })

            if (response.status === 200) {
                console.log(response.data); 
                toast.success(response.data.message)
                 // Cập nhật giỏ hàng
            }

            setReloadCart(!reloadCart)
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const removeOneFromCart = async (productId,userId)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_REMOVEFROMCART
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                _id:productId,
                userId:userId
            })

            if (response.status === 200) {
                console.log(response.data); 
                toast.success(response.data.message)
                 // Cập nhật giỏ hàng
            }

            setReloadCart(!reloadCart)
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const checkoutMomo = async(userId,userAddress)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_CHECKOUTMOMO
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                _id:userId,
                address:userAddress
            })

            if (response.status === 200) {
                toast.success(response.data.message)
                
                 // Cập nhật giỏ hàng
            }

            setReloadCart(!reloadCart)

            window.location.href = response.data.payUrl;
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const checkoutCod = async(userId,userAddress)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_CHECKOUTCOD
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                _id:userId,
                address:userAddress
            })

            if (response.status === 200) {
                toast.success(response.data.message)
                navigate('/')//sửa thành trang đơn hàng của người dùng
            }
            
            setReloadCart(!reloadCart)

            
        } catch (error) {
            toast.error(error.message)
        }

    }
    
    // Gọi getCartUser khi user thay đổi
    useEffect(() => {
        if (user) {
            getCartUser();
        }
    }, [user,reloadCart]);

    useEffect(() => {
        getTokenAndUser();
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();
    }, [reload]);

    const contextValue = {
        clitoken,setcliToken,
        productList,categoryList,
        proError,
        user,
        reload,setReload,
        cart, addToCart,removeOneFromCart,getCartItemUser,
        checkoutMomo,checkoutCod
    };

    return (
        <ClientContext.Provider value={contextValue}>
            {children}
        </ClientContext.Provider>
    );
};

export default ClientContextProvider;
