interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
  return <input className={`border rounded-md border-white h-10 w-[320px] p-2 ${className ?? ''}`} {...props} />;
};
