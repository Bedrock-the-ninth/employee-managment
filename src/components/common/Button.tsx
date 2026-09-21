// /src/components/common/Button.tsx
interface IButtonPropsType {
  type: "submit" | "reset" | "button" | undefined;
  className?: string | undefined;
  onClick : () => void;
  children: React.ReactNode;
}

const Button = ({ type, className, onClick, children }: IButtonPropsType) => {
  return (
    <button
      type={type}
      className={`mb-2 btn btn-primary ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
