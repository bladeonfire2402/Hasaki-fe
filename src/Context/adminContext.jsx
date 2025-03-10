import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const adminContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({children}) => {
    const [adtoken, setadToken] = useState("");
    const [productList, setproductList] = useState();
    const [proError, setproError] = useState();
    const [categoryList,setcategoryList]=useState()

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

    const contextValue = {
        adtoken,
        setadToken,
        productList,
        proError,
        categoryList
    };

    useEffect(() => {
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();
    }, []);
    
    return (
        <adminContext.Provider value={contextValue}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;
