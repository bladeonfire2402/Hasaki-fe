import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { adminContext } from '../../../Context/adminContext';
import Spinner from '../../spinner/spinner';

const CreateProductForm = () => {
  const { categoryList } = useContext(adminContext);
  
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;

    // Kiểm tra xem có tệp nào được chọn hay không và chỉ cho phép 1 tệp
    if (files.length > 1) {
      alert("Chỉ được tải lên một hình ảnh.");
      return;
    }

    setProduct((prevProduct) => ({
      ...prevProduct,
      image: files[0],
    }));
  };

  const createProduct = async () => {
    const formData = new FormData();
    formData.append('productName', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('slug', product.category);
    formData.append('image', product.image);

    try {
      const createUrl = import.meta.env.VITE_API_ENDPOINT_GETCREATEPRODUCT;
      const response = await axios.post(createUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product created successfully:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Tạo sản phẩm</h2>

      {/* Kiểm tra nếu categoryList có dữ liệu */}
      {!categoryList ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên SP</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả SP</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá tiền</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Danh mục</label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Chọn danh mục theo slug</option>
              {/* Duyệt qua categoryList để hiển thị các options */}
              {categoryList.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.slug}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Hình ảnh sản phẩm</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"  // Chỉ cho phép hình ảnh
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Tạo sản phẩm
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateProductForm;
