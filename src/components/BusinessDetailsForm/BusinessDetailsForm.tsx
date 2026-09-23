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

  const updateField = (
    field: keyof BusinessDetails,
    fieldValue: string
  ) => {
    onChange({
      ...value,
      [field]: fieldValue,
    });
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
      return;
    }

    onChange({
      ...value,
      address,
    });

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
          placeholder="*Company name"
          autoComplete="organization"
        />

        <FormInput
          value={value.contactName}
          onChange={(event) =>
            updateField(
              "contactName",
              event.target.value
            )
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
            updateField(
              "postcode",
              event.target.value
            )
          }
          placeholder="*Business address postcode"
          autoComplete="postal-code"
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
            onChange={(event) =>
              setManualAddress(event.target.value)
            }
            placeholder={`Business name
Address line 1
Address line 2
Town / City
Postcode`}
            rows={5}
            autoComplete="street-address"
            required
            className="
              w-full
              resize-y
              rounded-lg
              border
              border-gray-300
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
            "
          />

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
              setManualAddress(value.address ?? "");
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