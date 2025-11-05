// Utility Functions - Formatters
// Các hàm tiện ích để format dữ liệu

// Format tiền tệ VND
export const formatMoney = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

// Format ngày tháng
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

// Format số điện thoại
export const formatPhoneNumber = (phone) => {
  // Ví dụ: 0123456789 -> 0123 456 789
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
};

// Viết hoa chữ cái đầu
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Cắt chuỗi và thêm ...
export const truncate = (str, length = 50) => {
  if (!str) return '';
  if (str.length <= length) return str;
  return str.substring(0, length) + '...';
};
