"use client";
import { Box, Typography, TextField, InputAdornment, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Comment from "@/components/ui/comment/Comment";
import RatingStars from "@/components/ui/ratingStars/RatingStars";
import YouMightAlsoLikeCard from "@/components/ui/cards/YouMightAlsoLikeCard";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import { ProductDetails } from "../types";
import { useAppDispatch } from "@/Redux/store";
import { setOpenAddToCartDialog, setAvailableColors, setProductId } from "@/Redux/slices/addTocartDialogSlice";

export default function ProductBottomSection({ product }: { product: ProductDetails }) {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const reviews = [
    {
      userName: "Veronika",
      rating: 4,
      comment:
        "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small ",
    },
    {
      userName: "Veronika",
      rating: 4,
      comment:
        "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small ",
    },
  ];

  const recommendedProducts = [
    {
      image: "/assets/images/shoes2.png",
      title: "FS - Nike Air Max 270 React...",
      price: "LE 2000.00 EGP",
    },
    {
      image: "/assets/images/Woman Bag.png",
      title: "FS - QUILTED MAXI CROS...",
      price: "LE 2500.00 EGP",
    },
    {
      image: "/assets/images/shoes1.png",
      title: "FS - Nike Air Max 270 React...",
      price: "LE 1500.00 ",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1328px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 0 },

        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "550px" },
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {product.reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                mt: index === 0 ? "35px" : index === 1 ? "6px" : 0,
                gap: "15px",
              }}
            >
              <Image
                src="/assets/images/user-avatar.png"
                alt="User Avatar"
                width={58}
                height={58}
              />

              <Comment
                userName={review.user.userName}
                rating={review.rating}
                comment={review.comment}
              />
            </Box>
          ))}

          {/* Add Review Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              mt: "14px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="bodyMedium"
                sx={{
                  fontWeight: 700,
                  color: "#223263",
                }}
              >
                Add Review
              </Typography>

              <RatingStars rating={4} />
            </Box>

            <TextField
              placeholder="add your review"
              fullWidth
              variant="outlined"
              sx={{
                mt: "15px",
                "& .MuiOutlinedInput-root": {
                  height: "75px",
                  background: theme.tokens.inputsColors.background,
                  borderRadius: theme.tokens.inputStyle.borderRadius,
                  boxShadow: theme.tokens.inputStyle.boxShadow,
                  paddingRight: "8px",
                  "& fieldset": {
                    border: `1px solid ${theme.tokens.inputsColors.border}`,
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        width: "36px",
                        height: "36px",
                      }}
                    >
                      <Image
                        src="/assets/icons/send-icon.svg"
                        alt="send"
                        width={20}
                        height={20}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "509px" },
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            transform: { md: "translateX(100px)" },
          }}
        >
          <Typography
            variant="titleMedium"
            sx={{
              color: "#223263",
              mt: { xs: 2, md: "50px" },
            }}
          >
            You Might Also Like
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: 2, sm: 5 },
              ml: { xs: 0, md: "-100px" },
            }}
          >
            {product.relatedProducts.map((product, index) => (

              <Box
                key={index}
                sx={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <YouMightAlsoLikeCard
                  id={product.id}
                  image={product.pictureUrl}
                  title={product.name}
                  price={product.price}
                />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              width: "100%",
              mt: "12px",
              ml: { xs: 0, md: "-100px" },
            }}
          >
            <Gradient_Button
              size="medium"
              sx={{
                width: "100%",
                height: "54px",
                borderRadius: theme.tokens.buttons.borderRadius,
              }}
              onClick={() => {
                dispatch(setOpenAddToCartDialog(true));
                dispatch(setProductId(product.id));
                dispatch(setAvailableColors(product.availableColors));
              }}
            >
              Add to Cart
            </Gradient_Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}