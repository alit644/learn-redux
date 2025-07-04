import type { ButtonHTMLAttributes } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  content: string;
  className?: string;
}
const Button = ({ type, content, className, ...rest }: Button) => {
  return (
    <button
      type={type || "button"}
      className={`${className}   px-4 py-2  rounded  transition-colors  `}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
