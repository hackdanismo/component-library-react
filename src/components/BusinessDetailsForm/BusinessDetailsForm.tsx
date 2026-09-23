import { useState } from "react";

import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";

export interface BusinessDetails {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  postcode: string;
  address?: string;
}

export interface BusinessDetailsFormProps {
  value: BusinessDetails;
  onChange: (value: BusinessDetails) => void;
  onAddAddressManually?: () => void;
  className?: string;
}

type BusinessDetailsErrors = Partial<
  Record<keyof BusinessDetails, string>
>;

export function BusinessDetailsForm({
  value,
  onChange,
  onAddAddressManually,
  className = "",
}: BusinessDetailsFormProps) {
  const [showManualAddress, setShowManualAddress] =
    useState(Boolean(value.address));

  const [manualAddress, setManualAddress] =
    useState(value.address ?? "");

  const [errors, setErrors] =
    useState<BusinessDetailsErrors>({});

  const updateField = (
    field: keyof BusinessDetails,
    fieldValue: string
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  };

  const validateField = (
    field: keyof BusinessDetails,
    fieldValue: string | undefined
  ) => {
    const trimmedValue = fieldValue?.trim() ?? "";

    if (field === "companyName" && !trimmedValue) {
      return "Company name is required";
    }

    if (field === "contactName" && !trimmedValue) {
      return "Contact name is required";
    }

    if (field === "email") {
      if (!trimmedValue) {
        return "Email address is required";
      }

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(trimmedValue)) {
        return "Enter a valid email address";
      }
    }

    if (field === "phone") {
      if (!trimmedValue) {
        return "Contact number is required";
      }

      const phonePattern =
        /^[0-9+\s()-]{7,20}$/;

      if (!phonePattern.test(trimmedValue)) {
        return "Enter a valid contact number";
      }
    }

    if (field === "postcode" && !trimmedValue) {
      return "Postcode is required";
    }

    return undefined;
  };

  const handleBlur = (
    field: keyof BusinessDetails
  ) => {
    const error = validateField(
      field,
      value[field]
    );

    setErrors((current) => ({
      ...current,
      [field]: error,
    }));
  };

  const handleAddAddressManually = () => {
    setShowManualAddress(true);
    onAddAddressManually?.();
  };

  const handleAddressSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const address = manualAddress.trim();

    if (!address) {
      setErrors((current) => ({
        ...current,
        address: "Business address is required",
      }));

      return;
    }

    onChange({
      ...value,
      address,
    });

    setErrors((current) => ({
      ...current,
      address: undefined,
    }));

    setShowManualAddress(false);
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
            updateField(
              "companyName",
              event.target.value
            )
          }
          onBlur={() =>
            handleBlur("companyName")
          }
          placeholder="*Company name"
          autoComplete="organization"
          error={errors.companyName}
        />

        <FormInput
          value={value.contactName}
          onChange={(event) =>
            updateField(
              "contactName",
              event.target.value
            )
          }
          onBlur={() =>
            handleBlur("contactName")
          }
          placeholder="*Contact name"
          autoComplete="name"
          error={errors.contactName}
        />

        <FormInput
          type="email"
          value={value.email}
          onChange={(event) =>
            updateField(
              "email",
              event.target.value
            )
          }
          onBlur={() =>
            handleBlur("email")
          }
          placeholder="*Email address"
          autoComplete="email"
          error={errors.email}
        />

        <FormInput
          type="tel"
          value={value.phone}
          onChange={(event) =>
            updateField(
              "phone",
              event.target.value
            )
          }
          onBlur={() =>
            handleBlur("phone")
          }
          placeholder="*Contact Number"
          autoComplete="tel"
          error={errors.phone}
        />

        <FormInput
          value={value.postcode}
          onChange={(event) =>
            updateField(
              "postcode",
              event.target.value
            )
          }
          onBlur={() =>
            handleBlur("postcode")
          }
          placeholder="*Business address postcode"
          autoComplete="postal-code"
          error={errors.postcode}
        />
      </div>

      {!showManualAddress && !value.address && (
        <button
          type="button"
          onClick={handleAddAddressManually}
          className="
            mt-4
            inline-flex
            cursor-pointer
            items-center
            gap-2
            font-semibold
            text-[#26243f]
            transition-colors
            duration-200
            hover:text-cyan-600
          "
        >
          <span className="text-xl">+</span>
          Add address manually
        </button>
      )}

      {showManualAddress && (
        <form
          onSubmit={handleAddressSubmit}
          className="mt-5"
        >
          <label
            htmlFor="manual-business-address"
            className="
              mb-2
              block
              text-sm
              font-semibold
              text-[#14152f]
            "
          >
            Business address
          </label>

          <textarea
            id="manual-business-address"
            value={manualAddress}
            onChange={(event) => {
              setManualAddress(
                event.target.value
              );

              if (errors.address) {
                setErrors((current) => ({
                  ...current,
                  address: undefined,
                }));
              }
            }}
            placeholder={`Business name
Address line 1
Address line 2
Town / City
Postcode`}
            rows={5}
            autoComplete="street-address"
            className={`
              w-full
              resize-y
              rounded-lg
              border
              bg-white
              px-4
              py-3
              text-[#14152f]
              outline-none
              transition
              duration-200
              placeholder:text-gray-400
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
              ${
                errors.address
                  ? "border-red-500"
                  : "border-gray-300"
              }
            `}
          />

          {errors.address && (
            <p className="mt-1 px-1 text-xs text-red-600">
              {errors.address}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <Button type="submit">
              Save address
            </Button>

            <button
              type="button"
              onClick={() => {
                setManualAddress(
                  value.address ?? ""
                );

                setErrors((current) => ({
                  ...current,
                  address: undefined,
                }));

                setShowManualAddress(false);
              }}
              className="
                cursor-pointer
                px-4
                py-3
                font-semibold
                text-[#26243f]
                transition-colors
                duration-200
                hover:text-cyan-600
              "
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {value.address && !showManualAddress && (
        <div
          className="
            mt-5
            rounded-lg
            border
            border-gray-300
            bg-white
            p-4
          "
        >
          <p className="text-sm font-semibold text-[#14152f]">
            Business address
          </p>

          <p className="mt-2 whitespace-pre-line text-sm text-gray-700">
            {value.address}
          </p>

          <button
            type="button"
            onClick={() => {
              setManualAddress(
                value.address ?? ""
              );
              setShowManualAddress(true);
            }}
            className="
              mt-3
              cursor-pointer
              text-sm
              font-semibold
              text-[#26243f]
              transition-colors
              duration-200
              hover:text-cyan-600
            "
          >
            Edit address
          </button>
        </div>
      )}
    </section>
  );
}