import { useLocation } from 'react-router-dom';

const Client_CheckOutMomoStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract parameters from the URL query string
  const partnerCode = queryParams.get('partnerCode');
  const orderId = queryParams.get('orderId');
  const requestId = queryParams.get('requestId');
  const amount = queryParams.get('amount');
  const orderInfo = queryParams.get('orderInfo');
  const resultCode = queryParams.get('resultCode');
  const message = queryParams.get('message');

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-lexend">
      {/* Container */}
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center text-green-600 mb-4">
          Thanh toán thành công
        </h1>

        {message !== 'Successful' ? (
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-800 text-lg">
              <strong>Chúc mừng! Thanh toán của bạn đã được thực hiện thành công.</strong>
            </p>
            <p className="text-green-700">Mã giao dịch: <strong>{requestId}</strong></p>
          </div>
        ) : (
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-red-800 text-lg">
              <strong>Đã xảy ra lỗi trong quá trình thanh toán. Đơn hàng vẫn sẽ được khởi tạo !</strong>
              <strong>Bạn có thể thực hiện thanh toán lại sau đó!</strong>

            </p>
            <p className="text-red-700">{message}</p>
          </div>
        )}


        {/* Order details */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Thông tin đơn hàng</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Mã đơn hàng:</span>
              <span className="font-semibold text-gray-800">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Số tiền:</span>
              <span className="font-semibold text-gray-800">{amount} VND</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Thông tin đơn hàng:</span>
              <span className="font-semibold text-gray-800">{orderInfo}</span>
            </div>
          </div>
        </div>

        {/* Footer with action */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300">
            Quay lại trang chủ
          </button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-600 transition duration-300">
            Xem chi tiết đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client_CheckOutMomoStatus;
