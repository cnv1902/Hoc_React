# Store - Quản lý State Toàn Cục

Folder này dùng để chứa các file quản lý state toàn cục của ứng dụng.

## Các thư viện phổ biến:

### 1. Redux Toolkit (Recommended)
```bash
npm install @reduxjs/toolkit react-redux
```

### 2. Zustand (Simple & Lightweight)
```bash
npm install zustand
```

### 3. Jotai
```bash
npm install jotai
```

### 4. Recoil
```bash
npm install recoil
```

## Khi nào cần dùng State Management?

- ✅ Khi nhiều component cần chia sẻ state
- ✅ Khi state cần persist (lưu lại) sau khi refresh
- ✅ Khi logic state phức tạp
- ❌ Không cần thiết cho dự án nhỏ
- ❌ Có thể dùng Context API cho trường hợp đơn giản

## Ví dụ với Zustand (Simple):

```javascript
// store/useUserStore.js
import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;

// Sử dụng trong component:
// const { user, setUser } = useUserStore();
```

## Ví dụ với Redux Toolkit:

```javascript
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
```
