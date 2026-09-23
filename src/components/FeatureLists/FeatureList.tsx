import { FeatureItem } from "../FeatureItem/FeatureItem";

export interface Feature {
  id?: string;
  label: string;
  highlighted?: boolean;
}

export interface FeatureListProps {
  title?: string;
  features: Feature[];
  className?: string;
}

export function FeatureList({
  title,
  features,
  className = "",
}: FeatureListProps) {
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
      </div>
    </div>
  );
}