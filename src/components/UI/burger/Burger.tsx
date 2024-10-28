import React from "react";

interface BurgerProps {
  className?: string;
  onClick: () => void;
}

const Burger: React.FC<BurgerProps> = ({ className, onClick }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{ background: "none", border: "none", padding: 0 }}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default Burger;
