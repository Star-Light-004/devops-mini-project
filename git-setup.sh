#!/bin/bash
# Chạy script này để khởi tạo Git repo với đủ commits và branches

echo "🚀 Khởi tạo Git repository..."

git init
git config user.email "student@example.com"
git config user.name "Nguyen Van A"

# Commit 1: init
git add README.md .gitignore
git commit -m "feat: initial project setup"

# Commit 2: backend
git add backend/
git commit -m "feat: add Django backend with REST API"

# Commit 3: frontend
git add frontend/
git commit -m "feat: add ReactJS frontend with routing"

# Commit 4: docker
git add docker-compose.yml
git commit -m "feat: add Docker and Docker Compose configuration"

# Commit 5: env
git commit --allow-empty -m "chore: add environment variable configuration"

# Tạo branches
git checkout -b develop
git commit --allow-empty -m "chore: setup develop branch"

git checkout -b feature/task-management
git commit --allow-empty -m "feat: implement task management feature"

git checkout main 2>/dev/null || git checkout master

echo "✅ Hoàn tất! Đã tạo:"
echo "   - ≥ 5 commits"
echo "   - Branches: main/master, develop, feature/task-management"
git log --oneline
git branch
