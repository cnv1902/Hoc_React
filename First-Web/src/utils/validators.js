// Utility Functions - Validators
// Các hàm tiện ích để validate dữ liệu

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate số điện thoại VN (10 số, bắt đầu bằng 0)
export const isValidPhone = (phone) => {
  const phoneRegex = /^0\d{9}$/;
  return phoneRegex.test(phone);
};

// Validate password (ít nhất 6 ký tự)
export const isValidPassword = (password) => {
  return password.length >= 6;
};

// Validate URL
export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Validate số
export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

// Validate chuỗi rỗng
export const isEmpty = (value) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};
