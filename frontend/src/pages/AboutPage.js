import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

export default function AboutPage() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/about/`)
      .then(res => setInfo(res.data))
      .catch(() => setInfo({
        ho_ten: 'Trương Đình Bắc',
        ma_so_sinh_vien: '2251220219',
        lop: '22CT1',
        app_name: 'Student Management App',
        version: '1.0.0'
      }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Đang tải...</p>;

  return (
    <div>
      <h1>👤 Thông tin cá nhân</h1>
      <div className="card about-card">
        <div className="avatar">🎓</div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{info.ho_ten}</h2>
        <p style={{ color: '#6b7280', marginBottom: '8px' }}>{info.app_name}</p>

        <div className="info-grid">
          <div className="info-item">
            <div className="label">Họ và tên</div>
            <div className="value">{info.ho_ten}</div>
          </div>
          <div className="info-item">
            <div className="label">Mã số sinh viên</div>
            <div className="value">{info.ma_so_sinh_vien}</div>
          </div>
          <div className="info-item">
            <div className="label">Lớp</div>
            <div className="value">{info.lop}</div>
          </div>
          <div className="info-item">
            <div className="label">Phiên bản</div>
            <div className="value">v{info.version}</div>
          </div>
        </div>

        <div style={{ marginTop: '24px', padding: '14px', background: '#eff6ff', borderRadius: '8px', fontSize: '0.85rem', color: '#1e40af' }}>
          💡 Dữ liệu được lấy từ API endpoint: <strong>/about/</strong>
        </div>
      </div>
    </div>
  );
}
