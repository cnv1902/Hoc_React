// Utility Functions - Helpers
// Các hàm tiện ích chung

// Debounce - Trì hoãn thực thi hàm
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Throttle - Giới hạn số lần gọi hàm
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Lấy giá trị random trong mảng
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Shuffle mảng (xáo trộn)
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Loại bỏ duplicate trong mảng
export const uniqueArray = (array) => {
  return [...new Set(array)];
};
