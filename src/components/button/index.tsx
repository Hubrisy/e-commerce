import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonType>> = ({
  onClick,
  type,
  children,
  className,
  ...rest
}) => (
  <div>
    <button
      className={clsx(
        'border border-solid m-2 rounded-lg w-50 h-10', // Базовые стили
        className, // Добавляем переданный класс (он не перезапишет базовые)
      )}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  </div>
);

export default Button;
