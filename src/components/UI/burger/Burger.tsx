import React from 'react';

interface BurgerProps {
  className?: string; 
  onClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;
