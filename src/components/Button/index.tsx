const Button = ({ title = 'Button', backgroundColor = 'red' }) => (
  <button style={{ backgroundColor, border: 'none' }}>{title}</button>
);

export default Button;
