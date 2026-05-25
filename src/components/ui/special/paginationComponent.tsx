import { Stack, Typography } from "@mui/material";
import { LeftArrowIcon, RightArrowIcon } from "@/iconsComponents/all";
import { useTheme } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaginationComponent({ totalPages }: { totalPages: number }) {
    const t = useTheme()
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page") || 1);
    const params = new URLSearchParams(searchParams.toString());
    function handleNext() {
        if (page < totalPages) {
            params.set("page", (page + 1).toString());
            router.push(`/shop?${params.toString()}`);
        }
    }
    function handlePrevious() {
        if (page > 1) {
            params.set("page", (page - 1).toString());
            router.push(`/shop?${params.toString()}`);
        }
    }
    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"12px"}>
            <BlueCircleButton disabled={false} onClick={() => { }}>
                <Typography variant="inputLabel" color="white" fontSize={"20px"} >
                    {page > 9 ? page : `0${page}`}
                </Typography>
            </BlueCircleButton>
            <Typography variant="inputLabel" color="black" fontSize={"14px"} >
                of {totalPages}
            </Typography>
            <BlueCircleButton onClick={handlePrevious} disabled={page === 1}>
                <LeftArrowIcon />
            </BlueCircleButton>
            <BlueCircleButton onClick={handleNext} disabled={page === totalPages}>
                <RightArrowIcon />
            </BlueCircleButton>
        </Stack>
    )
}


export function BlueCircleButton({ children, onClick, disabled }: { children: React.ReactNode, onClick: () => void, disabled: boolean }) {
    const t = useTheme()
    return (
        <Stack onClick={onClick} sx={{ cursor: "pointer" }} width={"48px"} height={"48px"} borderRadius={"50%"} bgcolor={disabled ? t.tokens.buttonsColors.primaryDisabled : t.tokens.buttonsColors.primary} justifyContent={"center"} alignItems={"center"}>
            {children}
        </Stack>
    )
}