import clsx from 'clsx';

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputType> = ({ className, ...rest }) => (
  <div>
    <input
      className={clsx('border-1 border-solid rounded-lg p-1', className)}
      {...rest}
    />
  </div>
);

export default Input;
