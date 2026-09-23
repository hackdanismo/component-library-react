import type { Package } from "../../types/Package";
import type { BusinessDetails } from "../BusinessDetailsForm/BusinessDetailsForm";
import type { PaymentMethod } from "../PaymentMethodSelector/PaymentMethodSelector";

import { CheckoutHeader } from "./CheckoutHeader";
import { BusinessDetailsForm } from "../BusinessDetailsForm/BusinessDetailsForm";
import { BasketSummary } from "../BasketSummary/BasketSummary";

export interface CheckoutProps {
  package: Package;

  businessDetails: BusinessDetails;
  onBusinessDetailsChange: (
    value: BusinessDetails
  ) => void;

  paymentMethod?: PaymentMethod;
  onPaymentMethodChange?: (
    method: PaymentMethod
  ) => void;

  onAddAddressManually?: () => void;
  onRemovePackage?: () => void;

  onComplete?: () => void;
  isProcessing?: boolean;

  className?: string;
}

export function Checkout({
  package: selectedPackage,
  businessDetails,
  onBusinessDetailsChange,
  paymentMethod,
  onPaymentMethodChange,
  onAddAddressManually,
  onRemovePackage,
  onComplete,
  isProcessing = false,
  className = "",
}: CheckoutProps) {
  const isBusinessDetailsComplete =
    businessDetails.companyName.trim() !== "" &&
    businessDetails.contactName.trim() !== "" &&
    businessDetails.email.trim() !== "" &&
    businessDetails.phone.trim() !== "" &&
    businessDetails.postcode.trim() !== "";

  const canComplete =
    isBusinessDetailsComplete &&
    Boolean(paymentMethod);

  return (
    <section
      className={`
        mx-auto
        w-full
        max-w-6xl
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-5
        py-8
        md:px-10
        lg:px-12
        ${className}
      `}
    >
      <CheckoutHeader
        packageName={selectedPackage.name}
      />

      <div
        className="
          mt-10
          grid
          grid-cols-1
          items-stretch
          gap-8
          lg:grid-cols-2
        "
      >
        <div className="order-2 lg:order-1">
          <BusinessDetailsForm
            value={businessDetails}
            onChange={onBusinessDetailsChange}
            onAddAddressManually={onAddAddressManually}
            className="h-full"
          />
        </div>

        <div className="order-1 lg:order-2">
          <BasketSummary
            package={selectedPackage}
            paymentMethod={paymentMethod}
            onPaymentMethodChange={
              onPaymentMethodChange
            }
            onRemove={onRemovePackage}
            onComplete={onComplete}
            isProcessing={isProcessing}
            canComplete={canComplete}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}