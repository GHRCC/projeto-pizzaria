import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Login({ ...rest }: InputProps) {
  return (
    <input
      className="mb-4 h-9 w-52 rounded-lg p-4 text-red-500 bg-white border-2"
      {...rest}
    />
  );
}

export function TextArea({ ...rest }: TextAreaProps) {
  return (
    <textarea
      className="mb-4 h-9 w-52 rounded-lg p-4 text-red-500 bg-white border-2"
      {...rest}
    ></textarea>
  );
}
