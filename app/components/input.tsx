interface InputValueProps {
  required?: boolean;
  placeholder?: string;
  type?: string;
}
export default function Input({
  placeholder,
  required,
  type,
}: InputValueProps) {
  return (
    <>
      <input
        type={type}
        required={required}
        className="h-[45px] mt-[5px] border-gray-300 text-black rounded-[8px] outline-none w-full px-4 text-[14px] focus:border-[var(--primary)] border-[1px] font-[300] leading-[100%]"
        placeholder={placeholder}
      />
    </>
  );
}
