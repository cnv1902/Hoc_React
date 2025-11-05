// Trang giới thiệu - About Page

import Card from '../components/Card';
import './AboutPage.css';

function AboutPage() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'HTML', level: 95 },
  ];

  return (
    <div className="about-page">
      <h1 className="page-title">👤 Giới thiệu</h1>
      
      <Card title="Về dự án này">
        <p>Đây là dự án React mẫu với cấu trúc chuẩn, giúp bạn:</p>
        <ul>
          <li>✅ Hiểu rõ cách tổ chức code trong dự án React</li>
          <li>✅ Học cách tạo component tái sử dụng</li>
          <li>✅ Làm quen với React Router</li>
          <li>✅ Áp dụng best practices trong React</li>
        </ul>
      </Card>

      <Card title="Kỹ năng">
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Công nghệ sử dụng">
        <div className="tech-stack">
          <span className="tech-badge">⚛️ React 19</span>
          <span className="tech-badge">⚡ Vite</span>
          <span className="tech-badge">🛣️ React Router</span>
          <span className="tech-badge">🎨 CSS3</span>
        </div>
      </Card>
    </div>
  );
}

export default AboutPage;
