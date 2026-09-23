// src/components/PurchaseFlow/PurchaseFlow.tsx

import { useState } from "react";

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
}

export interface PurchaseFlowProps {
  packages: PurchaseFlowPackage[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const initialDetails: BusinessDetails = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  postcode: "",
};

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

  if (selectedPackage) {
    return (
      <div className={className}>
        <Checkout
          package={selectedPackage}
          businessDetails={businessDetails}
          onBusinessDetailsChange={setBusinessDetails}
          paymentMethod={paymentMethod}
          onPaymentMethodChange={setPaymentMethod}
          onRemovePackage={() => {
            setSelectedPackage(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <CardContainer columns={columns}>
        {packages.map((pkg) => (
          <Card
            key={pkg.id}
            icon={<WifiIcon />}
            title={pkg.title}
            accentText={pkg.accentText}
            price={`£${pkg.monthlyPrice.toFixed(2)}/mth`}
            featuresTitle={pkg.featuresTitle}
            features={pkg.features}
            primaryAction={{
              label: "Order now",
              icon: "↗",
              onClick: () => {
                setSelectedPackage(pkg);
              },
            }}
            secondaryAction={{
              label: `Explore ${pkg.title}`,
              icon: "↗",
            }}
          />
        ))}
      </CardContainer>
    </div>
  );
}