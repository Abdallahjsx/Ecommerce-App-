import { redirect } from "next/navigation";

export default function BrandProfilePage({ params }: { params: { id: string } }) {
  redirect(`/brandProfile/${params.id}/reels`);
}
