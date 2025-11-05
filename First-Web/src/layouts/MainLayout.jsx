// Layout chính: Header + Navbar + Content
// Layout này bao bọc các page khác

import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

function MainLayout() {
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <h1 className="logo">🚀 My React App</h1>
          <nav className="navbar">
            <Link to="/" className="nav-link">Trang chủ</Link>
            <Link to="/about" className="nav-link">Giới thiệu</Link>
            <Link to="/products" className="nav-link">Sản phẩm</Link>
            <Link to="/contact" className="nav-link">Liên hệ</Link>
          </nav>
        </div>
      </header>

      {/* Main Content - Nơi các page sẽ được render */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 My React App. Học React dễ dàng!</p>
      </footer>
    </div>
  );
}

export default MainLayout;
