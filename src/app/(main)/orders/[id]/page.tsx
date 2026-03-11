import OrderHeader from "@/features/orderDetails/components/OrderHeader";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function OrderDetailsPage() {
  return (
    <>
      <OrderHeader />
    </>
  );
}
