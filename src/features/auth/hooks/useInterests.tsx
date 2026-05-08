import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
    getInterests,
    setInterests,
} from "../services/auth";
// get interests
export const useInterests = () => {
    return useQuery({
        queryKey: ["interests"],
        queryFn: getInterests,
    });
};
// set interests
export const useSetInterests = (callBackOnSuccess: () => void) => {
    const [errorMessage, setErrorMessage] = useState("");
    const mutation = useMutation({
        mutationFn: (interestIds: number[]) => setInterests(interestIds),
        onSuccess: () => {
            setErrorMessage("")
            callBackOnSuccess()
        },
        onError: (error: any) => {
            setErrorMessage(
                error?.response?.data?.errors?.[0]?.en ??
                error?.response?.data?.message?.en,
            );
        },
    });
    return { ...mutation, errorMessage }
};