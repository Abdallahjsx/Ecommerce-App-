import * as React from 'react';
import { useRef, useState, useLayoutEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Card, Box, Typography } from '@mui/material';


type Props = {
    label?: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    error: boolean | undefined;
    helperText: string | undefined;
    options: { value: string, label: string }[];
    placeholder?: string;
    name?: string;
}

export default function SelectElement({ name, label, value, onChange, error, helperText, options, placeholder }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState<number>(0);

    useLayoutEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.offsetWidth);
        }
    }, []);

    return (
        <FormControl sx={{ m: 1, minWidth: 120, width: "100%", mx: "0px" }}>
            <Typography variant="h6" sx={{ color: "#1B2351", fontWeight: "500", fontSize: "14px" }}>
                {label}
            </Typography>
            <Card
                ref={cardRef}
                sx={{
                    p: "0px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid",
                    borderColor: error ? "red" : "#E5E7EB",
                    borderRadius: "8px",
                    boxShadow: "none",
                    transition: "all 0.3s ease",
                    "&:focus-within": {
                        borderColor: "#1B2351",
                        boxShadow: "0 0 0 2px rgba(27, 35, 81, 0.1)",
                    },
                }}
            >

                <Select
                    name={name}
                    disabled={options.length === 0}
                    fullWidth
                    value={value}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <Box sx={{ color: "#9CA3AF", fontWeight: "400" }}>{placeholder}</Box>;
                        }
                        return selected;
                    }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                width: cardWidth,
                                marginTop: "4px",
                                borderRadius: "8px",
                                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                                "& .MuiMenuItem-root": {
                                    fontSize: "14px",
                                    padding: "10px 12px",
                                }
                            }
                        }
                    }}
                    sx={{
                        width: "100%",
                        backgroundColor: "transparent",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#1B2351",
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                        "& .MuiSelect-select": {
                            padding: "12px 0px",
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value || option.label} value={option.value || option.label}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </Card>
            {error && <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>}
        </FormControl>
    );
}
