import type { InputHTMLAttributes } from "react";

export interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function FormInput({
  label,
  error,
  className = "",
  ...props
}: FormInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-1 block text-sm font-medium text-[#17172f]">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          rounded-full
          border border-gray-500
          bg-white
          px-5 py-3
          text-sm text-gray-900
          outline-none
          transition
          placeholder:text-gray-500
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/20
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-1 px-4 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}