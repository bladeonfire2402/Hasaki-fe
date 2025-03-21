import { useContext, useState } from 'react';
import axios from 'axios';
import { adminContext } from '../../../Context/adminContext';
import Spinner from '../../spinner/spinner';
import { toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
const UpdateProductForm = ({ product,setUpdate,update}) => {
  const { categoryList } = useContext(adminContext);
  const productStatus = ["Active", "Inactive"];
  console.log(product);

  const [productInfo, setProduct] = useState({
    productName: '',
    price: '',
    description: '',
    status: 'Active' // Đảm bảo có trường status
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const updateProduct = async () => {
    try {
      const updateUrl = import.meta.env.VITE_API_ENDPOINT_UPDATEPRODUCT;
      const response = await axios.put(updateUrl, {
        id:product._id,
        productName: productInfo.productName || product.productName, // sửa lại productName cho đúng
        price: productInfo.price ||  product.price,
        description: productInfo.description || product.description,
        status: productInfo.status || product.status, // Đảm bảo gửi status đúng
      });
      console.log('Product updated successfully:', response.data);
      toast.success("Đã Cập nhật Sản phẩm thành công");

      // Xóa các trường
      const empty = {
        productName: '',
        price: '',
        description: '',
        status: ''
      };

      setProduct(empty);
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error("Lỗi update Sản phẩm");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct();
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Thay đổi Sản phẩm : <b className='text-red-500'>{product._id || ""}</b>
      </h2>

      {/* Kiểm tra nếu categoryList có dữ liệu */}
      {!categoryList ? (
        <Spinner />
      ) : (
        <div className='flex justify-between'>
          <form onSubmit={handleSubmit} className='w-1/2 pr-5'>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên Sản phẩm mới</label>
              <input
                type="text"
                id="name"
                name="productName" // sửa lại tên để đúng với productName
                value={productInfo.productName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá tiền Sản phẩm mới</label>
              <input
                type="text"
                id="price"
                name="price" // sửa lại tên
                value={productInfo.price}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả Sản phẩm mới</label>
              <textarea
                id="description"
                name="description"
                value={productInfo.description}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Trạng thái</label>
              <select
                id="status" // đổi id và name thành status
                name="status" // sửa đúng tên là status
                value={productInfo.status}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              >
                <option value="">Tùy chỉnh trạng thái</option>
                {productStatus.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Cập nhật Sản phẩm
            </button>
            <button className='w-full mt-5 py-2 px-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-900'
            onClick={()=>{setUpdate(!update)}}
            >
                Quay về
            </button>
          </form>

          <div className='block text-sm font-medium text-gray-700 w-1/2 px-2 py-2 rounded-md bg-gray-200'>
            <div className='flex items-center w-full'>
              <img className='h-[200px]' src={product.imageUrl} alt={product.productName} />
            </div>
            <h1 className='font-bold'>Tên Sản phẩm hiện tại</h1>
            <h1 className='mb-2'>{product.productName}</h1>
            <h1 className='font-bold'>Giá tiền sản phẩm hiện tại</h1>
            <h1 className='mb-2'>{product.price} VND</h1>
            <h1 className='font-bold'>Danh mục Sản phẩm hiện tại</h1>
            <h1 className='mb-2'>{product.categoryId.name}</h1>
            <h1 className='font-bold'>Mô tả Sản phẩm hiện tại</h1>
            <h1 className='mb-2'>{product.description}</h1>
            <h1 className='font-bold'>Trạng thái sản phẩm</h1>
            <h1 className='mb-2'>{product.status}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProductForm;
