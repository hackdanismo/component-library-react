import { FormInput } from "../FormInput/FormInput";

export interface BusinessDetails {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  postcode: string;
}

export interface BusinessDetailsFormProps {
  value: BusinessDetails;
  onChange: (value: BusinessDetails) => void;
  onAddAddressManually?: () => void;
  className?: string;
}

export function BusinessDetailsForm({
  value,
  onChange,
  onAddAddressManually,
  className = "",
}: BusinessDetailsFormProps) {
  const updateField = (
    field: keyof BusinessDetails,
    fieldValue: string
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
  };

  return (
    <section
      className={`
        rounded-2xl
        bg-[#f1f1f3]
        p-7
        md:p-8
        ${className}
      `}
    >
      <h2 className="text-2xl font-bold text-[#14152f]">
        Your business details
      </h2>

      <p className="mt-1 text-sm text-gray-700">
        Complete your order
      </p>

      <div className="mt-6 space-y-3">
        <FormInput
          value={value.companyName}
          onChange={(event) =>
            updateField("companyName", event.target.value)
          }
          placeholder="*Company name"
          autoComplete="organization"
        />

        <FormInput
          value={value.contactName}
          onChange={(event) =>
            updateField("contactName", event.target.value)
          }
          placeholder="*Contact name"
          autoComplete="name"
        />

        <FormInput
          type="email"
          value={value.email}
          onChange={(event) =>
            updateField("email", event.target.value)
          }
          placeholder="*Email address"
          autoComplete="email"
        />

        <FormInput
          type="tel"
          value={value.phone}
          onChange={(event) =>
            updateField("phone", event.target.value)
          }
          placeholder="*Contact Number"
          autoComplete="tel"
        />

        <FormInput
          value={value.postcode}
          onChange={(event) =>
            updateField("postcode", event.target.value)
          }
          placeholder="*Business address postcode"
          autoComplete="postal-code"
        />
      </div>

      <button
        type="button"
        onClick={onAddAddressManually}
        className="
          mt-4
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#26243f]
        "
      >
        <span className="text-xl">+</span>
        Add address manually
      </button>
    </section>
  );
}