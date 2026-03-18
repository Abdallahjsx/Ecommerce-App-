import { Box, Typography, Button } from "@mui/material";
import { SearchIcon, CloseIcon, ArrowDownIcon, CartIcon } from "@/iconsComponents/all";
import { useTheme } from "@mui/material";
import { Divider } from "@mui/material";
import MenuElement from "@/components/ui/special/menuElement";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const t = useTheme()
    const router = useRouter()
    return (
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"stretch"} mb={"40px"} gap={"32px"}>
            <Box flexGrow={1} borderRadius={"4px"} height={"56px"} display={"flex"} justifyContent={"space-between"} bgcolor={"#ECEFF1"}>
                <MenuElement options={["Shoes", "Clothes", "Accessories"]} value={"Shoes"}>
                    <Box display={"flex"} alignItems={"center"} gap={"16px"} height={"100%"} padding={"10px 20px"} sx={{ cursor: "pointer" }}>
                        <Typography sx={{ textShadow: "none" }} fontFamily={"Inter"} variant="titleSpecial">Shoes</Typography>
                        <ArrowDownIcon />
                    </Box>
                </MenuElement>
                <input type="text" placeholder="Search" style={{ all: "unset", width: "100%", padding: "16px 20px" }} />
                <Box display={"flex"} alignItems={"center"} gap={"16px"} height={"100%"} padding={"10px 20px"}>
                    <Box display={{ xs: "none", lg: "flex" }} gap={"16px"} height={"100%"} alignItems={"center"}>
                        <CloseIcon fill={t.palette.primary.main} width={"18px"} height={"18px"} />
                        <Divider orientation="vertical" variant="fullWidth" flexItem sx={{ bgcolor: "#7C7C7C" }} />
                    </Box>
                    <SearchIcon width={"22px"} height={"22px"} />

                </Box>
            </Box>
            <Button onClick={() => router.push("/cart")} sx={{ width: "fit-content", bgcolor: t.palette.secondary.main, color: "white", borderRadius: "4px", padding: "16px 15px", display: { xs: "none", lg: "flex" } }}>
                <CartIcon />
                <Typography color="white" variant="captionSmall" fontSize={"20px"} sx={{ textTransform: "none" }} ml={"10px"}>View Cart</Typography>
            </Button>
        </Box>
    )
}