function cutDate(inputString) {
    // Cắt chuỗi chỉ lấy phần ngày tháng năm
    return inputString.split('T')[0];
  }

export {cutDate}