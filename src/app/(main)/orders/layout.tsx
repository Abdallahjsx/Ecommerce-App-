
import GuardedLayout from "@/components/layout/guardedLayout";

export default function MyProfileLayout({
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
