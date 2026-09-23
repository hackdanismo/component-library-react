import type { ReactNode } from "react";

export interface CardHeaderProps {
  icon?: ReactNode;
  title: string;
  accentText?: string;
  price: string;
  className?: string;
}

export function CardHeader({
  icon,
  title,
  accentText,
  price,
  className = "",
}: CardHeaderProps) {
  return (
    <div
      className={`
        flex items-center gap-4
        rounded-xl bg-white
        px-6 py-5
        ${className}
      `}
    >
      {icon && (
        <div className="shrink-0">
          {icon}
        </div>
      )}

      <div>
        <h3 className="text-xl font-bold leading-tight text-black">
          {title}

          {accentText && (
            <>
              {" "}
              <span className="text-slate-500">
                {accentText}
              </span>
            </>
          )}
        </h3>

        <p className="text-lg leading-tight text-black">
          from {price}
        </p>
      </div>
    </div>
  );
}