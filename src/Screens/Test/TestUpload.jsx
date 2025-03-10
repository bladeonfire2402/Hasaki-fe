import { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setUploadStatus(null); // Reset trạng thái upload
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image); // Đảm bảo tên trường khớp với backend

    setUploading(true);
    setUploadStatus(null);

    try {
      const response = await fetch("http://localhost:4000/api/product/createProWithImage", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("Tải lên thành công! ✅");
      } else {
        setUploadStatus("Tải lên thất bại! ❌");
      }
    } catch (error) {
      console.error("Lỗi upload:", error);
      setUploadStatus("Lỗi khi tải lên! ❌");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 border-2 border-dashed border-gray-300 rounded-lg w-80">
      {preview ? (
        <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mb-4" />
      ) : (
        <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
          <span className="text-gray-400">No image</span>
        </div>
      )}

      <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Chọn ảnh
        <input type="file" accept="image/*" name="image" className="hidden" onChange={handleImageChange} />
      </label>

      {image && (
        <button
          onClick={handleUpload}
          className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:bg-gray-400"
          disabled={uploading}
        >
          {uploading ? (
            <span className="flex items-center">
              <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" stroke="currentColor" strokeWidth="4" className="opacity-75" />
              </svg>
              Đang tải lên...
            </span>
          ) : (
            "Upload Ảnh"
          )}
        </button>
      )}

      {uploadStatus && <p className="mt-2 text-sm">{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
