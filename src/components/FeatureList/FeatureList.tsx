import { FeatureItem } from "../FeatureItem/FeatureItem";

export interface Feature {
  id?: string;
  label: string;
  highlighted?: boolean;
}

export interface FeatureListProps {
  title?: string;
  features: Feature[];
  maxItems?: number;
  className?: string;
}

export function FeatureList({
  title,
  features,
  maxItems = 5,
  className = "",
}: FeatureListProps) {
  const emptySlots = Math.max(maxItems - features.length, 0);

  return (
    <div className={className}>
      {title && (
        <h4 className="mb-3 text-sm font-bold uppercase text-white">
          {title}
        </h4>
      )}

      <div className="space-y-2">
        {features.map((feature, index) => (
          <FeatureItem
            key={feature.id ?? index}
            label={feature.label}
            highlighted={feature.highlighted}
          />
        ))}

        {Array.from({ length: emptySlots }).map((_, index) => (
          <div
            key={`empty-${index}`}
            aria-hidden="true"
            className="
              h-9
              rounded-full
              bg-white/5
            "
          />
        ))}
      </div>
    </div>
  );
}