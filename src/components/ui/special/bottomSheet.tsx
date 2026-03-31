import { Sheet } from "react-modal-sheet";
import { useState } from "react";
export default function BottomSheet({ open, setOpen, children }: { open: boolean, setOpen: (open: boolean) => void, children: React.ReactNode }) {
    return (
        <Sheet detent="content" dragCloseThreshold={0.9} isOpen={open} onClose={() => setOpen(false)}  >
            <Sheet.Container>
                <Sheet.Header disableDrag={false} />
                <Sheet.Content disableDrag={true}>
                    {children}
                </Sheet.Content>
            </Sheet.Container>
        </Sheet>
    )
}
