import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { CheckIcon } from "@/iconsComponents/all";

export default function ColorSelectionItem({ color = "red", checked = false }: { color: string, checked: boolean }) {
    const theme = useTheme()
    return (
        <Box width={"20px"} height={"20px"} borderRadius={"50%"} sx={{
            background: `
          linear-gradient(white, white) padding-box,
          linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) border-box
        `,
        }} border={"1px solid transparent"} >
            <Box bgcolor={color} width={"100%"} height={"100%"} borderRadius={"50%"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                {checked && <CheckIcon fill="white" width={"70%"} height={"70%"} />}

            </Box>

        </Box>
    )
}