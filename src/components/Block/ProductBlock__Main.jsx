import Heading from "../Title/Heading/Heading";
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext, useEffect, useState } from "react";
import './index.css';
import { useNavigate } from "react-router";
import { ClientContext } from "../../Context/clientContex";

// eslint-disable-next-line react/prop-types
const ProductBlock__Main = ({ product, version }) => {
  const [category, setCategory] = useState("");
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, user, cart } = useContext(ClientContext);
  const navigateToDetail = useNavigate();

  // Cập nhật category khi sản phẩm có dữ liệu
  useEffect(() => {
    if (product) {
      if (product.categoryId) {
        setCategory(product.categoryId.name);
      }
    }
  }, [product]);

  // Kiểm tra trạng thái có sản phẩm trong giỏ hàng mỗi khi cart thay đổi
  useEffect(() => {
    if (cart && cart.cart) {

      const isIn = cart.cart.includes(product._id);
    
      setIsInCart(isIn);
    }
  }, [cart, product._id]); // Thêm dependency product._id để đảm bảo tính đúng đắn

  return (
    <div className={`ProductBlock__Main-wrapper flex flex-col gap-3 flex-none basis-1/5  rounded-lg pt-3  pb-5 relative ${version === 1 ? "border-2 px-3" : "px-5"} justify-between`}>
      <div className="flex justify-center">
        <img src={product.imageUrl || ""} className={`"${version === 1 ? "w-[100px] h-[100px]" : " "} w-[200px]  h-[180px] mt-4`} />
      </div>
      <Heading textSize={version === 1 ? "text-[15px]" : "text-lg"} title={product.productName} otherEmphasis={`font-semibold`} />
      <Heading textSize={version === 1 ? "text-sm" : "text-md"} title={product.price + " VNĐ"} textColor={"text-red"} otherEmphasis={"w-[150px] font-semibold"} />
      <div className="flex items-center gap-1">
        <InventoryIcon fontSize="small" color="primary" />
        <Heading textSize={"text-sm"} title={category || "Chưa danh mục"} textColor={"text-gray"} otherEmphasis={"w-[150px] "} />
      </div>
      
      <div
        className="btn-order flex w-full text-white items-center -mb-[5px] justify-center gap-1 hover:bg-blue-500  transition duration-300 ease-in-out primary-bg rounded-sm py-2 cursor-pointer"
        onClick={() => { addToCart(product._id, user._id); }}
      >
        <ShoppingCartIcon fontSize={version === 1 ? "small" : ""} />
        <Heading textSize={version === 1 ? "text-[12px]" : "text-sm"} title={"Thêm vào giỏ hàng"} textColor={"text-white"} otherEmphasis={"uppercase "} />
      </div>

      <div
        className="btn-order flex w-full text-white items-center justify-center hover:bg-blue-500  transition duration-300 ease-in-out gap-1 bg-yellow-500 rounded-sm py-2 cursor-pointer"
        onClick={() => { navigateToDetail(`/productDetail/${product._id}`); }}
      >
        <ShoppingCartIcon fontSize={version === 1 ? "small" : ""} />
        <Heading textSize={version === 1 ? "text-[12px]" : "text-sm"} title={"Xem chi tiết"} textColor={"text-white"} otherEmphasis={"uppercase "} />
      </div>

    </div>
  );
}

export default ProductBlock__Main;
