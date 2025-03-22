import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ClientContext } from "../../../Context/clientContex";



const Client_ProductDetailScreen = () => {
  const { id } = useParams(); // luôn là string
  const { productList } = useContext(ClientContext);

  useEffect(() => {
    if (productList && id) {
      const product = productList.find(item => item._id === id);
      console.log(!product ? "Không tìm thấy sản phẩm" : "Đã tìm thấy sản phẩm", product);
    }
  }, [productList, id]);

  if (!productList) {
    return <div className="text-center py-10 text-gray-600">Đang tìm kiếm sản phẩm...</div>;
  }

  const product = productList.find(item => item._id === id);

  if (!product) {
    return <div className="text-center py-10 text-red-500">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-[60px] grid grid-cols-1 md:grid-cols-2 gap-8 text-lexend">

      <div className="flex gap-[50px] items-center">
        {/* Product Main Image */}
        <img
          src={product.imageUrl || "/images/placeholder.jpg"}
          alt={product.name}
          className="rounded-2xl shadow-lg max-h-[500px] object-contain"
        />
         <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.productName}</h1>
        {/* Rating + Reviews */}
        <div className="flex items-center -mt-[10px] gap-2">
          
          <span className="text-gray-500">({product.reviews?.length || 10} đánh giá)</span>
        </div>

        <p className="text-gray-600 text-xl">Danh mục: {product.shortDescription || product.categoryId.name}</p>
        {/* Giá tiền */}
        <div className="flex items-center gap-4">
          <div className="text-2xl font-semibold text-red-500">
            {product.price?.toLocaleString()}₫
          </div>
          {product.oldPrice && (
            <div className="line-through text-gray-400">
              {product.oldPrice.toLocaleString()}₫
            </div>
          )}
        </div>

        {/* Mô tả ngắn */}
        <p className="text-gray-600">{product.shortDescription || product.description}</p>
       

       

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-lg rounded-2xl p-2">
            Mua ngay
          </button>
          <button  className="flex-1 text-lg text-white rounded-2xl p-2 bg-blue-500 hover:bg-blue-600">
            Thêm vào danh sách yêu thích
          </button>
        </div>

        {/* Chính sách */}
      </div>
      </div>

     
     
    </div>
  );
};

export default Client_ProductDetailScreen;
