interface InputValueProps {
  required?: boolean;
  placeholder?: string;
  className?: string;
  type?: string;
}
export default function Input({
  placeholder,
  className,
  required,
  type,
}: InputValueProps) {
  return (
    <>
      <input
        type={type}
        required={required}
        className={`h-[45px] mt-[5px] border-gray-300 text-[var(--black-white-700)] rounded-[8px] outline-none w-full px-4 text-[14px] focus:border-[var(--primary)] border-[1px] font-[300] leading-[100%] ${className}`}
        placeholder={placeholder}
      />
    </>
  );
}
