import { useState } from "react";

import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { CardContainer } from "../CardContainer/CardContainer";
import { Checkout } from "../Checkout/Checkout";
import { WifiIcon } from "../WifiIcon/WifiIcon";

import type { BusinessDetails } from "../BusinessDetailsForm/BusinessDetailsForm";
import type { PaymentMethod } from "../PaymentMethodSelector/PaymentMethodSelector";
import type { Package } from "../../types/Package";
import type { Feature } from "../FeatureList/FeatureList";

export interface PurchaseFlowPackage extends Package {
  title: string;
  accentText?: string;
  featuresTitle?: string;
  features?: Feature[];
  secondaryActionLabel: string;
}

export interface PurchaseFlowProps {
  packages: PurchaseFlowPackage[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

type PaymentStatus =
  | "idle"
  | "processing"
  | "success"
  | "error";

const initialDetails: BusinessDetails = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  postcode: "",
};

function mockPaymentGateway() {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => {
      resolve();
    }, 1500);
  });
}

export function PurchaseFlow({
  packages,
  columns = 3,
  className = "",
}: PurchaseFlowProps) {
  const [selectedPackage, setSelectedPackage] =
    useState<PurchaseFlowPackage | null>(null);

  const [businessDetails, setBusinessDetails] =
    useState<BusinessDetails>(initialDetails);

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>();

  const [paymentStatus, setPaymentStatus] =
    useState<PaymentStatus>("idle");

  const [orderReference, setOrderReference] =
    useState<string>();

  const [isLeavingCards, setIsLeavingCards] =
    useState(false);

  const handleSelectPackage = (
    pkg: PurchaseFlowPackage
  ) => {
    if (isLeavingCards) {
      return;
    }

    setIsLeavingCards(true);

    window.setTimeout(() => {
      setSelectedPackage(pkg);
      setPaymentStatus("idle");
      setIsLeavingCards(false);
    }, 200);
  };

  const handleRemovePackage = () => {
    setSelectedPackage(null);
    setPaymentMethod(undefined);
    setPaymentStatus("idle");
    setOrderReference(undefined);
    setIsLeavingCards(false);
  };

  const handlePayment = async () => {
    if (!selectedPackage) {
      return;
    }

    setPaymentStatus("processing");

    try {
      await mockPaymentGateway();

      setOrderReference(
        `ORD-${Date.now()
          .toString()
          .slice(-8)}`
      );

      setPaymentStatus("success");
    } catch {
      setPaymentStatus("error");
    }
  };

  const handleStartAgain = () => {
    setSelectedPackage(null);
    setBusinessDetails(initialDetails);
    setPaymentMethod(undefined);
    setPaymentStatus("idle");
    setOrderReference(undefined);
    setIsLeavingCards(false);
  };

  if (
    paymentStatus === "success" &&
    selectedPackage
  ) {
    return (
      <div
        className={`
          purchase-flow-success
          mx-auto
          w-full
          max-w-3xl
          ${className}
        `}
      >
        <section
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-8
            text-center
            shadow-sm
            md:p-12
          "
        >
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-cyan-400
              text-3xl
              font-bold
              text-white
            "
            aria-hidden="true"
          >
            ✓
          </div>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-[#14152f]
            "
          >
            Order complete
          </h2>

          <p className="mt-2 text-gray-600">
            Thanks,{" "}
            {businessDetails.contactName ||
              "your order"}{" "}
            has been successfully submitted.
          </p>

          <div
            className="
              mt-8
              rounded-xl
              bg-[#f1f1f3]
              p-6
              text-left
            "
          >
            <h3 className="text-lg font-bold text-[#14152f]">
              Order summary
            </h3>

            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-600">
                  Order reference
                </dt>

                <dd className="font-semibold text-[#14152f]">
                  {orderReference}
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-gray-600">
                  Package
                </dt>

                <dd className="font-semibold text-[#14152f]">
                  {selectedPackage.name}
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-gray-600">
                  Monthly price
                </dt>

                <dd className="font-semibold text-[#14152f]">
                  £
                  {selectedPackage.monthlyPrice.toFixed(
                    2
                  )}
                  /mth
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-gray-600">
                  Payment method
                </dt>

                <dd className="font-semibold capitalize text-[#14152f]">
                  {paymentMethod?.replace(
                    "-",
                    " "
                  ) ?? "Not specified"}
                </dd>
              </div>

              {businessDetails.email && (
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-600">
                    Email
                  </dt>

                  <dd className="font-semibold text-[#14152f]">
                    {businessDetails.email}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            This is currently using a simulated
            payment gateway. No real payment has been
            taken.
          </p>

          <Button
            type="button"
            onClick={handleStartAgain}
            className="mt-8"
          >
            Start another order
          </Button>
        </section>
      </div>
    );
  }

  if (selectedPackage) {
    return (
      <div
        className={`
          purchase-flow-enter
          ${className}
        `}
      >
        <Checkout
          package={selectedPackage}
          businessDetails={businessDetails}
          onBusinessDetailsChange={
            setBusinessDetails
          }
          paymentMethod={paymentMethod}
          onPaymentMethodChange={
            setPaymentMethod
          }
          onRemovePackage={
            handleRemovePackage
          }
          onComplete={handlePayment}
          isProcessing={
            paymentStatus === "processing"
          }
        />

        {paymentStatus === "error" && (
          <p
            role="alert"
            className="
              mt-4
              text-center
              text-sm
              font-semibold
              text-red-600
            "
          >
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`
        ${
          isLeavingCards
            ? "purchase-flow-exit pointer-events-none"
            : ""
        }
        ${className}
      `}
    >
      <CardContainer columns={columns}>
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            icon={<WifiIcon />}
            title={pkg.title}
            accentText={pkg.accentText}
            price={`£${pkg.monthlyPrice.toFixed(
              2
            )}/mth`}
            featuresTitle={pkg.featuresTitle}
            features={pkg.features}
            primaryAction={{
              label: "Order now",
              icon: "↗",
              onClick: () =>
                handleSelectPackage(pkg),
            }}
            secondaryAction={{
              label: pkg.secondaryActionLabel,
              icon: "↗",
            }}
          />
        ))}
      </CardContainer>
    </div>
  );
}