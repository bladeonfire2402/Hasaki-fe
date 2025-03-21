import { useContext, useState } from 'react';
import axios from 'axios';
import { adminContext } from '../../../Context/adminContext';
import Spinner from '../../spinner/spinner';
import {  toast } from 'react-toastify';


const UpdateCategoryForm = ({product}) => {
  const { categoryList } = useContext(adminContext);

  const [category,setCategory]=useState({
    name:'',
    slug:'',
    description:''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const CheckData =(name,slug,description)=>{
    console.log(categoryList)

  }
  const createProduct = async () => {

    CheckData(category.name,category.slug);
    
    try {
      const createUrl = import.meta.env.VITE_API_ENDPOINT_CREATECATEGORY;
      const response = await axios.post(createUrl, {
        name:category.name,
        slug:category.slug,
        description:category.description || "chưa có mô tả",
      });
      console.log('Product created successfully:', response.data);
      toast.success("Đã tạo danh mục thành công")

      //Xóa các trường
      const empty={
        name:'',
        slug:'',
        description:''
      }

      setCategory(empty)

      
      
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error("Lỗi tạo danh mục")
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct();
  };

  return (
    <div className="w-4/5 mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Thay đổi danh mục : <b className='text-red-500'>{product._id || ""}</b></h2>

      {/* Kiểm tra nếu categoryList có dữ liệu */}
      {!categoryList ? (
        <Spinner />
      ) : (
        <div className='flex justify-between'>
          <form onSubmit={handleSubmit} className='w-1/2 pr-5'>
          
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên Danh Mục mới</label>
              <input
                type="text"
                id="name"
                name="name"
                value={category.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug Danh Mục mới</label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={category.slug}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả Danh mục mới</label>
              <textarea
                id="description"
                name="description"
                value={category.description}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            

            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Tạo danh mục
            </button>
          </form>
          <div className='block text-sm font-medium text-gray-700 w-1/2 px-2 py-2 rounded-md bg-gray-200 '>
            <h1 className='font-bold '>Tên danh mục hiện tại</h1>
            <h1 className='mb-2'>{product.name}</h1>
            <h1  className='font-bold'>Slug danh mục hiện tại</h1>
            <h1  className='mb-2'>{product.name}</h1>
            <h1  className='font-bold'>Mô tả danh mục hiện tại</h1>
            <h1  className='mb-2'>{product.description}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCategoryForm;
