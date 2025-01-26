import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

// Styled box for each notification
const NotificationCardWrapper = styled(Box)({
  backgroundColor: "linear-gradient(135deg, #161a2b 50%, #ff4747 100%)",
  borderRadius: "10px",
  padding: "20px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
  width: "100%",
});

const NotificationCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <NotificationCardWrapper>{children}</NotificationCardWrapper>;
};

export default NotificationCard;
