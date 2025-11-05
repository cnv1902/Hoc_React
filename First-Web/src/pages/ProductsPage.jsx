// Trang sản phẩm - Products Page
// Demo: Hiển thị danh sách sản phẩm

import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './ProductsPage.css';

function ProductsPage() {
  const [showDetails, setShowDetails] = useState(null);

  // Dữ liệu mẫu - Trong thực tế có thể fetch từ API
  const products = [
    { id: 1, name: 'Laptop', price: 15000000, emoji: '💻', description: 'Laptop hiệu năng cao' },
    { id: 2, name: 'Smartphone', price: 8000000, emoji: '📱', description: 'Điện thoại thông minh' },
    { id: 3, name: 'Tablet', price: 6000000, emoji: '📱', description: 'Máy tính bảng' },
    { id: 4, name: 'Headphone', price: 2000000, emoji: '🎧', description: 'Tai nghe chất lượng cao' },
  ];

  return (
    <div className="products-page">
      <h1 className="page-title">🛍️ Sản phẩm</h1>
      <p className="page-subtitle">Danh sách sản phẩm demo</p>

      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id}>
            <div className="product-card">
              <div className="product-emoji">{product.emoji}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
                }).format(product.price)}
              </p>
              
              {showDetails === product.id && (
                <p className="product-description">{product.description}</p>
              )}

              <div className="product-actions">
                <Button 
                  variant="primary"
                  onClick={() => setShowDetails(
                    showDetails === product.id ? null : product.id
                  )}
                >
                  {showDetails === product.id ? 'Ẩn' : 'Xem'} chi tiết
                </Button>
                <Button variant="success">
                  Thêm vào giỏ
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
