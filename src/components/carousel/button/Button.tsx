import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classnames from 'classnames';
interface ButtonProps {
  onClick?: () => void;
  placement: 'left' | 'right';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, placement, className }) => {
  const classes = classnames(className, 'carousel-button-container');
  return (
    <div className={classes} onClick={() => onClick?.()}>
      {placement === 'left' ? (
        <LeftOutlined className="carousel-button-icon" />
      ) : (
        <RightOutlined className="carousel-button-icon" />
      )}
    </div>
  );
};

export default Button;
