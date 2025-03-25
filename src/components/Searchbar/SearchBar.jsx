import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import './searchpage.css';

const SearchPage = () => {
  const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(""); // Thông báo lỗi nếu có
  const query = new URLSearchParams(useLocation().search).get("query"); // Lấy từ khóa tìm kiếm từ URL

  useEffect(() => {
    if (query) {
      // Gửi yêu cầu tìm kiếm đến backend
      axios
        .get(`/api/products/search?query=${query}`) // Giả sử API của bạn có endpoint như vậy
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

  return (
    <div className="search-page-container">
      <h1>Kết quả tìm kiếm cho: "{query}"</h1>
      {loading ? (
        <p>Đang tải...</p>
      ) : error ? (
        <p>{error}</p>
      ) : products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-item">
              <img src={product.productImage} alt={product.productName} className="product-image" />
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
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
