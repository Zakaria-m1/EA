
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/system";

const StatusButton = styled(Button)({
  backgroundColor: "#ff4747",
  borderRadius: "20px",
  padding: "5px 20px",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#ff4747",
  },
});

const ProfileHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src="path-to-avatar.jpg"
          sx={{ width: 100, height: 100, marginRight: "20px" }}
        />
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Test
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", color: "#BBBBBB" }}
          >
            NIVÅ 13 <StarIcon sx={{ color: "#FFD700", fontSize: 16, ml: 1 }} />{" "}
            100 Coins
          </Typography>
        </Box>
      </Box>
      <StatusButton>Online status</StatusButton>
    </Box>
  );
};

export default ProfileHeader;
