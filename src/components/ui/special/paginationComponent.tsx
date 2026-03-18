import { Stack, Typography } from "@mui/material";
import { LeftArrowIcon, RightArrowIcon } from "@/iconsComponents/all";
import { useTheme } from "@mui/material";

export default function PaginationComponent({ pageIndex, setPageIndex, totalPages }: { pageIndex: number, setPageIndex: (pageIndex: number) => void, totalPages: number }) {
    const t = useTheme()
    function handleNext() {
        if (pageIndex < totalPages) {
            setPageIndex(pageIndex + 1)
        }
    }
    function handlePrevious() {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1)
        }
    }
    return (
        <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={"12px"}>
            <BlueCircleButton disabled={false} onClick={() => { }}>
                <Typography variant="inputLabel" color="white" fontSize={"20px"} >
                    {pageIndex > 9 ? pageIndex : `0${pageIndex}`}
                </Typography>
            </BlueCircleButton>
            <Typography variant="inputLabel" color="black" fontSize={"14px"} >
                of {totalPages}
            </Typography>
            <BlueCircleButton onClick={handlePrevious} disabled={pageIndex === 1}>
                <LeftArrowIcon />
            </BlueCircleButton>
            <BlueCircleButton onClick={handleNext} disabled={pageIndex === totalPages}>
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