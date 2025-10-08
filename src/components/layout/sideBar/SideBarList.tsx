import { Box } from "@mui/material";
import { useTheme, Typography, Button } from "@mui/material";
import React from "react";
import Home from "../../../../public/assets/icons/home-icon.svg";
import Shop from "../../../../public/assets/icons/shop-icon.svg";
import Reels from "../../../../public/assets/icons/reels-icon.svg";
import Cart from "../../../../public/assets/icons/cart-icon.svg";
import Heart from "../../../../public/assets/icons/heart-icon.svg";
import Phone from "../../../../public/assets/icons/phone-icon.svg";
import QuestionMark from "../../../../public/assets/icons/question-mark-icon.svg";
import AppStore from "../../../../public/assets/images/button-appstore.png";
import PlayStore from "../../../../public/assets/images/button-playstore.png";

const optionsList: any = [
  { name: "Home", icon: Home },
  { name: "Shop", icon: Shop },
  { name: "Reels", icon: Reels },
  { name: "Orders", icon: Cart },
  { name: "Favorites", icon: Heart },
  { name: "Contact Us", icon: Phone },
  { name: "FAQs", icon: QuestionMark },
];

export default function SideBarList({
  shown,
  loggedIn,
}: {
  shown: boolean;
  loggedIn: boolean;
}) {
  const t = useTheme();
  return (
    <Box
      sx={{
        padding: "6px 20px 153px 12px",
        display: ["flex", "flex", "none"],
        flexDirection: "column",
        position: "fixed",
        overflowY: "scroll",
        scrollbarWidth: "none",
        height: "820px",
        width: "290px",
        top: "70px",
        bottom: "0px",
        zIndex: -11,
        left: `${shown ? "0px" : "-350px"}`,
        transition: "all 0.5s ease",
        backgroundColor: t.tokens.backgroundColors.main,
      }}
    >
      {!loggedIn ? (
        <div
          style={{
            padding: "9px 0px",
            marginBottom: "10px",

            width: "100%",
          }}
        >
          <Typography variant="link" fontSize={14} color="black">
            Login for more personalized experience
          </Typography>
          <div
            style={{
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              gap: 9,
              marginTop: 16,
            }}
          >
            <Button
              sx={{ bgcolor: t.palette.primary.main, borderRadius: "8px" }}
            >
              <Typography variant="link" fontSize={14} color="white">
                Login
              </Typography>
            </Button>
            <Button sx={{ bgcolor: "white", borderRadius: "8px" }}>
              <Typography variant="link" fontSize={14} color="primary">
                Register
              </Typography>
            </Button>
          </div>
        </div>
      ) : (
        <></>
      )}
      <section
        style={{
          padding: "10px 10px 10px 0px",
          display: "flex",
          flexDirection: "column",
          marginBottom: "10px",
        }}
      >
        {optionsList.map((op: any, index: number) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "12px",
              padding: "20px 0px",
              justifyContent: "flex-start",
              // alignItems:"center"
            }}
          >
            <img src={op.icon.src} alt={op.name} />
            <Typography variant="link" color="primary">
              {op.name}
            </Typography>
          </div>
        ))}
      </section>
      <section>
        <Typography
          fontSize={16}
          variant="titleSpecial"
          color="priamry"
          sx={{ marginBottom: "16px" }}
        >
          GET THE APP
        </Typography>
        <div style={{ display: "flex", gap: "8px" }}>
          <Button style={{ padding: "0px" }}>
            <img src={AppStore.src} alt="" />
          </Button>
          <Button>
            <img src={PlayStore.src} alt="" />
          </Button>
        </div>
      </section>
    </Box>
  );
}
