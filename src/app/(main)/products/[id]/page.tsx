import ProductProfile from "@/features/ProductProfile/ProductProfile";
const products = [
  { id: 1, name: "Chair 1" },
  { id: 2, name: "Chair 2" },
  { id: 3, name: "Chair 3" },
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailsPage() {
  return <ProductProfile />;
}
