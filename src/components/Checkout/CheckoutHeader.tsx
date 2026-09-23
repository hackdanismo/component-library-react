export interface CheckoutHeaderProps {
  packageName: string;
  className?: string;
}

export function CheckoutHeader({
  packageName,
  className = "",
}: CheckoutHeaderProps) {
  return (
    <header className={`text-center ${className}`}>
      <h1 className="text-2xl font-bold text-[#1a1936]">
        You have selected{" "}
        <span className="text-[#51c5d5]">
          {packageName}
        </span>
      </h1>

      <p className="mt-1 text-sm font-semibold text-gray-600">
        Our simple 3 step process to activate your{" "}
        {packageName} service
      </p>
    </header>
  );
}