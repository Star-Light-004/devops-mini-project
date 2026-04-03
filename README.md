# 🎓 Student Management App

Ứng dụng quản lý công việc sinh viên — Bài kiểm tra giữa kỳ DevOps.

## 🛠 Tech Stack

| Thành phần | Công nghệ |
|---|---|
| Frontend | ReactJS 18 |
| Backend | Django 4.2 + DRF |
| Database | PostgreSQL 15 |
| Container | Docker + Docker Compose |

## 🚀 Chạy nhanh bằng Docker Compose

```bash
# 1. Clone repo
git clone <your-repo-url>
cd project

# 2. Chạy toàn bộ hệ thống
docker compose up --build

# Truy cập:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# Health check: http://localhost:8000/health/
# About: http://localhost:8000/about/
```

## 📁 Cấu trúc project

```
project/
├── backend/              # Django REST API
│   ├── api/              # App chính (models, views, urls)
│   ├── core/             # Config (settings, urls)
│   ├── .env              # Environment variables
│   ├── .env.example
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/             # ReactJS App
│   ├── src/
│   │   ├── pages/        # TasksPage, AboutPage, HealthPage
│   │   ├── App.js
│   │   └── App.css
│   ├── .env
│   ├── .env.example
│   ├── nginx.conf
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔗 API Endpoints

| Method | Endpoint | Mô tả |
|---|---|---|
| GET | /health/ | Health check |
| GET | /about/ | Thông tin sinh viên |
| GET | /api/tasks/ | Lấy danh sách công việc |
| POST | /api/tasks/ | Tạo công việc mới |
| GET | /api/tasks/:id/ | Chi tiết công việc |
| PUT | /api/tasks/:id/ | Cập nhật công việc |
| DELETE | /api/tasks/:id/ | Xóa công việc |

## ⚙️ Environment Variables

### Backend (.env)
```env
PORT=8000
SECRET_KEY=your-secret-key
DEBUG=True
APP_NAME=Student Management App
DB_NAME=studentdb
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=db
DB_PORT=5432
```

### Frontend (.env)
```env
PORT=3000
REACT_APP_API_URL=http://localhost:8000
REACT_APP_APP_NAME=Student Management App
```

## 🐳 Docker Hub

Build và push images:

```bash
# Backend
docker build -t <dockerhub-username>/student-backend:latest ./backend
docker push <dockerhub-username>/student-backend:latest

# Frontend
docker build -t <dockerhub-username>/student-frontend:latest ./frontend
docker push <dockerhub-username>/student-frontend:latest
```

## 📋 Checklist

- [x] Backend Django với ≥ 2 API (GET + POST + PUT + DELETE)
- [x] Frontend ReactJS hiển thị data + form tương tác
- [x] Database PostgreSQL (không hard-code)
- [x] Trang /about có thông tin sinh viên
- [x] Endpoint /health trả về `{"status": "ok"}`
- [x] Sử dụng .env (PORT, DB_HOST, APP_NAME)
- [x] .env.example
- [x] Dockerfile cho Backend
- [x] Dockerfile cho Frontend
- [x] docker-compose.yml chạy cả 3 service
- [ ] Push Docker Hub (thực hiện sau khi có tài khoản)
- [ ] Git repository với ≥ 5 commits, ≥ 3 branches
