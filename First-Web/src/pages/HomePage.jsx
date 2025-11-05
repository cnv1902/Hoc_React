// Trang chủ - Home Page
// Đây là trang đầu tiên người dùng thấy khi vào web

import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import './HomePage.css';

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-page">
      <h1 className="page-title">🏠 Chào mừng đến với React</h1>
      <p className="page-subtitle">Học React dễ dàng với cấu trúc dự án chuẩn</p>

      {/* Card giới thiệu */}
      <Card title="Giới thiệu về React">
        <p>React là thư viện JavaScript để xây dựng giao diện người dùng.</p>
        <p>React sử dụng component-based architecture, giúp code dễ tái sử dụng và maintain.</p>
      </Card>

      {/* Card demo tương tác */}
      <Card title="Demo: Counter đơn giản">
        <div className="counter-demo">
          <p className="counter-text">Số lần click: <strong>{count}</strong></p>
          <div className="button-group">
            <Button 
              variant="primary" 
              onClick={() => setCount(count + 1)}
            >
              ➕ Tăng
            </Button>
            <Button 
              variant="danger" 
              onClick={() => setCount(count - 1)}
              disabled={count === 0}
            >
              ➖ Giảm
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => setCount(0)}
            >
              🔄 Reset
            </Button>
          </div>
        </div>
      </Card>

      {/* Card hướng dẫn */}
      <Card title="Cấu trúc dự án">
        <ul className="feature-list">
          <li>📁 <strong>assets/</strong> - Chứa file tĩnh (ảnh, css, font)</li>
          <li>🧩 <strong>components/</strong> - Component nhỏ, tái sử dụng</li>
          <li>🖼️ <strong>layouts/</strong> - UI khung (header, navbar, content)</li>
          <li>📄 <strong>pages/</strong> - Mỗi page tương ứng 1 route</li>
          <li>🪝 <strong>hooks/</strong> - Custom Hook dùng lại logic</li>
          <li>🌐 <strong>services/</strong> - API call, tách logic khỏi UI</li>
          <li>💾 <strong>store/</strong> - Quản lý state toàn cục</li>
          <li>🛠️ <strong>utils/</strong> - Hàm tiện ích, validate</li>
          <li>🛣️ <strong>router/</strong> - Khai báo Route tập trung</li>
        </ul>
      </Card>
    </div>
  );
}

export default HomePage;
