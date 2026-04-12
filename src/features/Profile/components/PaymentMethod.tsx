"use client";

import { Box, Typography, Stack, Paper, IconButton, Grid } from "@mui/material";
import Gradient_Button from "@/components/ui/gradientButton/Gradient_Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import Image from "next/image";
import { useState } from "react";
import CardModal from "./CardModal";

const CreditCard = ({ 
  brand, 
  last4, 
  name, 
  expiry, 
  onEdit, 
  onDelete 
}: { 
  brand: "visa" | "mastercard"; 
  last4: string; 
  name: string; 
  expiry: string;
  onEdit?: () => void;
  onDelete?: () => void;
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: "16px",
        backgroundColor: "#EAEAEA",
        position: "relative",
        minHeight: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Typography variant="h5" sx={{ fontWeight: 800, fontStyle: "italic", color: brand === "visa" ? "#1A1F71" : "#EB001B" }}>
          {brand.toUpperCase()}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton 
            size="small" 
            onClick={onEdit}
            sx={{ backgroundColor: "rgba(255,255,255,0.5)", color: "#47C0D2" }}
          >
            <EditCalendarOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton 
            size="small" 
            onClick={onDelete}
            sx={{ backgroundColor: "rgba(255,255,255,0.5)", color: "#EF4444" }}
          >
            <DeleteOutlineIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>

      <Typography variant="h5" sx={{ letterSpacing: "4px", mt: 4, mb: 2, color: "#1B2351", fontWeight: 500 }}>
        ****  ****  ****  {last4}
      </Typography>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1B2351", textTransform: "uppercase" }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, color: "#1B2351" }}>
          {expiry}
        </Typography>
      </Stack>
    </Paper>
  );
};

const TransactionItem = ({ date, orderId, amount }: { date: string; orderId: string; amount: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1.5,
        mb: 1.5,
        borderRadius: "12px",
        backgroundColor: "#F0F9FA",
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "8px",
            backgroundColor: "#1B2351",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/assets/icons/bag-icon.svg" width={20} height={20} alt="bag" />
        </Box>
        <Box>
          <Typography variant="caption" color="textSecondary" sx={{ fontSize: "10px" }}>
            {date}
          </Typography>
          <Typography variant="body2" fontWeight={700} color="primary" sx={{ fontSize: "12px" }}>
            Order #{orderId}
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body2" fontWeight={800} color="primary">
        {amount}
      </Typography>
    </Box>
  );
};

const PaymentMethod = () => {
  const [cards, setCards] = useState([
    { id: "1", brand: "mastercard" as const, last4: "1579", name: "AMANDA MORGAN", expiry: "12/22" },
    { id: "2", brand: "visa" as const, last4: "1579", name: "AMANDA MORGAN", expiry: "12/22" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<any>(null);

  const transactions = [
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$21,00" },
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$75,00" },
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$214,00" },
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$53,00" },
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$21,00" },
    { date: "April, 19 2020 12:31", orderId: "92287157", amount: "-$75,00" },
  ];

  const handleOpenModal = (card?: any) => {
    setEditingCard(card || null);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (values: any) => {
    if (editingCard) {
      // Edit logic
      setCards(cards.map(c => c.id === editingCard.id ? { ...c, ...values, last4: values.cardNumber.slice(-4) } : c));
    } else {
      // Add logic
      const newCard = {
        id: Math.random().toString(36).substr(2, 9),
        brand: values.cardNumber.startsWith("4") ? "visa" as const : "mastercard" as const,
        last4: values.cardNumber.slice(-4),
        name: values.name,
        expiry: values.expiry,
      };
      setCards([...cards, newCard]);
    }
  };

  const handleDeleteCard = (id: string) => {
    setCards(cards.filter(c => c.id !== id));
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <Grid container spacing={4}>
        {/* Left Column - Cards */}
        <Grid size={{ xs: 12, md: 7 }}>
          {cards.map((card) => (
            <CreditCard 
              key={card.id} 
              {...card} 
              onEdit={() => handleOpenModal(card)}
              onDelete={() => handleDeleteCard(card.id)}
            />
          ))}
        </Grid>

        {/* Right Column - Transactions */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box sx={{ maxHeight: "400px", overflowY: "auto", pr: 1 }}>
            {transactions.map((t, idx) => (
              <TransactionItem key={idx} {...t} />
            ))}
          </Box>
        </Grid>

        {/* Bottom - Add Button */}
        <Grid size={{ xs: 12 }}>
          <Gradient_Button
            variant="primary"
            onClick={() => handleOpenModal()}
            sx={{
              mt: 2,
              mb: 4,
              borderRadius: "8px",
              height: "60px",
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(90deg, #47C0D2 0%, #1B2351 100%)",
            }}
          >
            Add
          </Gradient_Button>
        </Grid>
      </Grid>

      <CardModal 
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialValues={editingCard}
      />
    </Box>
  );
};

export default PaymentMethod;