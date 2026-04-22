import ProductProfile from "@/features/ProductProfile/ProductProfile";
import { getProductDetails } from "@/features/ProductProfile/services";
// const products = [
//   { id: 1, name: "Chair 1" },
//   { id: 2, name: "Chair 2" },
//   { id: 3, name: "Chair 3" },
// ]; 

// export async function generateStaticParams() {
//   return products.map((product) => ({
//     id: product.id.toString(),
//   }));
// }

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = await getProductDetails(params.id);
  return <ProductProfile product={product.data} />;
}
