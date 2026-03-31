'use client';
import { Box, Typography } from "@mui/material";
import { CloseIcon } from "@/iconsComponents/all";

export default function CloasbleBox({ title = "All", onClose }: { title: string, onClose: () => void }) {
    return (


        <Box sx={{ display: "flex", flexDirection: "row", bgcolor: "#3DA7B6", borderRadius: "2px", p: "4px 8px", gap: "8px", alignItems: "center" }}>
            <Typography variant="subTitle" sx={{ fontSize: "14px", fontWeight: "400", color: "white", whiteSpace: "nowrap" }}>
                {title}
            </Typography>
            <CloseIcon width="8" height="8" cursor="pointer" onClick={onClose} />
        </Box>

    )


}