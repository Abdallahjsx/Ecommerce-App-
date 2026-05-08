

import { Box, Typography } from "@mui/material";
import Image from "next/image";
export default function GenderPicker({ selectedGender, setSelectedGender, helperText, error }: { selectedGender: string | "Male" | "Female", setSelectedGender: (value: "Male" | "Female") => void, helperText?: string | null | undefined, error?: boolean }) {

    return <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "20px",
            width: "100%",
        }}
    >
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"center"} gap={10} width={"100%"}>
            <Typography variant="inputLabel" sx={{  fontSize: "16px", color: "primary.main" }}>Gender</Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                {/* Male */}
                <Box
                    onClick={() => {
                        setSelectedGender("Male");
                    }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        transform: selectedGender === "Male" ? "scale(1.05)" : "scale(1)",
                        transition: "0.2s ease",
                    }}
                >
                    <Box sx={{
                        bgcolor: selectedGender === "Male" ? "#1B2351" : "gray",
                        boxShadow: selectedGender === "Male" ? "0 0 8px #1B2351" : "0 0 4px #0000001A",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        transition: "0.2s ease",
                    }}>
                        <Image
                            src="/assets/icons/maleIcon.svg"
                            alt="Male Icon"
                            width={20}
                            height={20}
                            style={{
                                objectFit: "contain",
                                filter: selectedGender === "Male" ? "drop-shadow(0 0 2px #1B2351)" : "none",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "11px",
                            color: selectedGender === "Male" ? "#1B2351" : "#6F7073",
                        }}
                    >
                        Male
                    </Typography>
                </Box>

                {/* Female */}
                <Box
                    onClick={() => {
                        setSelectedGender("Female");
                    }}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "pointer",
                        transform: selectedGender === "Female" ? "scale(1.05)" : "scale(1)",
                        transition: "0.2s ease",
                    }}
                >
                    <Box sx={{
                        bgcolor: selectedGender === "Female" ? "#1B2351" : "gray",
                        boxShadow: selectedGender === "Female" ? "0 0 8px #1B2351" : "0 0 4px #0000001A",
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "none",
                        transition: "0.2s ease",
                    }}>
                        <Image
                            src="/assets/icons/femaleIcon.svg"
                            alt="Female Icon"
                            width={20}
                            height={20}
                            style={{
                                objectFit: "contain",
                                filter: selectedGender === "Female" ? "drop-shadow(0 0 2px #1B2351)" : "none",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "11px",
                            color: selectedGender === "Female" ? "#1B2351" : "#6F7073",
                        }}
                    >
                        Female
                    </Typography>
                </Box>
            </Box>
        </Box>
        {error && <Typography variant="body2" color="error" sx={{ width: "100%", textAlign: "center" }}>{helperText}</Typography>}
    </Box>
}
