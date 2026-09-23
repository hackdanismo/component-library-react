import type { ReactNode } from "react";

import { Button } from "../Button/Button";
import { CardHeader } from "../CardHeader/CardHeader";
import { FeatureList } from "../FeatureList/FeatureList";

import type { Feature } from "../FeatureList/FeatureList";

export interface CardAction {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export interface CardProps {
  icon?: ReactNode;

  title: string;
  accentText?: string;
  price: string;

  featuresTitle?: string;
  features?: Feature[];

  primaryAction?: CardAction;
  secondaryAction?: CardAction;

  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export function Card({
  icon,
  title,
  accentText,
  price,
  featuresTitle,
  features = [],
  primaryAction,
  secondaryAction,
  className = "",
  headerClassName = "",
  contentClassName = "",
}: CardProps) {
  return (
    <article
      className={`
        flex h-full flex-col
        rounded-2xl
        bg-[#080b25]
        p-3
        shadow-lg
        ${className}
      `}
    >
      <CardHeader
        icon={icon}
        title={title}
        accentText={accentText}
        price={price}
        className={headerClassName}
      />

      <div
        className={`
          flex flex-1 flex-col
          px-1 pb-2 pt-6
          ${contentClassName}
        `}
      >
        <FeatureList
          title={featuresTitle}
          features={features}
        />

        {(primaryAction || secondaryAction) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {primaryAction && (
              <Button
                variant="primary"
                icon={primaryAction.icon}
                onClick={primaryAction.onClick}
                className="min-w-max flex-1 whitespace-nowrap text-sm"
              >
                {primaryAction.label}
              </Button>
            )}

            {secondaryAction && (
              <Button
                variant="outline"
                icon={secondaryAction.icon}
                onClick={secondaryAction.onClick}
                className="min-w-max flex-1 whitespace-nowrap text-sm"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}