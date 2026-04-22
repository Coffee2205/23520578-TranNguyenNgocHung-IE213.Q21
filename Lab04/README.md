Sinh viên: Trần Nguyễn Ngọc Hùng  
MSSV: 23520578  
Lớp: IE213.Q21.1  
Môn học: IE213.Q21  
Công cụ: Visual Studio Code + React + Vite + Bootstrap

# Lab 04 - Movie Reviews

## Mô tả
Lab 04 là một ứng dụng React xây dựng bằng Vite, mô phỏng trang Movie Reviews theo phong cách rạp chiếu phim. Ứng dụng sử dụng React Router để điều hướng giữa các trang và React-Bootstrap để xây dựng giao diện responsive.

## Công nghệ sử dụng
- React
- Vite
- React Router DOM
- React-Bootstrap
- Bootstrap 5

## Chức năng chính
- Trang chủ hiển thị danh sách phim nổi bật
- Trang chi tiết phim theo route `/movies/:id`
- Trang thêm review theo route `/movies/:id/review`
- Trang đăng nhập theo route `/login`
- Navbar responsive có nút Login/Logout toggle bằng `useState`
- Giao diện tối kiểu cinema, lấy cảm hứng từ các trang rạp chiếu phim hiện đại

## Cấu trúc thư mục
```text
my-react-app/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── components/
│       ├── MoviesList.jsx
│       ├── Movie.jsx
│       ├── AddReview.jsx
│       └── Login.jsx
```

## Cách chạy project
1. Cài dependencies
```bash
npm install
```

2. Chạy project ở chế độ development
```bash
npm run dev
```

3. Build project
```bash
npm run build
```

4. Xem bản build trước khi deploy
```bash
npm run preview
```

## Ghi chú
- File `src/App.js` hiện được dùng như wrapper để tương thích import.
- Nếu muốn thay đổi giao diện hoặc dữ liệu phim, chỉnh trong `src/App.jsx` và thư mục `src/components/`.
