import type { ButtonHTMLAttributes, ReactNode } from "react";

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
    const baseClasses = "inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 font-semibold transition";
    const variantClasses = {
        primary: "bg-cyan-400 text-white hover:brightness-105",
        outline: "border border-cyan-400 bg-transparent text-white hover:bg-white/5",
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
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                {icon}
                </span>
            )}
        </button>
    )
}