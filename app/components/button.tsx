interface BtnProps {
  text?: string;
  className?: string;
}

export default function Button({ text, className }: BtnProps) {
  return (
    <button
      className={`
        relative
        px-6 py-2
        border border-[var(--primary)]
        text-[14px]
        rounded-sm
        overflow-hidden
        merriWeather
        cursor-pointer
        flex items-center gap-[5px]
        group/btn
        ${className ?? ""}
      `}
    >
      {/* Text */}
      <span className="relative z-10">{text}</span>

      <span
        className="
          absolute inset-0
          bg-[var(--primary)]
          translate-x-[-100%]
          transition-transform
          duration-300
          group-hover/btn:translate-x-0
        "
      />
    </button>
  );
}
