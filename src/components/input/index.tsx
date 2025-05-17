import clsx from 'clsx';

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMsg?: string;
}

const Input: React.FC<InputType> = ({
  className,
  value,
  name,
  errorMsg,
  onChange,
  ...rest
}) => (
  <div>
    <input
      className={clsx(
        'border-1 border-solid rounded-lg p-1 placeholder-[#979797]',
        className,
      )}
      value={value}
      name={name}
      onChange={onChange}
      {...rest}
    />
    {errorMsg && <div className="text-[12px] mt-2 text-[red]">{errorMsg}</div>}
  </div>
);

export default Input;
