import type { Package } from "../../types/Package";

import { BasketItem } from "../BasketItem/BasketItem";
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
  className?: string;
}

export function BasketSummary({
  package: selectedPackage,
  paymentMethod,
  onPaymentMethodChange,
  onRemove,
  className = "",
}: BasketSummaryProps) {
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
    </section>
  );
}