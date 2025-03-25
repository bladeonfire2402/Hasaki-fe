import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import ProductBlock__Main from "../../../Components/Block/ProductBlock__Main"; // Giả sử bạn có component ProductBlock__Main
import Spinner from "../../../Components/spinner/spinner"; // Giả sử bạn có Spinner component

const SearchPage = () => {
  const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(""); // Thông báo lỗi nếu có
  const query = new URLSearchParams(useLocation().search).get("query"); // Lấy từ khóa tìm kiếm từ URL
  const history = useHistory();

  useEffect(() => {
    if (query) {
      setLoading(true);
      // Gửi yêu cầu tìm kiếm đến backend
      axios
        .get(`/api/products/search?query=${query}`)
        .then((response) => {
          setProducts(response.data); // Lưu kết quả vào state
          setLoading(false); // Đã tải xong
        })
        .catch((err) => {
          setError("Đã có lỗi xảy ra khi tìm kiếm sản phẩm.");
          setLoading(false);
        });
    }
  }, [query]);

  const handleViewProduct = (productId) => {
    // Gửi yêu cầu tăng lượt xem khi người dùng nhấn vào sản phẩm
    axios.post("/api/productViews/increseaView", { productId })
      .then(() => {
        // Chuyển tới trang chi tiết sản phẩm
        history.push(`/product/${productId}`);
      })
      .catch((err) => {
        console.error("Error while increasing view:", err);
      });
  };

  return (
    <div className="search-page-container">
      <h1>Kết quả tìm kiếm cho: "{query}"</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>{error}</p>
      ) : products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product._id}
              className="product-item"
              onClick={() => handleViewProduct(product._id)}
            >
              <ProductBlock__Main product={product} version={1} />
            </div>
          ))}
        </div>
      ) : (
        <p>Không có sản phẩm trùng khớp với từ khóa "{query}".</p>
      )}
    </div>
  );
};

export default SearchPage;
