import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const adminContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({children}) => {
    const [adtoken, setadToken] = useState("");
    const [userList,setUserList]=useState('')
    const [productList, setproductList] = useState();
    const [proError, setproError] = useState();
    const [categoryList,setcategoryList]=useState()
    const [reload,setReload]=useState(false)

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
            setcategoryList(response.data.categories); // Cập nhật categories list
            
        } catch (e) {
            console.log(e)
        }
    };

    const deleteProduct = async ()=>{
        const deleteUrl = import.meta.env.VITE_API_ENDPOINT_DELETEPRODUCT;
        try{
            const response= await axios.delete(deleteUrl);
        }
        catch(e){
            console.log(e)
        }

    }

    const getUserList = async () => {
        const getUsersListUrl = import.meta.env.VITE_API_ENDPOINT_GETUSERSALL;
        try {
            const response = await axios.get(getUsersListUrl);

            setUserList(response.data.users)
           
        } catch (e) {
            setproError(e)
        }
    };




    const contextValue = {
        adtoken,
        setadToken,
        productList,
        proError,
        categoryList,
        deleteProduct,
        userList,
        setReload,
        reload  
    };

    useEffect(() => {
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();
        getUserList();
    }, [reload]);
    
    return (
        <adminContext.Provider value={contextValue}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;
