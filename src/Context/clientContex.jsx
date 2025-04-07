import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


export const ClientContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ClientContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [clitoken, setcliToken] = useState("");
    const [wishlist,setWishList]=useState([])
    const [productList, setproductList] = useState();
    const [proError, setproError] = useState();
    const [categoryList, setcategoryList] = useState();
    const [user, setUser] = useState("");
    const [reload, setReload] = useState(false);
    const [userOrder,setuserOrder]=useState([])
    const [reloadCart,setReloadCart]=useState(false)
    const [wallet,setWallet]=useState(false)
    const [reqRefund,setreqRefund]=useState([])

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

    const getUserRefund = async (userId) => {
        const uri = import.meta.env.VITE_API_ENDPOINT_GETUSERREFUNDS;
        try {
            const response = await axios.get(uri,{params:{
                userId
            }});
            setreqRefund(response.data.userRefund); // Cập nhật trạng thái sản phẩm
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

    const checkoutMomo = async(userId,userAddress,dicountPrice)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_CHECKOUTMOMO
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                _id:userId,
                address:userAddress,
                dicountPrice:dicountPrice
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

    const checkoutWallet = async(userId,userAddress)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_CHECKOUTWALLLET
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                userId:userId,
                address:userAddress
            })

            if (response.status === 200) {
                toast.success(response.data.message)
                
                 // Cập nhật giỏ hàng
            }

            setReloadCart(!reloadCart)
            setReload(!reload)

            navigate('/')
        } catch (error) {
            console.log(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }

    const checkoutCod = async(userId,userAddress,discountPrice)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_CHECKOUTCOD
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                _id:userId,
                address:userAddress,
                dicountPrice:discountPrice,
            })

            setReloadCart(!reloadCart)

            if (response.status === 200) {
                toast.success(response.data.message)
                navigate('/')//sửa thành trang đơn hàng của người dùng
            }

            setReload(!reload)
        } catch (error) {
            toast.error(error.message)
        }

    }

    const addViews = async(productId)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_ADDVIEWS
        try {
            const response = await axios.post(uri,{
                productId:productId,
            })

            if (response.status === 200) {
                console.log(response.data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    const getTopViews =async()=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_TOPVIEWS
        try {
            const response = await axios.get(uri,{})

            if (response.status === 200) {
                console.log(response.data.message)
                return response.data
            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserOrders = async (userId) => {
        const uri = import.meta.env.VITE_API_ENDPOINT_GETUSERORDERS;
        try {
            const response = await axios.get(uri, {
                params: {
                    userId: userId,  // Token được gửi qua query parameter 'token'
                }
            });

            if(response.status==200){
                setuserOrder(response.data.userOrders); // Cập nhật trạng thái sản phẩm
            }
        } catch (e) {
            setproError(e);
        }
    };

    const getWishList = async(userId)=>{
        const uri = import.meta.env.VITE_API_ENDPOINT_GETUSERWISHLIST

        try {
            const response= await axios.get(uri,{
                params:{
                    userId:userId
                }
            })

            if(response.status==200){
                setWishList(response.data.wishList.wishes)
            }
            
        } catch (error) {
            toast.error("Lỗi rồi "+error)
        }
    }

    const addToWishList = async(userId,productId)=>{
        const uri = import.meta.env.VITE_API_ENDPOINT_ADDUSERWISHLIST

        try {
            const response = await axios.post(uri,{
                userId:userId,
                productId:productId
            })

            if(response.status==200){
                toast.success("Đã thêm vào danh sách yêu thích")
                setReload(!reload)
            }
        } catch (error) {
            console.log(error)
            toast.error("Lỗi rồi" + error)
        }
    }

    const removeFromWishList = async(userId,productId)=>{
        const uri = import.meta.env.VITE_API_ENDPOINT_REMOVEUSERWISHLIST

        try {
            const response = await axios.post(uri,{
                userId:userId,
                productId:productId
            })

            if(response.status==200){
                toast.success("Dã bỏ khỏi danh sách yêu thích")
                setReload(!reload)
            }
        } catch (error) {
            toast.error("Lỗi rồi" + error)
        }

    }

    const verifyPayment=async(paymentstate,orderid)=>{
        const uri =import.meta.env.VITE_API_ENDPOINT_VERIFYPAYMENT
        try {
            const response = await axios.post(uri,{
                paymentstate:paymentstate,
                orderid:orderid
            })
            
            if(response.status==200){
                toast.success("Thanh toán thành công")
                
            }
        } catch (error) {
            toast.error("Lỗi rồi bruh: "+error)
        }
    }

    const verifyChargePayment = async(message,paymentId,amount)=>{
        try {
            const uri =import.meta.env.VITE_API_ENDPOINT_VERIFYCHARGE
        
            const response = axios.post(uri,{
                message:message,
                paymentId:paymentId,
                amount
            })

            if(response.status==200){
                toast.success("Nạp tiền thành công")
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

    const addFunsToWallet = async(userId,point)=>{
        const uri= import.meta.env.VITE_API_ENDPOINT_CHARGEWALLET
        try {
            const response= await axios.post(uri,{
                userId,
                chargePoint:point
            })

            if(response.status==200){
             window.location.href = response.data.payUrl;   
            }
        } catch (error) {
            toast.error(error)
        }
    }

    const getWallet=async(userId)=>{
       const uri=import.meta.env.VITE_API_ENDPOINT_GETUSERWALLET
       try {
         const response = await axios.get(uri,{
            params:{
                userId
            }
         })

         if(response.status==200){
            setWallet(response.data.wallet)
         }


       } catch (error) {
         console.log(error)
         toast.error(error)
       }
    }

    const cancelOrder=async(orderid)=>{
        const uri =import.meta.env.VITE_API_ENDPOINT_CANCELORER
        console.log(orderid)
        try {
            const response = await axios.post(uri,{
                orderId:orderid
            })
            
            if(response.status==200){
                toast.success("Hủy đơn hàng thành công")
                setReload(!reload)
            }
        } catch (error) {
            toast.error("Lỗi rồi bruh: "+error)
        }
    }

    const askForRefund = async(orderId,userId,reason)=>{
        const uri=import.meta.env.VITE_API_ENDPOINT_REFUND
        try {
            if (!user) {
                toast.error("Vui lòng đăng nhập hoặc đăng kí")
                return;
            }

            const response = await axios.post(uri,{
                userId:userId,
                orderId:orderId,
                reason:reason
            })

            if (response.status === 200) {
                toast.success(response.data.message)  
            }

            setReloadCart(!reloadCart)
            setReload(!reload)
        } catch (error) {
            console.log(error)
            toast.error("Đơn hàng này đã được yêu cầu hoàn tiền")
        }
    }

    useEffect(()=>{
        if(user){
            getWallet(user._id)
        }
    },[user])


    // Gọi getCartUser khi user thay đổi
    useEffect(() => {
        if (user) {
            getCartUser();
            getUserRefund(user._id)
        }
    }, [user,reloadCart]);

    useEffect(() => {
        getTokenAndUser();
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();
    }, [reload]);

    useEffect(()=>{
        if(user){
            getUserOrders(user._id)
            getWishList(user._id)
        }
    },[user,reload])

    const contextValue = {
        clitoken,setcliToken,
        productList,categoryList,
        proError,
        user,
        reload,setReload,
        cart, addToCart,removeOneFromCart,getCartItemUser,
        checkoutMomo,checkoutCod,verifyPayment,
        addViews,getTopViews, 
        userOrder,cancelOrder,
        wishlist,addToWishList,removeFromWishList,
        verifyChargePayment,addFunsToWallet,wallet,checkoutWallet,
        askForRefund,reqRefund
    };

    return (
        <ClientContext.Provider value={contextValue}>
            {children}
        </ClientContext.Provider>
    );
};

export default ClientContextProvider;
