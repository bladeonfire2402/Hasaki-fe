import { useContext, useState } from 'react';
import axios from 'axios';
import { adminContext } from '../../../Context/adminContext';
import Spinner from '../../spinner/spinner';
import {  toast } from 'react-toastify';


const CreateCategoryForm = () => {
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

  const CheckData =(name,slug)=>{
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md mt-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Tạo danh mục</h2>

      {/* Kiểm tra nếu categoryList có dữ liệu */}
      {!categoryList ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit}>
         
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên Danh Mục</label>
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
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug Danh Mục</label>
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
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả Danh mục</label>
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
            Cập nhật danh mục
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateCategoryForm;
