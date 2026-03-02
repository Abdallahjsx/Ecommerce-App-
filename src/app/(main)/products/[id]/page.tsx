import ProductProfile from "@/features/ProductProfile/ProductProfile";
import { products } from "@/features/ProductProfile/services/productDummyData";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailsPage() {
  return <ProductProfile />;
}