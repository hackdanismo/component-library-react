export interface BasketItemProps {
  name: string;
  description?: string;
  connectionFee: number;
  monthlyPrice: number;
  onRemove?: () => void;
}

function formatPrice(price: number) {
  return `£${price.toFixed(2)}`;
}

export function BasketItem({
  name,
  description,
  connectionFee,
  monthlyPrice,
  onRemove,
}: BasketItemProps) {
  return (
    <div className="rounded-lg border border-gray-600 bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <p className="font-semibold text-gray-700">
          {name}
          {description && ` (${description})`}
        </p>

        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            aria-label={`Remove ${name}`}
            className="
              flex h-5 w-5
              items-center justify-center
              rounded
              bg-[#55c6d5]
              text-xs font-bold
              text-white
            "
          >
            ×
          </button>
        )}
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="font-bold text-[#17172f]">
            Connection fee
          </p>

          <p className="text-sm text-gray-600">
            {formatPrice(connectionFee)}
            {connectionFee === 0 && " (Free connection)"}
          </p>
        </div>

        <div>
          <p className="font-bold text-[#17172f]">
            Monthly rental
          </p>

          <p className="text-sm text-gray-600">
            {formatPrice(monthlyPrice)}
          </p>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className="flex items-center gap-3">
        <strong className="text-lg text-[#17172f]">
          Total
        </strong>

        <span className="text-xl text-gray-600">
          {formatPrice(monthlyPrice + connectionFee)}
        </span>
      </div>
    </div>
  );
}