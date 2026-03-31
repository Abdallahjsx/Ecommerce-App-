"use client";

import { Dialog, Box, Typography, Stack, useTheme, IconButton } from "@mui/material";
import { CloseIcon } from "@/iconsComponents/all";
import { ProductColorSize, AvailableSize } from "@/types";
import MenuElement from "../special/menuElement";
import { useState, useEffect } from "react";
import Gradient_Button from "../gradientButton/Gradient_Button";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setOpenAddToCartDialog } from "@/Redux/slices/addTocartDialogSlice";

interface AddToCartDialogProps {
    onAdd: (productId: string, color: string, size: string, quantity: number) => void;
}

export default function AddToCartDialog({
    onAdd,
}: AddToCartDialogProps) {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { openAddToCartDialog, availableColors, productId } = useAppSelector((state) => state.addToCartDialog);

    const [selectedColor, setSelectedColor] = useState<ProductColorSize | null>(null);
    const [selectedSize, setSelectedSize] = useState<AvailableSize | null>(null);
    const [quantity, setQuantity] = useState(1);

    // Sync initial state when dialog opens with colors
    useEffect(() => {
        if (openAddToCartDialog && availableColors.length > 0) {
            const firstColor = availableColors[0];
            setSelectedColor(firstColor);
            setSelectedSize(firstColor.availableSizes[0] || null);
            setQuantity(1);
        }
    }, [openAddToCartDialog, availableColors]);

    // Sync size when color changes
    useEffect(() => {
        if (selectedColor && selectedColor.availableSizes.length > 0) {
            setSelectedSize(selectedColor.availableSizes[0]);
            setQuantity(1);
        } else if (selectedColor) {
            setSelectedSize(null);
            setQuantity(0);
        }
    }, [selectedColor]);

    const handleIncrease = () => {
        if (selectedSize && quantity < selectedSize.quantity) {
            setQuantity((prev) => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleAdd = () => {
        if (selectedColor && selectedSize && quantity > 0 && productId) {
            onAdd(productId, selectedColor.name, selectedSize.size, quantity);
            dispatch(setOpenAddToCartDialog(false));
        }
    };

    const onClose = () => {
        dispatch(setOpenAddToCartDialog(false));
    };

    if (!availableColors || availableColors.length === 0) return null;

    return (
        <Dialog
            open={openAddToCartDialog}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: "16px",
                        padding: "32px",
                        width: "100%",
                        maxWidth: "440px",
                        position: "relative",
                        background: theme.tokens.backgroundColors.main,
                    },
                },
            }}
        >
            {/* Close Icon Top Right */}
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    color: theme.tokens.mainColors.primary,
                    // "&:hover": { bgcolor: "rgba(27, 35, 81, 0.05)" }
                }}
            >
                <CloseIcon
                    fill={theme.tokens.mainColors.primary}
                    width="14"
                    height="14"
                    style={{ cursor: "pointer" }}
                />
            </IconButton>

            <Typography
                variant="titleSmall"
                sx={{
                    fontSize: "24px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginBottom: "32px",
                    fontFamily: "Montserrat",
                    color: theme.tokens.typographyColors.title,
                }}
            >
                Add to Cart
            </Typography>

            <Stack spacing={3}>
                {/* Color Dropdown */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            marginBottom: "8px",
                            color: theme.tokens.typographyColors.body,
                            fontFamily: "Poppins",
                        }}
                    >
                        Select Color
                    </Typography>
                    <MenuElement<ProductColorSize>
                        options={availableColors}
                        value={selectedColor?.name}
                        onSelect={(item) => setSelectedColor(item)}
                        getId={(item) => item.name}
                        getLabel={(item) => item.name}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "48px",
                                borderRadius: "8px",
                                border: `1px solid ${theme.tokens.separatingColors.border}`,
                                display: "flex",
                                alignItems: "center",
                                padding: "0 16px",
                                cursor: "pointer",
                                justifyContent: "space-between",
                                bgcolor: "rgba(27, 35, 81, 0.02)",
                            }}
                        >
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Box
                                    sx={{
                                        width: "16px",
                                        height: "16px",
                                        borderRadius: "50%",
                                        bgcolor: selectedColor?.hexCode || "transparent",
                                        border: `1px solid ${theme.tokens.separatingColors.border}`,
                                    }}
                                />
                                <Typography sx={{ fontSize: "14px", color: theme.tokens.typographyColors.body }}>
                                    {selectedColor?.name || "Choose Color"}
                                </Typography>
                            </Stack>
                            <Typography sx={{ fontSize: "10px", opacity: 0.5 }}>▼</Typography>
                        </Box>
                    </MenuElement>
                </Box>

                {/* Size Dropdown */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            marginBottom: "8px",
                            color: theme.tokens.typographyColors.body,
                            fontFamily: "Poppins",
                        }}
                    >
                        Select Size
                    </Typography>
                    <MenuElement<AvailableSize>
                        options={selectedColor?.availableSizes || []}
                        value={selectedSize?.size}
                        onSelect={(item) => {
                            setSelectedSize(item);
                            setQuantity(1);
                        }}
                        getId={(item) => item.size}
                        getLabel={(item) => item.size}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                height: "48px",
                                borderRadius: "8px",
                                border: `1px solid ${theme.tokens.separatingColors.border}`,
                                display: "flex",
                                alignItems: "center",
                                padding: "0 16px",
                                cursor: "pointer",
                                justifyContent: "space-between",
                                bgcolor: "rgba(27, 35, 81, 0.02)",
                            }}
                        >
                            <Typography sx={{ fontSize: "14px", color: theme.tokens.typographyColors.body }}>
                                {selectedSize?.size || "Choose Size"}
                            </Typography>
                            <Typography sx={{ fontSize: "10px", opacity: 0.5 }}>▼</Typography>
                        </Box>
                    </MenuElement>
                    {selectedSize && (
                        <Typography
                            variant="caption"
                            sx={{
                                mt: 1,
                                display: "block",
                                color: theme.tokens.typographyColors.hint,
                                fontSize: "12px"
                            }}
                        >
                            Available: {selectedSize.quantity} units
                        </Typography>
                    )}
                </Box>

                {/* Quantity Counter */}
                <Box>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            marginBottom: "12px",
                            color: theme.tokens.typographyColors.body,
                            fontFamily: "Poppins",
                        }}
                    >
                        Quantity
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                        <Box
                            component="img"
                            src="/assets/icons/minus-icon.svg"
                            alt="minus"
                            onClick={handleDecrease}
                            sx={{
                                width: "28px",
                                height: "28px",
                                cursor: quantity > 1 ? "pointer" : "not-allowed",
                                opacity: quantity > 1 ? 1 : 0.4
                            }}
                        />

                        <Box
                            sx={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "50%",
                                background: theme.tokens.mainColors.white,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: theme.tokens.buttons.boxShadow,
                                border: `1px solid ${theme.tokens.separatingColors.border}`,
                            }}
                        >
                            <Typography sx={{ fontWeight: 600, fontSize: "20px", color: theme.tokens.typographyColors.title }}>
                                {quantity}
                            </Typography>
                        </Box>

                        <Box
                            component="img"
                            src="/assets/icons/plus-icon.svg"
                            alt="plus"
                            onClick={handleIncrease}
                            sx={{
                                width: "28px",
                                height: "28px",
                                cursor: (selectedSize && quantity < selectedSize.quantity) ? "pointer" : "not-allowed",
                                opacity: (selectedSize && quantity < selectedSize.quantity) ? 1 : 0.4
                            }}
                        />
                    </Stack>
                </Box>

                {/* Add Button */}
                <Box sx={{ mt: 4 }}>
                    <Gradient_Button
                        variant="primary"
                        onClick={handleAdd}
                        disabled={!selectedSize || quantity === 0}
                        sx={{ width: "100%", height: "56px" }}
                    >
                        ADD TO CART
                    </Gradient_Button>
                </Box>
            </Stack>
        </Dialog>
    );
}
