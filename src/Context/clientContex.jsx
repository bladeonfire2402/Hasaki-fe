import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ClientContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ClientContextProvider = ({children}) => {
    const [cartItem, setCartItem] = useState([]);
    const [clitoken, setcliToken] = useState("");
    const [productList, setproductList] = useState();
    const [proError, setproError] = useState();
    const [categoryList,setcategoryList]=useState()
    const [user,setUser]=useState("")

    const getProductList = async () => {
        const getProductUrl = import.meta.env.VITE_API_ENDPOINT_GETPRODUCT;
        try {
            const response = await axios.get(getProductUrl);
            setproductList(response.data.products); // Cập nhật trạng thái sản phẩm
        } catch (e) {
            setproError(e)
        }
    };

    const getCategoriesList = async () => {
        const getCategoriesUrl = import.meta.env.VITE_API_ENDPOINT_GETCATEGORIES;
        try {
            const response = await axios.get(getCategoriesUrl);
            setcategoryList(response.data.categories); // Cập nhật trạng thái sản phẩm
            
        } catch (e) {
            console.log(e)
        }
    };

    const getTokenAndUser = async () => {
        const getUserInfo = import.meta.env.VITE_API_ENDPOINT_GETUSERINFO;
        const token = localStorage.getItem("token");
    
        if (token) {
            try {
                // Gửi token qua query parameters trong GET request
                const response = await axios.get(getUserInfo, {
                    params: {
                        token: token,  // Token được gửi qua query parameter 'token'
                    }
                });
    
                if (response.status === 200) {
                    console.log("User data:", response.data.user);
                    setUser(response.data.user);
                    setcliToken(token)
                }
            } catch (e) {
                console.log("Error:", e.response ? e.response.data : e.message);
            }
        } else {
            console.log("No token found");
        }
    };

    
    
    
    
    const getCart = async()=>{
        
    }

    

    const contextValue = {
        clitoken,
        setcliToken,
        productList,
        proError,
        categoryList
    };

    useEffect(() => {
        getTokenAndUser();
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();

    }, []);
    
    return (
        <ClientContext.Provider value={contextValue}>
            {children}
        </ClientContext.Provider>
    );
};

export default ClientContextProvider;
