
import Heading from "../Title/Heading/Heading"
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// eslint-disable-next-line react/prop-types
const ProductBlock__Main = ({product}) => {
  return (
    <div className="ProductBlock__Main-wrapper flex flex-col gap-3  rounded-lg px-5 pb-5 relative" >
        <div className="flex justify-center">
            <img src={product.img} className="w-[200px] mt-4"/>
        </div>
        <Heading textSize={"text-lg"} title={product.name}  otherEmphasis={"font-semibold"}/>
        <Heading textSize={"text-md"} title={product.price +" Đ"} textColor={"text-red"} otherEmphasis={"w-[150px] font-semibold"}/>
        <div className="flex items-center gap-1">
          <InventoryIcon fontSize="small" color="primary"/>
          <Heading textSize={"text-sm"} title={"19 Mua"} textColor={"text-gray"} otherEmphasis={"w-[150px] "}/>
        </div>
        <Heading textSize={"text-sm"} title={"Còn hàng: 190 Sản phẩm"} textColor={"text-blue"} otherEmphasis={" "}/>
        <div className="btn-order flex w-full text-white items-center justify-center gap-1 primary-bg rounded-lg py-3 cursor-pointer">
            <ShoppingCartIcon  />
           <Heading textSize={"text-sm"} title={"Thêm vào giỏ hàng"} textColor={"text-white"} otherEmphasis={"uppercase "}/>
            
        </div>
    </div>
  )
}

export default ProductBlock__Main