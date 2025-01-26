import React from "react";
import { Box, Typography } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

const NotificationBody: React.FC<{ challengeName: string }> = ({
  challengeName,
}) => {
  return (
    <Box
      sx={{ backgroundColor: "#ff4747", padding: "10px", borderRadius: "8px" }}
    >
      <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
        <LoyaltyIcon sx={{ color: "#fFFF", marginRight: "5px" }} />
        {challengeName}
      </Typography>
    </Box>
  );
};

export default NotificationBody;
