"use client";

import { Box, Typography, Button, FormGroup, Stack } from "@mui/material";
import AddressCard from "@/features/checkout/components/AddressCard";
import CartCard from "@/features/checkout/components/CartCard";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";
import PaymentMethods from "@/features/checkout/components/PaymentMethods";
import OrderSummary from "@/features/checkout/components/OrderSummary";
import GuaranteeCard from "@/features/checkout/components/GuaranteeCard";
import { useShippingAddresses } from "@/features/Profile/hooks/useShippingActions";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import type { AddressType } from "@/features/checkout/types";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useGetCart } from "@/features/cart/hooks/useAddToCart.hook";
import { useFormik } from "formik";
import { addressSchema } from "@/features/checkout/schema/addressSchema";
import { useCreateOrder, useAddOrderSummary, usePayWithCard } from "@/features/checkout/hooks/order.hooks";

export default function CheckoutPage() {
  const { data: addresses, isLoading: isLoadingAddresses, isSuccess: isSuccessAddresses } = useShippingAddresses();
  const { data: cart, isLoading: isLoadingCart, isSuccess: isSuccessCart } = useGetCart();
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>(null);
  const [saveAddress, setSaveAddress] = useState<boolean>(false);
  const [setAsDefault, setSetAsDefault] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<number>(3);
  const [mode, setMode] = useState<"edit" | "view">("edit");
  const { mutate: addOrderSummary, data: orderSummaryData, isSuccess: isSuccessOrderSummary, isPending: isLoadingOrderSummary } = useAddOrderSummary();
  const { mutate: createOrder, isPending: isLoadingCreateOrder, data: orderData, isSuccess: isSuccessOrder } = useCreateOrder();
  const { mutate: pay, isPending: isLoadingPay, data: returnedUrl } = usePayWithCard()
  const [discountCode, setDiscountCode] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isSuccessAddresses && addresses?.data?.length > 0) {
      addresses?.data?.forEach((address: any) => {
        if (address.isDefault) {
          setSelectedAddress(address);
        }
      });
    }
  }, [isSuccessAddresses, addresses]);
  useEffect(() => {
    if (isSuccessOrderSummary) setMode("view")
  }, [isSuccessOrderSummary])
  useEffect(() => {
    if (isSuccessOrder && paymentMethod !== 3) {
      pay(orderData?.id)
    }
  }, [isSuccessOrder])
  useEffect(() => {
    if (returnedUrl?.data?.paymentUrl) {
      setPaymentUrl(returnedUrl?.data?.paymentUrl);
    }
  }, [returnedUrl])

  function getDataForOrderAndOrderSummary() {
    let data = {}

    if (selectedAddress) {
      data = {
        addressId: selectedAddress?.id,
        paymentMethod: paymentMethod,
        deliveryMethod: 0,
        discountCode: discountCode.trim() === "" ? null : discountCode
      }
    } else {
      formik.submitForm();
      if (!formik.isValid) return;
      data = {
        address: {
          name: formik.values.firstName,
          shippingLastName: formik.values.lastName,
          phoneNumber: formik.values.phoneNumber,
          city: formik.values.city,
          country: formik.values.country,
          shippingBuilding: formik.values.building,
          shippingApartment: formik.values.apartment,
          shippingFloor: formik.values.floor,
          street: formik.values.streetAddress,
          postalCode: formik.values.postcode,
          saveAddress: setAsDefault || saveAddress,
          setAsDefault: setAsDefault,
        },
        paymentMethod: paymentMethod,
        deliveryMethod: 0,
        discountCode: discountCode.trim() === "" ? null : discountCode
      }
    }
    return data
  }
  function handleSubmitOrder() {

    const data = getDataForOrderAndOrderSummary();
    if (!formik.isValid && !selectedAddress) return;
    createOrder(data);
  }
  function handleAddOrderSummary() {
    const data = getDataForOrderAndOrderSummary();
    if (!formik.isValid && !selectedAddress) return;
    addOrderSummary(data);
  }


  const formik = useFormik({
    initialValues: {
      country: "",
      firstName: "",
      lastName: "",
      streetAddress: "",
      phoneNumber: "",
      city: "",
      postcode: "",
      building: "",
      apartment: "",
      floor: ""
    },
    validationSchema: addressSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });









  if (isLoadingAddresses || isLoadingCart) return <Box sx={{ width: "100%", backgroundColor: "#F6F3EC", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}><CircularProgress size={"30px"} color="primary" /></Box>
  if (paymentUrl) {
    return <iframe src={paymentUrl} style={{ width: "100%", height: "1000px", border: "none" }}
      allow="payment" />
  }

  return (
    <Box sx={{ width: "100%", backgroundColor: "#F6F3EC", }}>
      <Box
        sx={{
          overflowX: "hidden",
          maxWidth: isSuccessOrderSummary ? "90%" : "70%",
          margin: "0 auto",
          padding: { xs: "10px", md: "16px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: isSuccessOrderSummary ? "repeat(12, 1fr)" : "repeat(1, 1fr)",
          },
          columnGap: { md: "40px" },
          rowGap: "32px",
          // backgroundColor: "gray",
          justifyContent: "center",
          mx: "auto"
        }}
      >
        <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 7",
            },
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            width: "100%",
            margin: "auto"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Manrope",
                fontWeight: 900,
                fontSize: { xs: "22px", md: "30px" },
                color: "#040C3C",
              }}
            >
              Deliver to
            </Typography>

            {/* <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#1B2351",
                cursor: "pointer",
              }}
            >
              ADD NEW
            </Box> */}
            <Button
              disabled={mode === "view"}
              onClick={() => {
                setSelectedAddress(null);
              }}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography sx={{
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#1B2351",
              }}> ADD NEW ADDRESS</Typography>

            </Button>
          </Box>

          <Stack
            width={"100%"}
            height={"fit-content"}
            direction="row"
            spacing={2}
            sx={{
              overflowX: "auto",
              pb: 2,
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              alignItems: "stretch",
              justifyContent: "center",
            }}
          >
            {addresses?.data?.map((address: any, index: number) => (
              <Box key={address?.id} sx={{ flex: 1 }}>
                <AddressCard isSelected={selectedAddress?.id === address?.id} address={address} index={index + 1} onSelect={() => {
                  if (mode === "view") return;
                  setSelectedAddress(address)
                }} />
              </Box>
            ))}

          </Stack>

          <CheckoutForm disabled={mode === "view"} selectedAddress={selectedAddress} formik={formik} />
          <Box>
            {!selectedAddress && <FormGroup>
              <FormControlLabel
                disabled={mode === "view"}
                control={<Checkbox checked={saveAddress && !setAsDefault} onChange={(e) => { setSaveAddress(e.target.checked); setSetAsDefault(false) }} />} label="Save Address" />
              <FormControlLabel
                disabled={mode === "view"}
                control={<Checkbox checked={setAsDefault && !saveAddress} onChange={(e) => { setSetAsDefault(e.target.checked); setSaveAddress(false) }} />} label="Save Address and Set As Default Address" />
            </FormGroup>
            }
          </Box>
          <PaymentMethods disabled={mode === "view"} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
          {!isSuccessOrderSummary && <Button variant="contained" sx={{ padding: "12px 24px", borderRadius: "8px", width: "30%" }} onClick={(() => {
            handleAddOrderSummary()
          })}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              {isLoadingOrderSummary ? <CircularProgress size={"24px"} sx={{ color: "white" }} /> : "continue to review"}
            </Typography>
          </Button>}
          {mode == "edit" && isSuccessOrderSummary && (
            <Button variant="contained" sx={{ padding: "12px 24px", borderRadius: "8px", width: "30%" }} onClick={(() => {
              handleAddOrderSummary()
            })}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                {isLoadingOrderSummary ? <CircularProgress size={"24px"} sx={{ color: "white" }} /> : "Save Changes"}
              </Typography>
            </Button>
          )}
          {mode == "view" && isSuccessOrderSummary && (
            <Button variant="contained" sx={{ padding: "12px 24px", borderRadius: "8px", width: "fit-content" }} onClick={(() => {
              setMode("edit")
            })}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                Edit
              </Typography>
            </Button>
          )}

        </Box>

        {orderSummaryData && <Box
          sx={{
            gridColumn: {
              xs: "span 12",
              md: "span 5",
            },
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: {
              xs: "stretch",
              md: "flex-end",
            },
          }}
        >
          <OrderSummary disabled={mode === "edit"} isLoading={isLoadingCreateOrder || isLoadingPay} handleSubmitOrder={handleSubmitOrder} orderSummary={orderSummaryData.data} discountCode={discountCode} setDiscountCode={setDiscountCode} handleAddOrderSummary={handleAddOrderSummary} />

          <GuaranteeCard />
        </Box>}
      </Box>
    </Box >
  );
}
