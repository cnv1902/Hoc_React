// Component Input tái sử dụng được
// Ví dụ: <Input label="Email" type="email" value={email} onChange={setEmail} />

import './Input.css';

function Input({ label, type = 'text', value, onChange, placeholder, required = false }) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default Input;
