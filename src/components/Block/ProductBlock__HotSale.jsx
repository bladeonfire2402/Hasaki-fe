import { useEffect, useState } from "react"
import Heading from "../Title/Heading/Heading"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import VisibilityIcon from '@mui/icons-material/Visibility'
import './index.css'
import { useContext } from "react"
import { ClientContext } from "../../Context/clientContex"
import { useNavigate } from "react-router"

// eslint-disable-next-line react/prop-types
const ProductBlock__HotSale = ({ product, view }) => {
  const [showDescription, setshowDescription] = useState(false)  
  const { addToCart, user, cart,addViews } = useContext(ClientContext);
  const navigate = useNavigate()

  useEffect(() => {
    const ProductBlock = document.getElementById(product._id);
    if (!ProductBlock) return; // Kiểm tra nếu phần tử không tồn tại

    const ProductBlockImg = ProductBlock.querySelector('img');
    if (!ProductBlockImg) return; // Kiểm tra nếu không tìm thấy thẻ img

    const handleMouseOver = () => {
        setshowDescription(true)
    };

    const handleMouseOut = () => {
      setshowDescription(false)
    }

    ProductBlockImg.addEventListener('mouseover', handleMouseOver);
    ProductBlockImg.addEventListener('mouseleave', handleMouseOut)
   
  }, [showDescription]); 

  const navigateToDetail = () => {
    navigate(`/productDetail/${product._id}`)
  }

  return (
    <div id={`${product._id}`} className="ProductBlock flex flex-col items-center gap-2 rounded-lg px-1 pb-3 relative green-bg">
      {showDescription && 
        <div className="DescriptionBlock absolute z-99 right-2 top-3">
          <div className="left-content flex gap-1 justify-center items-center rounded-lg animate-bounce text-sm primary-bg text-white text-lexend px-1 py-1">
            <p className="">{view}</p>
            <p>Đã Xem</p>
          </div>  
        </div>
      }
      
      <div className="over-hidden w-[130px] mt-4 h-[130px] flex justify-center rounded-md items-center">
        <img src={product.imageUrl} className="w-[130px] h-[130px] rounded-md"/>
      </div>
      
      <Heading title={product.productName} textColor={"text-white"} otherEmphasis={"w-[150px] text-center "} />

      {/* Nút Thêm vào Giỏ */}
      <div
        className="btn-order flex w-full text-white items-center justify-center hover:bg-blue-500 transition duration-300 ease-in-out primary-bg rounded-sm py-2 cursor-pointer"
        onClick={() => { addToCart(product._id,user._id) }}
      >
        <ShoppingCartIcon fontSize="small" />
        <Heading textSize="text-xs" title="Thêm vào giỏ hàng" textColor="text-white" otherEmphasis="uppercase" />
      </div>

      {/* Nút Xem Chi Tiết */}
      <div
        className="btn-order flex w-full text-white items-center justify-center hover:bg-blue-500 transition duration-300 ease-in-out bg-yellow-500 rounded-sm py-2 cursor-pointer"
        onClick={navigateToDetail}
      >
        <VisibilityIcon fontSize="small" />
        <Heading textSize="text-xs" title="Xem chi tiết" textColor="text-white" otherEmphasis="uppercase" />
      </div>
    </div>
  )
}

export default ProductBlock__HotSale
