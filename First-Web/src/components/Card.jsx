// Component Card đơn giản để chứa nội dung
// Ví dụ: <Card title="Tiêu đề">Nội dung bên trong</Card>

import './Card.css';

function Card({ title, children }) {
  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
