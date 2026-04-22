"use client";

import { Gradient_Button } from "@/components/ui/gradientButton";
import GradientText from "@/components/ui/gradientText/gradientText";
import { Typography, Skeleton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useBrandInfo } from "../hooks/useBrandInfo";
import { toggleFollowBrand } from "../services";
import { useToaster } from "@/providers/ToasterProvider";
import { StarIcon } from "../Icons";

export default function Header({ brandId }: { brandId: number }) {
  const { data, loading, error } = useBrandInfo(brandId);

  const { showToast } = useToaster();
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);

  useEffect(() => {
    if (data) {
      setFollowersCount(data.followersCount);
    }
  }, [data]);

  const handleFollow = async () => {
    const prevFollowed = isFollowed;
    const prevCount = followersCount;

    setIsFollowed(!prevFollowed);
    setFollowersCount(prevFollowed ? prevCount - 1 : prevCount + 1);

    try {
      const res = await toggleFollowBrand(brandId);
      if (!res.success) {
        throw new Error(res.message?.en || "Failed to toggle follow");
      }
      showToast(
        prevFollowed ? "Unfollowed successfully" : "Followed successfully",
        "success",
      );
    } catch (err: any) {
      setIsFollowed(prevFollowed);
      setFollowersCount(prevCount);
      showToast(err.message || "Unauthorized - please sign in", "error");
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", mb: 4 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 5 }}
        alignItems={{ xs: "flex-start", md: "flex-start" }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 3, md: 5 }}
          alignItems="center"
          flex={1}
          width="100%"
        >
          {/* Logo - Circular on mobile, Rounded Square on desktop */}
          {loading ? (
            <Skeleton
              variant={{ xs: "circular", md: "rectangular" } as any}
              sx={{
                width: { xs: 120, md: 250 },
                height: { xs: 120, md: 250 },
                borderRadius: { xs: "50%", md: "12px" },
              }}
            />
          ) : (
            <Box
              sx={{
                width: { xs: 120, md: 250 },
                height: { xs: 120, md: 250 },
                position: "relative",
                borderRadius: { xs: "50%", md: "12px" },
                overflow: "hidden",
                border: { xs: "2px solid #1B2351", md: "none" },
                flexShrink: 0,
              }}
            >
              <Image
                fill
                src={data?.logoUrl || "/assets/images/User.png"}
                alt={data?.displayName || "brand logo"}
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}

          {/* Brand Info Block */}
          <Stack spacing={{ xs: 1, md: 2 }} flex={1}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 1, md: 3 }}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
              width="100%"
            >
              {loading ? (
                <Skeleton width={150} height={50} />
              ) : (
                <GradientText
                  text={data?.displayName || "Brand Name"}
                  fontSize={{ xs: 24, md: 48 } as any}
                />
              )}

              {/* Desktop Download App Button - Large */}
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Gradient_Button
                  variant="primary"
                  sx={{
                    height: 60,
                    px: 6,
                    fontSize: "18px",
                    fontWeight: 700,
                    borderRadius: "10px",
                  }}
                >
                  Go to download our app!
                </Gradient_Button>
              </Box>
            </Stack>

            {/* Desktop Follow/Message Buttons & Stats Row */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Stack direction="row" spacing={3}>
                <Gradient_Button
                  variant={isFollowed ? "gray" : "primary"}
                  sx={{ height: 40, px: 5, fontSize: "16px", fontWeight: 700 }}
                  onClick={handleFollow}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Gradient_Button>
                <Gradient_Button
                  variant="gray"
                  sx={{ height: 40, px: 5, fontSize: "16px", fontWeight: 700 }}
                >
                  Message
                </Gradient_Button>
              </Stack>
            </Stack>

            {/* Mobile Interaction Row (Stars + Small Download) */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Stack direction="row" spacing={0.5}>
                {[1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} fill="#47C0D2" />
                ))}
                <StarIcon fill="#E5E7EB" />
              </Stack>

              <Gradient_Button
                variant="primary"
                sx={{
                  height: 30,
                  px: 1.5,
                  fontSize: "10px",
                  borderRadius: "6px",
                  
                }}
              >
               <Typography sx={{fontSize:"10px"}}>Download our app!</Typography>
              </Gradient_Button>
            </Stack>

            {/* Stats */}
            <Stack direction="row" spacing={{ xs: 4, md: 6 }}>
              <Typography variant="h6" color="text.secondary">
                <Typography
                  variant="h5"
                  color="#000"
                  component="span"
                  mx={0.5}
                  sx={{ fontWeight: 800 }}
                >
                  {loading ? (
                    <Skeleton width={40} sx={{ display: "inline-block" }} />
                  ) : (
                    data?.totalReelLikes || 0
                  )}
                </Typography>
                Likes
              </Typography>
              <Typography variant="h6" color="text.secondary">
                <Typography
                  variant="h5"
                  color="#000"
                  component="span"
                  mx={0.5}
                  sx={{ fontWeight: 800 }}
                >
                  {loading ? (
                    <Skeleton width={40} sx={{ display: "inline-block" }} />
                  ) : followersCount > 1000 ? (
                    `${(followersCount / 1000).toFixed(0)}k`
                  ) : (
                    followersCount
                  )}
                </Typography>
                Followers
              </Typography>
            </Stack>
            {/* Desktop About (Restored Location) */}
            <Box sx={{ mt: 2, display: { xs: "none", md: "block" } }}>
              <GradientText text="Brand About" fontSize={28} />
              <Typography
                variant="body1"
                sx={{
                  color: "#4B5563",
                  mt: 1,
                  lineHeight: 1.6,
                  maxWidth: "900px",
                  fontSize: "16px",
                }}
              >
                {data?.description ||
                  "Founded by a small team of friends who loved good design and honest prices, NovaLane makes everyday essentials that feel thoughtful and a little joyful. We combine durable materials, clean lines, and a sprinkle of personality so our pieces work hard in real life."}
                <br />
                One-liner for socials: Everyday essentials, designed to last and
                made for living.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      {/* Mobile About Section (Below everything) */}
      <Box sx={{ mt: 4, display: { xs: "block", md: "none" } }}>
        <GradientText text="Brand About" fontSize={24} />
        <Typography
          variant="body1"
          sx={{
            color: "#4B5563",
            mt: 1.5,
            lineHeight: 1.6,
            fontSize: "14px",
          }}
        >
          {data?.description ||
            "Founded by a small team of friends who loved good design and honest prices, NovaLane makes everyday essentials that feel thoughtful and a little joyful. We combine durable materials, clean lines, and a sprinkle of personality so our pieces work hard in real life."}
          <br />
          One-liner for socials: Everyday essentials, designed to last and made
          for living.
        </Typography>
      </Box>

      {/* Mobile Action Buttons - Bottom of header */}
      <Stack
        direction="row"
        spacing={3}
        mt={4}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Gradient_Button
          variant={isFollowed ? "gray" : "primary"}
          sx={{ height: 48, fontSize: "18px", fontWeight: 700, width: "100%" }}
          onClick={handleFollow}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Gradient_Button>
        <Gradient_Button
          variant="gray"
          sx={{ height: 48, fontSize: "18px", fontWeight: 700, width: "100%" }}
        >
          Message
        </Gradient_Button>
      </Stack>
    </Box>
  );
}
