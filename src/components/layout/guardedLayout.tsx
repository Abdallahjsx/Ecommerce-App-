"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/store";

export default function GuardedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const token = useAppSelector((state) => state.auth.token);
    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (!token) {
            router.replace("/home");
        } else {
            setAuthorized(true);
        }
    }, [token, router]);

    if (!authorized) return null;

    return children;
}