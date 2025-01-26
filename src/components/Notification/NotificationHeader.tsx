import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NotificationHeader: React.FC<{
  name: string;
  game: string;
  date: string;
}> = ({ name, game, date }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src="path-to-avatar.jpg"
          sx={{ width: 40, height: 40, marginRight: "10px" }}
        />
        <Box>
          <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
            {game} - {date}
          </Typography>
        </Box>
      </Box>
      <CheckCircleOutlineIcon sx={{ color: "#28a745" }} />
    </Box>
  );
};

export default NotificationHeader;
