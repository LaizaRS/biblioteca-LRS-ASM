import './TextoImput.css';

const TextoImput = ({ label, ...props }) => {
  return (
    <div className="input-flex">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default TextoImput;
