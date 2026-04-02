interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={`border rounded-md border-white h-10 w-[320px] ${className ?? ''}`} {...props} />;
};
