import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ClientContext } from "../../../Context/clientContex";

const Client_ProductDetailScreen = () => {
  const { id } = useParams(); // Luôn là string!
  const { productList } = useContext(ClientContext);

  useEffect(() => {
    if (productList && id) {
      const product = productList.find(item => item._id === id);
      console.log(!product ? "Không tìm thấy sản phẩm" : "Đã tìm thấy sản phẩm", product);
    }
  }, [productList, id]);

  if (!productList) {
    return <div>
      Đang tìm kiếm sản phẩm
    </div>;
  }

  const product = productList.find(item => item._id === id);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Các chi tiết sản phẩm khác */}
    </div>
  );
};

export default Client_ProductDetailScreen;
