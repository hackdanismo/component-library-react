import type { ReactNode } from "react";

export interface CardContainerProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  1: "grid-cols-1",

  2: `
    grid-cols-1
    md:grid-cols-2
  `,

  3: `
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
  `,

  4: `
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4
  `,
};

export function CardContainer({
  children,
  columns = 3,
  className = "",
}: CardContainerProps) {
  return (
    <div
      className={`
        grid
        items-stretch
        gap-6
        ${columnClasses[columns]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}