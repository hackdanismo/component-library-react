export interface FeatureItemProps {
  label: string;
  highlighted?: boolean;
  className?: string;
}

export function FeatureItem({
  label,
  highlighted = false,
  className = "",
}: FeatureItemProps) {
  return (
    <div
      className={`
        flex items-center gap-3
        rounded-full
        bg-white/20
        px-3 py-2
        text-sm text-white
        ${className}
      `}
    >
      <span
        className="
          flex h-5 w-5 shrink-0
          items-center justify-center
          rounded-full
          bg-[#111833]
          text-[#55cbe0]
        "
        aria-hidden="true"
      >
        ✓
      </span>

      <span
        className={
          highlighted
            ? "font-semibold text-[#55cbe0]"
            : ""
        }
      >
        {label}
      </span>
    </div>
  );
}