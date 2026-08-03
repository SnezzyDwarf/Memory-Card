import { Link } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button({
  variant = "primary",
  children,
  to,
  type = "button",
  className,
  onClick,
  ...props
}) {
  const moduleClassName = `${styles.btn} ${styles[variant] || ""} ${className}`;
  if (to) {
    return (
      <Link
        to={to}
        className={moduleClassName}
        defer
        target="_blank"
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <>
      <button
        type={type}
        className={moduleClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
