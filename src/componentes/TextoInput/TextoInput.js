import './TextoImput.css';

const TextoImput = ({ label, inputType, placeholder, value, onChange }) => {
  return (
    <div className="input-flex">
      <label>{label}</label>
      <input type={inputType} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default TextoImput;
