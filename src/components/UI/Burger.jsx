export default function Burger({className,onClick}){
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }