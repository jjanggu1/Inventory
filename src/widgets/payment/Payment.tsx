"use client";

import PaymentOrderSummary from "@/entities/payment/ui/PaymentOrderSummary";
import PaymentTypeSelection from "@/entities/payment/ui/PaymentTypeSelection";

export default function Payment() {
  return (
    <div className="lg:flex h-[calc(100dvh-56px)] md:h-[calc(100dvh-67px)] top-[-56px] md:top-[-67px]">
      <PaymentTypeSelection />
      <PaymentOrderSummary />
    </div>
  );
}
