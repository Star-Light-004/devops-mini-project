import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ title: '', description: '' });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/tasks/`);
      setTasks(res.data);
    } catch (err) {
      setError('Không thể kết nối tới backend.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      setFormError('Tiêu đề không được để trống.');
      return;
    }
    setFormError('');
    setSubmitting(true);
    try {
      await axios.post(`${API_URL}/api/tasks/`, form);
      setForm({ title: '', description: '' });
      fetchTasks();
    } catch {
      setFormError('Tạo công việc thất bại.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleComplete = async (task) => {
    try {
      await axios.put(`${API_URL}/api/tasks/${task.id}/`, { completed: !task.completed });
      fetchTasks();
    } catch {}
  };

  const deleteTask = async (id) => {
    if (!window.confirm('Xóa công việc này?')) return;
    try {
      await axios.delete(`${API_URL}/api/tasks/${id}/`);
      fetchTasks();
    } catch {}
  };

  return (
    <div>
      <h1>📋 Quản lý Công việc</h1>

      {/* Add Task Form */}
      <div className="card">
        <h2>➕ Thêm công việc mới</h2>
        <div className="form-group">
          <label>Tiêu đề *</label>
          <input
            type="text"
            placeholder="Nhập tiêu đề công việc..."
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Mô tả</label>
          <textarea
            placeholder="Nhập mô tả (không bắt buộc)..."
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
        </div>
        {formError && <p className="error-msg">{formError}</p>}
        <button className="btn btn-primary" onClick={handleSubmit} disabled={submitting}>
          {submitting ? 'Đang lưu...' : '✅ Thêm công việc'}
        </button>
      </div>

      {/* Task List */}
      <div className="card">
        <h2>📌 Danh sách công việc ({tasks.length})</h2>
        {loading ? (
          <p className="loading">Đang tải...</p>
        ) : error ? (
          <p className="error-msg">{error}</p>
        ) : tasks.length === 0 ? (
          <p className="empty">Chưa có công việc nào. Hãy thêm mới!</p>
        ) : (
          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                <div className="task-info">
                  <div className="task-title">{task.title}</div>
                  {task.description && <div className="task-desc">{task.description}</div>}
                  <span className={`badge ${task.completed ? 'badge-done' : 'badge-todo'}`}>
                    {task.completed ? '✔ Hoàn thành' : '⏳ Đang làm'}
                  </span>
                </div>
                <div className="task-actions">
                  <button className="btn btn-success" onClick={() => toggleComplete(task)}>
                    {task.completed ? '↩ Chưa xong' : '✔ Xong'}
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                    🗑 Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
