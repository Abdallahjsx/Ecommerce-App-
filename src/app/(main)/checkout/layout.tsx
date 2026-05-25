
import GuardedLayout from "@/components/layout/guardedLayout";

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <GuardedLayout>
            {children}
        </GuardedLayout>
    );
}
