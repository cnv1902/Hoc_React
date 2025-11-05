// Trang liên hệ - Contact Page
// Demo: Form với validation đơn giản

import { useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    
    // Reset form sau 3 giây
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">📧 Liên hệ</h1>
      <p className="page-subtitle">Gửi tin nhắn cho chúng tôi</p>

      <div className="contact-container">
        <Card title="Form liên hệ">
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>Gửi thành công!</h3>
              <p>Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <Input
                label="Họ và tên"
                type="text"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="Nhập họ và tên"
                required
              />

              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="example@email.com"
                required
              />

              <div className="input-group">
                <label className="input-label">
                  Tin nhắn <span className="required">*</span>
                </label>
                <textarea
                  className="textarea-field"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Nhập tin nhắn của bạn..."
                  rows="5"
                  required
                />
              </div>

              <Button variant="primary" type="submit">
                📤 Gửi tin nhắn
              </Button>
            </form>
          )}
        </Card>

        <Card title="Thông tin liên hệ">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <strong>Địa chỉ:</strong>
                <p>123 Đường ABC, Quận XYZ, TP.HCM</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <strong>Điện thoại:</strong>
                <p>0123 456 789</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <strong>Email:</strong>
                <p>contact@example.com</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ContactPage;
