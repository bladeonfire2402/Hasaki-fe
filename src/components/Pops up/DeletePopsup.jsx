

// eslint-disable-next-line react/prop-types
const DeletePopsup = ({deleteFunc,ondelete,setDelete}) => {
  
  return (
    <div className='mx-auto w-1/3 p-6 bg-white shadow-lg rounded-md mt-[200px] flex flex-col items-center shadow-md'>
        <h2 className="text-xl mb-4 text-lexend font-semibold">Xác nhận xóa sản phẩm</h2>
        <div className="flex gap-2 items-center">
            <button className="mt-5 py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-700" 
            onClick={()=>{deleteFunc()}}>Có nha</button>
            <button className="mt-5 py-2 px-4 bg-gray-600 text-white font-semibold rounded-md hover:bg-blue-700" onClick={()=>{setDelete(!ondelete)}}>Quay về</button>

        </div>
    </div>
  )
}

export default DeletePopsup