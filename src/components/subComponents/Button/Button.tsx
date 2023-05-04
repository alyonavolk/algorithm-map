import * as React from 'react';
import './button.scss';

interface IButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
  return (
    <button className='btn' onClick={onClick}>{children}</button>
  );
};

export default Button;
