import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";

const ProgressBarWrapper = styled(Box)({
  backgroundColor: "#1F1F1F", // Dark background for the progress section
  borderRadius: "8px",
  padding: "10px 20px", // Padding around the progress bar and text
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", // Ensure content is spaced across the container
});

const GlowingLinearProgress = styled(LinearProgress)({
  flexGrow: 1,
  backgroundColor: "#333", // Background color behind the progress bar
  height: "8px",
  borderRadius: "4px",
  position: "relative",
  overflow: "hidden",
  "& .MuiLinearProgress-bar": {
    backgroundColor: "#ff4747", // Red color for the progress
    boxShadow: "0px 0px 8px 2px rgba(255, 71, 71, 0.7)", // Glowing effect
    animation: "glow 1.5s infinite alternate",
  },
  "@keyframes glow": {
    "0%": {
      boxShadow: "0px 0px 8px 2px rgba(255, 71, 71, 0.4)",
    },
    "100%": {
      boxShadow: "0px 0px 15px 4px rgba(255, 71, 71, 0.8)",
    },
  },
});

const ProfileProgress = () => {
  return (
    <ProgressBarWrapper>
      {/* Progress Bar */}
      <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
        <GlowingLinearProgress variant="determinate" value={70} />
      </Box>

      {/* XP and Next Reward Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ml: 2, // Add some margin on the left to space out the items
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#FFFFFF", mr: 1, fontWeight: "bold" }}
        >
          XP
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#FFFFFF",
            mr: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>350 till nästa nivå</span>
        </Typography>
      </Box>
    </ProgressBarWrapper>
  );
};

export default ProfileProgress;
