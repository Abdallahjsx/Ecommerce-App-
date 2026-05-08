"use client";
import { Box, Typography, Stack } from "@mui/material";
import { GradientCloseIcon } from "@/iconsComponents/all";
import Image from "next/image";
import { useInterests, useSetInterests } from "@/features/auth/hooks/useInterests";
import { useState } from "react";
import ErrorBox from "@/components/ui/special/errorBox";
import { CircularProgress } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/Redux/store";
import { setStep } from "@/Redux/slices/otpVerificationSlice";
import { useEffect } from "react";

type interest = {
    id: number
    name: string
}
export default function Interests() {
    const router = useRouter()
    const handleComplete = () => {
        router.replace("/home")
    }
    const [interestIds, setInterestIds] = useState<number[]>([])
    const { data: interests, isLoading, isError } = useInterests()
    const { mutate: setInterests, isPending: isSetInterestsPending, isError: isSetInterestsError, error: setInterestsErrorMessage, isSuccess: isSetInterestsSuccess } = useSetInterests(handleComplete)
    const handleAdd = (id: number) => {
        const newInterests = [...interestIds]
        if (interestIds.includes(id)) {
            setInterestIds(interestIds.filter((item) => item !== id))
        } else {
            newInterests.push(id)
            setInterestIds(newInterests)
        }

    }
    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100%", minHeight: "50vh" }}>
            <CircularProgress size={"50px"} color="primary" />
        </Box>
    }
    if (isError) {
        return <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100%", minHeight: "50vh" }}>
            <ErrorBox errorMessage="Something Went Wrong" />
        </Box>
    }
    return (
        <Stack flex={1} flexDirection="column" justifyContent="center" alignItems="center" spacing={1} overflow={"hidden"} height={"100%"}>
            <Box p={3} width={"100%"} display={"flex"} justifyContent={"center"}>
                <Image src="/assets/images/interests.svg" alt="interests" width={255}
                    height={225}
                    style={{ objectFit: "cover" }} />
            </Box>
            <Box width={"70%"}>
                <Typography variant="subTitle" fontSize={"25px"} fontWeight={600} color="#1B2351">What’s your Interests?</Typography>
                <Stack mx={"auto"} gap={"10px"} flexWrap={"wrap"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} maxHeight={"300px"} my={"20px"} px={"20px"}>
                    {interests?.data?.map((interest: interest) => (
                        <InterestBox key={interest.id} interest={interest} isSelected={interestIds.includes(interest.id)} handleAdd={handleAdd} />
                    ))}
                </Stack>
                <Box width={"80%"} mx={"auto"} display={"flex"} my={"20px"}>
                    {interestIds.length === 0 &&
                        < Gradient_Button
                            disabled={isSetInterestsPending}
                            onClick={() => {
                                handleComplete()
                            }}
                            type="submit"
                            size="large"
                        >
                            skip
                        </Gradient_Button>
                    }
                    {interestIds.length > 0 && <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"10px"}>
                        <Gradient_Button
                            disabled={isSetInterestsPending}
                            onClick={() => {
                                setInterests(interestIds)
                            }}
                            type="submit"
                            size="large"
                        >
                            {isSetInterestsPending ? <CircularProgress size={30} sx={{ color: "white", p: "5px" }} /> : "continue"}
                        </Gradient_Button>
                        <Box
                            sx={{

                                width: "80%",
                                mx: "auto"

                            }}
                        >
                            {isSetInterestsError && (
                                <ErrorBox errorMessage={setInterestsErrorMessage && setInterestsErrorMessage !== " " ? setInterestsErrorMessage : "Something went wrong. Please try again later."} />
                            )}
                        </Box>

                    </Box>}
                </Box>
            </Box>


        </Stack >
    )
}
function InterestBox({ interest, isSelected, handleAdd }: { interest: interest, isSelected: boolean, handleAdd: (interestId: number) => void }) {

    return (
        <Box width={"fit-content"} borderRadius={"24px"} p={isSelected ? "2px" : "0px"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{ background: isSelected ? "linear-gradient(90deg, #1B2351 0%, #47C0D2 100%)" : "transparent", boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.15)", border: !isSelected ? "2px solid #E0E0E0" : "none", cursor: "pointer" }} onClick={() => {
            handleAdd(interest.id)
        }}>
            <Box width={"100%"} p={"8px"} bgcolor={"white"} borderRadius={"22px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                {isSelected && <Box mt={"3px"} width={"25px"} height={"25px"} display={"flex"} alignItems={"center"} justifyContent={"center"} p={"0px"}>
                    <GradientCloseIcon />
                </Box>}
                <Typography variant="subTitle" fontSize={"18px"} fontWeight={600} color="gray">{interest.name}</Typography>
            </Box>
        </Box>
    )
}