import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const adminContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AdminContextProvider = ({children}) => {
    const [adtoken, setadToken] = useState("");
    const [userList,setUserList]=useState('')
    const [productList, setproductList] = useState();
    const [refundList,setRefundList]=useState([])
    const [proError, setproError] = useState();
    const [categoryList,setcategoryList]=useState()
    const [orderList,setOrderList]=useState([])
    const [newList,setNewsList]=useState([])
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

    const getRefundList = async()=>{
        const url = import.meta.env.VITE_API_ENDPOINT_GEALLREFUNDS;
        try {
            const response = await axios.get(url);

            setRefundList(response.data.refunds)
           
        } catch (e) {
            setproError(e)
        }
    }

    const getOrderList = async()=>{
        const uri = import.meta.env.VITE_API_ENDPOINT_GETALLORDERS;
        try {
            const response = await axios.get(uri);

            setOrderList(response.data.orders);
           
        } catch (e) {
            setproError(e)
        }
    }

    const getNewsList = async()=>{
        const uri = import.meta.env.VITE_API_ENDPOINT_GETNEWS;
        try {
            const response = await axios.get(uri);

            setNewsList(response.data.news);
           
        } catch (e) {
            setproError(e)
        }
    }

    const handleRefund =async(method,refundId,orderId,userId,feedBack)=>{
        if(method=="approve"){
            try {
                const uri = import.meta.env.VITE_API_ENDPOINT_APPROVEREFUND;

                const response = await axios.post(uri,{
                    refundId,
                    orderId,
                    userId,
                    feedBack
                })

                if(response.status==200){
                    toast.success("Đã hoàn tiền cho khách hàng")
                }
                
            } catch (error) {
                console.log(error)
                toast.error("Lỗi hoàn tiền")
            }
        }
        else{
            try {
                const uri = import.meta.env.VITE_API_ENDPOINT_DISAPPROVEREFUND;

                const response = await axios.post(uri,{
                    refundId,
                    orderId,
                    userId,
                    feedBack
                })

                if(response.status==200){
                    toast.success("Đã bác bỏ yêu cầu hoàn tiền")
                }
                
            } catch (error) {
                console.log(error)
                toast.error("Lỗi hoàn tiền")
            }
        }

    }


    const contextValue = {
        adtoken,
        setadToken,
        productList,
        proError,
        categoryList,
        deleteProduct,
        userList,
        setReload,
        orderList,
        newList,
        refundList,handleRefund,
        reload,
    };

    useEffect(() => {
        getProductList(); // Lấy danh sách sản phẩm khi component mount
        getCategoriesList();
        getUserList();
        getOrderList();
        getNewsList();
        getRefundList();
    }, [reload]);
    
    return (
        <adminContext.Provider value={contextValue}>
            {children}
        </adminContext.Provider>
    );
};

export default AdminContextProvider;
