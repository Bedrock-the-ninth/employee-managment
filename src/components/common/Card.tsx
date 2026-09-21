// /src/components/common/Card.tsx

const Card = ({
  className,
  children,
}: {
  className: string | undefined;
  children: React.ReactNode;
}) => {
  return (
    <div className={`card shadow-sm ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export default Card;
