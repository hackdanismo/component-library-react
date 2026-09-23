import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  icon?: ReactNode;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex
    cursor-pointer
    items-center
    justify-center
    gap-3
    rounded-full
    px-5
    py-3
    font-semibold
    shadow-sm
    transition-all
    duration-200
    ease-out
    hover:-translate-y-0.5
    hover:shadow-md
    active:translate-y-0
    active:scale-[0.96]
  `;

  const variantClasses = {
    primary: `
      bg-cyan-400
      text-white
      hover:brightness-110
    `,
    outline: `
      border
      border-cyan-400
      bg-transparent
      text-white
      hover:bg-white/10
    `,
  };

  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      {children}

      {icon && (
        <span
          aria-hidden="true"
          className="
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
          "
        >
          {icon}
        </span>
      )}
    </button>
  );
}