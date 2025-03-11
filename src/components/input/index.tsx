interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputType> = ({ ...rest }) => (
  <div>
    <input className="border-1 border-solid m-2 rounded-lg p-1" {...rest} />
  </div>
);

export default Input;
