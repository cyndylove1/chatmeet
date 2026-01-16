import { EyeOff, Eye } from "lucide-react";

interface InputPasswordProps {
  placeholder: string;
  showVisibility?: boolean;
  togglePasswordVisibility?: () => void;
}

export default function InputPassword({
  placeholder,
  showVisibility = false,
  togglePasswordVisibility,
}: InputPasswordProps) {
  return (
    <div>
      <div
        className="focus-within:border-[var(--primary)] h-[45px] flex mt-[5px] items-center rounded-[8px] border-[1px] 
        border-gray-300
        px-2 justify-between leading-[100%]"
      >
        <input
          required
          type={showVisibility ? "text" : "password"}
          placeholder={placeholder}
          className="text-black font-[300] w-full bg-transparent dm-font px-2 text-[14px] outline-none"
        />

        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-[#888D93]"
        >
          {showVisibility ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
