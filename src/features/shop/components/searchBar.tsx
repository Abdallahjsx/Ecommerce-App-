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
import { useSearchParams } from "next/navigation";


export default function SearchBar({ categories, isLoading }: { categories: mainCategoryType[], isLoading: boolean }) {
    const t = useTheme()
    const router = useRouter()
    const dispatch = useAppDispatch()
    const searchParams = useSearchParams()
    const selectedCategories = searchParams.get("categoryId")?.split(",") || []
    const search = searchParams.get("search") || ""
    const params = new URLSearchParams(searchParams)
    // const { mainCategory, Search } = useAppSelector((state) => state.filters)
    const { token } = useAppSelector((state) => state.authAlluvo)
    const [searchValue, setSearchValue] = useState<string>(search)
    let value = "All"
    if (selectedCategories?.length === 1) {
        value = categories.find((category) => String(category.id) === selectedCategories[0])?.name || "All"
    } else if (selectedCategories?.length > 1) {
        value = "Customized"
    }
    useEffect(() => {
        if (searchValue === '') {
            handleSearch()
        }
    }, [searchValue])
    function handleCategorySelect(category: mainCategoryType) {
        params.set("categoryId", category.id)
        params.set("page", "1")
        router.push(`?${params.toString()}`)
    }




    function handleSearch() {
        if (searchValue.trim().length > 0) {
            params.set("search", searchValue)
            params.set("page", "1")
            router.push(`?${params.toString()}`)
        } else {
            params.delete("search")
            params.set("page", "1")
            router.push(`?${params.toString()}`)
        }

    }
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
                <MenuElement<mainCategoryType> options={categories} value={value} onSelect={(item) => handleCategorySelect(item)} getId={(item: mainCategoryType) => item.id} getLabel={(item: mainCategoryType) => item.name}>
                    <Box display={"flex"} alignItems={"center"} gap={"16px"} height={"100%"} padding={"10px 20px"} sx={{ cursor: "pointer" }}>
                        <Typography sx={{ textShadow: "none" }} fontFamily={"Inter"} variant="titleSpecial">{value}</Typography>
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
                        handleSearch()
                    }}>

                        <SearchIcon width={"22px"} height={"22px"} />

                    </Box>
                </Box>
            </Box>
            <Button onClick={() => {
                if (token) {
                    router.push("/cart")
                } else {
                    router.push("/login?redirectTo=/cart")
                }
            }
            } sx={{ width: "fit-content", bgcolor: t.palette.secondary.main, color: "white", borderRadius: "4px", padding: "16px 15px", display: { xs: "none", lg: "flex" } }}>
                <CartIcon />
                <Typography color="white" variant="captionSmall" fontSize={"20px"} sx={{ textTransform: "none" }} ml={"10px"}>View Cart</Typography>
            </Button>
        </Box>
    )
}