import { Sheet } from "react-modal-sheet";
import { useState } from "react";
import { Box } from "@mui/material";
export default function BottomSheet({ open, setOpen, children }: { open: boolean, setOpen: (open: boolean) => void, children: React.ReactNode }) {
    return (
        <Box>
            <Sheet detent="content" dragCloseThreshold={0.9} isOpen={open} onClose={() => setOpen(false)} >
                <Sheet.Container>
                    <Sheet.Header disableDrag={false} />
                    <Sheet.Content disableDrag={true}>
                        {children}
                    </Sheet.Content>
                </Sheet.Container>
            </Sheet>
        </Box>
    )
}
