import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function GradientFilterCheckBox({ label, checked, onChange }: { label: string, checked?: boolean, onChange: (label: string) => void }) {
    const t = useTheme()
    return (
        <Box
            onClick={() => {
                onChange(label)
            }}
            sx={{


                background: `
                    linear-gradient(#fff, #fff) padding-box,
                    linear-gradient(90deg, ${t.palette.primary.main}, ${t.palette.secondary.main}) border-box
                `,
                borderRadius: "4px",
                border: "2px solid transparent",
                cursor: "pointer",

            }}
        >
            <Box
                sx={{
                    borderRadius: "4px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    backgroundColor: t.tokens.backgroundColors.main,
                    padding: "8px 16px"
                }}
            >
                <Typography variant="bodyMedium" fontWeight="400" color="text.primary">
                    {label}
                </Typography>
                <Checkbox checked={checked} color={"secondary"} sx={{ color: t.palette.secondary.main }} />
            </Box>

        </Box>
    );
}