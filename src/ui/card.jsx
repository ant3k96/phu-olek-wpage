export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}