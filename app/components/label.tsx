interface LabelProps {
  text?: string;
  className?: string;
}
export default function Label({ text, className }: LabelProps) {
  return (
    <>
      <label
        htmlFor=""
        className={`text-[14px] leading-[100%] text-black font-[300] ${className}`}
      >
        {text}
      </label>
    </>
  );
}
