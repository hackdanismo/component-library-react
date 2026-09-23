export interface SectionIntroProps {
  title: string;
  subtitle?: string;
  description?: string;
  secondaryDescription?: string;
  className?: string;
}

export function SectionIntro({
  title,
  subtitle,
  description,
  secondaryDescription,
  className = "",
}: SectionIntroProps) {
  return (
    <div className={`mx-auto max-w-4xl text-center ${className}`}>
      <h2 className="text-3xl font-bold text-black">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 font-semibold text-black">
          {subtitle}
        </p>
      )}

      {description && (
        <p className="mt-4 text-base text-slate-800">
          {description}
        </p>
      )}

      {secondaryDescription && (
        <p className="mt-1 text-base text-slate-800">
          {secondaryDescription}
        </p>
      )}
    </div>
  );
}