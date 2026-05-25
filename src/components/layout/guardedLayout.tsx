"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/store";

export default function GuardedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const token = useAppSelector((state) => state.authAlluvo.token);
    const router = useRouter();

    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        if (!token) {
            router.replace("/");
        } else {
            setAuthorized(true);
        }
    }, [token, router]);

    if (!authorized) return null;

    return children;
}