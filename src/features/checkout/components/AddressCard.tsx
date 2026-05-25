"use client";

import { Box, Typography } from "@mui/material";
import { CheckedIcon } from "@/iconsComponents/all";
import type { AddressType } from "@/features/checkout/types";
export default function AddressCard({ isSelected, address, index, onSelect }: { isSelected: boolean, address: AddressType, index: number, onSelect?: () => void }) {
  const street = "Mo Nagieb"
  const country = "Egypt"
  const city = "tanta"
  const phone = "+201205256393"
  const building = "koko"
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: { xs: "auto", md: "200px" },
        minHeight: { xs: "auto", md: "230px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: { xs: "16px", md: "24px" },
        borderRadius: "12px",
        border: "2px solid ",
        borderColor: isSelected ? "#1B2351" : "#c7c5d0a9",
        boxSizing: "border-box",
        gap: "16px",
        boxShadow: isSelected ? "0 4px 10px rgba(0, 0, 0, 0.27)" : "none",
        backgroundColor: isSelected ? "#fff" : "#d5d4d152",
        cursor: !isSelected ? "pointer" : "default",
        transition: "all 0.3s ease",
        "&.hover": {
          transform: "scale(1.02)",
        }
      }}
      onClick={onSelect}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {address.isDefault && <Box
            sx={{
              width: "fit-content",
              backgroundColor: "#78EAFD",
              padding: "4px 12px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#040C3C",
              }}
            >
              DEFAULT
            </Typography>
          </Box>}

          <Typography
            sx={{
              fontFamily: "Liberation Sans",
              fontWeight: 700,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: "28px",
              color: "#1C1C18",
            }}
          >
            ADDRESS {index}
          </Typography>
        </Box>

        {/* <Box
          sx={{
            width: { xs: "18px", md: "20px" },
            height: { xs: "18px", md: "20px" },
            backgroundColor: "#006874",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17L4 12"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box> */}
        {isSelected && <CheckedIcon fill="#47C0D2" width={"12px"} height={"12px"} />}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "22px",
            color: "#46464F",
          }}
        >
          {`${address.street ? `${address.street} st ` : ''}  ${address?.building ? ', ' + address.building + " building" : ''}`}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "22px",
            color: "#46464F",
          }}
        >
          {address.city} {" "},{" "}{address.country}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Liberation Sans",
            fontWeight: 400,
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: "20px",
            color: "#46464F",
          }}
        >
          {address.phoneNumber}
        </Typography>
      </Box>
    </Box>
  );
}