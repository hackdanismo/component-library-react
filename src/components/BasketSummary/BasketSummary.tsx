import type { Package } from "../../types/Package";

import { BasketItem } from "../BasketItem/BasketItem";
import { Button } from "../Button/Button";
import {
  PaymentMethodSelector,
  type PaymentMethod,
} from "../PaymentMethodSelector/PaymentMethodSelector";

export interface BasketSummaryProps {
  package: Package;

  paymentMethod?: PaymentMethod;
  onPaymentMethodChange?: (
    method: PaymentMethod
  ) => void;

  onRemove?: () => void;

  onComplete?: () => void;
  isProcessing?: boolean;
  canComplete?: boolean;

  className?: string;
}

export function BasketSummary({
  package: selectedPackage,
  paymentMethod,
  onPaymentMethodChange,
  onRemove,
  onComplete,
  isProcessing = false,
  canComplete = false,
  className = "",
}: BasketSummaryProps) {
  const completeDisabled =
    isProcessing || !canComplete;

  return (
    <section
      className={`
        flex
        h-full
        flex-col
        rounded-2xl
        bg-[#f1f1f3]
        p-7
        md:p-8
        ${className}
      `}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-[#14152f]">
          In your basket
        </h2>

        <span className="rounded bg-[#35364f] px-3 py-2 text-xs text-white">
          Powered by <strong>Stripe</strong>
        </span>
      </div>

      <BasketItem
        name={selectedPackage.name}
        description={selectedPackage.description}
        connectionFee={selectedPackage.connectionFee}
        monthlyPrice={selectedPackage.monthlyPrice}
        onRemove={onRemove}
      />

      <PaymentMethodSelector
        value={paymentMethod}
        onChange={onPaymentMethodChange}
      />

      <div className="mt-auto pt-6">
        <Button
          type="button"
          onClick={onComplete}
          disabled={completeDisabled}
          className={`
            w-full
            ${
              completeDisabled
                ? "cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-sm active:scale-100"
                : ""
            }
          `}
        >
          {isProcessing
            ? "Processing payment..."
            : "Complete order"}
        </Button>

        {!paymentMethod && (
          <p className="mt-3 text-center text-sm text-gray-600">
            Select a payment method to continue.
          </p>
        )}

        {paymentMethod && !canComplete && (
          <p className="mt-3 text-center text-sm text-gray-600">
            Complete your business details to continue.
          </p>
        )}
      </div>
    </section>
  );
}