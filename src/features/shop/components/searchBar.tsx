import { Box, Typography, Button } from "@mui/material";
import { SearchIcon, CloseIcon, ArrowDownIcon, CartIcon } from "@/iconsComponents/all";
import Skeleton from "@mui/material/Skeleton";
import { useTheme } from "@mui/material";
import { Divider } from "@mui/material";
import MenuElement from "@/components/ui/special/menuElement";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/store";
import { setMainCategory, setSearch } from "@/Redux/slices/shopFiltersSlice";
import { useGetCategories } from "../hooks/useLookUps.hook";
import { mainCategoryType } from "../types";
import { useEffect, useState } from "react";


export default function SearchBar() {
    const t = useTheme()
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { mainCategory, Search } = useAppSelector((state) => state.filters)
    const { data, isLoading, isFetching, isSuccess } = useGetCategories()
    const [searchValue, setSearchValue] = useState<string>("")
    useEffect(() => {
        if (searchValue === '') {
            dispatch(setSearch(""))
        }
    }, [searchValue])
    if (isLoading) {
        return (
            <Box display={"flex"} justifyContent={"space-around"} alignItems={"stretch"} mb={"40px"} gap={"32px"} width={"100%"}>
                <Box flexGrow={1} borderRadius={"4px"} height={"56px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" sx={{ borderRadius: "4px" }} />
                </Box>
                <Box sx={{ display: { xs: "none", lg: "flex" } }}>
                    <Skeleton animation="wave" variant="rectangular" width="160px" height="56px" sx={{ borderRadius: "4px" }} />
                </Box>
            </Box>
        )
    }
    return (
        <Box display={"flex"} justifyContent={"space-around"} alignItems={"stretch"} mb={"40px"} gap={"32px"}>
            <Box flexGrow={1} borderRadius={"4px"} height={"56px"} display={"flex"} justifyContent={"space-between"} bgcolor={"#ECEFF1"}>
                <MenuElement<mainCategoryType> options={data?.data} value={mainCategory?.name} onSelect={(item) => dispatch(setMainCategory(item))} getId={(item: mainCategoryType) => item.id} getLabel={(item: mainCategoryType) => item.name}>
                    <Box display={"flex"} alignItems={"center"} gap={"16px"} height={"100%"} padding={"10px 20px"} sx={{ cursor: "pointer" }}>
                        <Typography sx={{ textShadow: "none" }} fontFamily={"Inter"} variant="titleSpecial">{mainCategory?.name ?? "All"}</Typography>
                        <ArrowDownIcon />
                    </Box>
                </MenuElement>
                <input type="text" value={searchValue} placeholder="Search" style={{ all: "unset", width: "100%", padding: "16px 20px" }} onChange={(e) => setSearchValue(e.target.value)} />
                <Box display={"flex"} alignItems={"center"} gap={"16px"} height={"100%"} padding={"10px 20px"}>
                    <Box display={{ xs: "none", lg: "flex" }} gap={"16px"} height={"100%"} alignItems={"center"}>
                        <CloseIcon fill={t.palette.primary.main} width={"18px"} height={"18px"} onClick={() => {
                            dispatch(setSearch(""))
                            setSearchValue("")
                        }} style={{ cursor: "pointer" }} />
                        <Divider orientation="vertical" variant="fullWidth" flexItem sx={{ bgcolor: "#7C7C7C" }} />
                    </Box>
                    <Box style={{ cursor: "pointer" }} mt={"5px"} onClick={() => {
                        dispatch(setSearch(searchValue))

                    }}>

                        <SearchIcon width={"22px"} height={"22px"} />

                    </Box>
                </Box>
            </Box>
            <Button onClick={() => router.push("/cart")} sx={{ width: "fit-content", bgcolor: t.palette.secondary.main, color: "white", borderRadius: "4px", padding: "16px 15px", display: { xs: "none", lg: "flex" } }}>
                <CartIcon />
                <Typography color="white" variant="captionSmall" fontSize={"20px"} sx={{ textTransform: "none" }} ml={"10px"}>View Cart</Typography>
            </Button>
        </Box>
    )
}