// Component Button tái sử dụng được
// Ví dụ: <Button variant="primary" onClick={handleClick}>Click me</Button>

import './Button.css';

function Button({ children, variant = 'primary', onClick, disabled = false }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
