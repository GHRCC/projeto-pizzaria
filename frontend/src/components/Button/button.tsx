import { ReactNode, ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-52 bg-yellow-500 border-0 p-2 border-black border-2 rounded-lg hover:bg-sky-400"
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner size={16} className="animate-spin" />
      ) : (
        <a>{children}</a>
      )}
    </button>
  );
}
