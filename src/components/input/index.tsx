import clsx from 'clsx';

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputType> = ({
  className,
  value,
  name,
  onChange,
  ...rest
}) => (
  <div>
    <input
      className={clsx('border-1 border-solid rounded-lg p-1', className)}
      value={value}
      name={name}
      onChange={onChange}
      {...rest}
    />
  </div>
);

export default Input;
