import React from 'react';
interface Props{
  onClickHandler: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}
const Button = ({onClickHandler, className, disabled, children}:Props) => {
  return (
    <div>
      <button
      onClick={() => onClickHandler()}
      className={className}
      disabled={disabled}
    >
      {children}
    </button>
    </div>
  )
}
export default Button;
