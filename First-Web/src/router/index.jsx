// Router Configuration
// Khai báo tất cả các route của ứng dụng tại đây

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Layout bọc ngoài
    children: [
      {
        index: true, // Route mặc định khi vào '/'
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      // Có thể thêm nhiều route khác ở đây
      // {
      //   path: 'profile',
      //   element: <ProfilePage />
      // },
    ]
  },
]);

export default router;
