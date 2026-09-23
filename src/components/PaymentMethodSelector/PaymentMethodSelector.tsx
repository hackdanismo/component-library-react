export type PaymentMethod =
  | "link"
  | "apple-pay"
  | "card"
  | "bank";

export interface PaymentMethodSelectorProps {
  value?: PaymentMethod;
  onChange?: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({
  value,
  onChange,
}: PaymentMethodSelectorProps) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => onChange?.("link")}
          className="
            rounded-md
            bg-[#00d66f]
            px-4 py-3
            font-bold
            text-black
          "
        >
          Link
        </button>

        <button
          type="button"
          onClick={() => onChange?.("apple-pay")}
          className="
            rounded-md
            bg-black
            px-4 py-3
            font-semibold
            text-white
          "
        >
           Pay
        </button>
      </div>

      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300" />
        <span className="text-sm text-gray-600">
          or
        </span>
        <div className="h-px flex-1 bg-gray-300" />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-500 bg-white">
        <label className="flex cursor-pointer items-center gap-4 border-b border-gray-300 px-5 py-4">
          <input
            type="radio"
            name="payment"
            checked={value === "card"}
            onChange={() => onChange?.("card")}
          />

          <span>💳</span>
          <span className="text-sm font-semibold">
            Card
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-4 px-5 py-4">
          <input
            type="radio"
            name="payment"
            checked={value === "bank"}
            onChange={() => onChange?.("bank")}
          />

          <span>🏦</span>
          <span className="text-sm font-semibold">
            Bank
          </span>
        </label>
      </div>
    </div>
  );
}