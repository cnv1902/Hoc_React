# 🚀 React Project - Cấu Trúc Dự Án Chuẩn

Dự án React mẫu với cấu trúc tổ chức code chuẩn, dễ học và dễ mở rộng.

## 📁 Cấu Trúc Dự Án

```
src/
├── assets/          # File tĩnh (ảnh, css global, font)
│   └── global.css   # CSS toàn cục
│
├── components/      # Component nhỏ, tái sử dụng
│   ├── Button.jsx
│   ├── Input.jsx
│   └── Card.jsx
│
├── layouts/         # UI khung (header + navbar + content)
│   └── MainLayout.jsx
│
├── pages/           # Mỗi page tương ứng 1 route
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ProductsPage.jsx
│   └── ContactPage.jsx
│
├── hooks/           # Custom Hook dùng lại logic
│   ├── useFetch.js
│   └── useCounter.js
│
├── services/        # API calls (axios, fetch)
│   └── api.js
│
├── store/           # State management (Redux/Zustand)
│   └── README.md    # Hướng dẫn setup
│
├── utils/           # Hàm tiện ích
│   ├── formatters.js
│   ├── validators.js
│   └── helpers.js
│
├── router/          # Khai báo Route tập trung
│   └── index.jsx
│
└── main.jsx         # Entry point
```

## 🎯 Các Khái Niệm Chính

### 1. **Components**
Components là các khối xây dựng cơ bản của React. Mỗi component là một hàm JavaScript trả về JSX.

```jsx
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
```

### 2. **Props**
Props (properties) là cách truyền dữ liệu từ component cha sang component con.

```jsx
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

### 3. **State**
State là dữ liệu có thể thay đổi trong component. Sử dụng `useState` hook.

```jsx
const [count, setCount] = useState(0);
```

### 4. **Hooks**
Hooks cho phép sử dụng state và lifecycle trong functional components.

- `useState` - Quản lý state
- `useEffect` - Side effects
- `useContext` - Context API
- Custom hooks - Tái sử dụng logic

### 5. **Routing**
React Router giúp điều hướng giữa các trang mà không cần reload.

```jsx
<Link to="/about">Giới thiệu</Link>
```

## 🚀 Cài Đặt và Chạy

### Cài đặt dependencies:
```bash
npm install
```

### Chạy development server:
```bash
npm run dev
```

### Build production:
```bash
npm run build
```

## 📚 Tài Liệu Tham Khảo

- [React Official Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite](https://vitejs.dev)

## 💡 Best Practices

1. **Tách component nhỏ** - Mỗi component chỉ làm một việc
2. **Đặt tên rõ ràng** - Tên component, function, variable phải mô tả rõ chức năng
3. **Tái sử dụng code** - Tạo components và hooks có thể dùng lại
4. **Tổ chức file** - Nhóm file theo chức năng, không theo loại file
5. **Comment code** - Giải thích những phần code phức tạp

## 🎨 Tính Năng Demo

- ✅ Routing với React Router
- ✅ Component tái sử dụng (Button, Input, Card)
- ✅ Layout chung (Header, Footer, Navigation)
- ✅ Custom Hooks
- ✅ Form handling
- ✅ CSS Modules
- ✅ Responsive design

## 📝 Ghi Chú

Đây là dự án mẫu để học React. Code được viết đơn giản và có nhiều comment để dễ hiểu.

Chúc bạn học tốt! 🎉
