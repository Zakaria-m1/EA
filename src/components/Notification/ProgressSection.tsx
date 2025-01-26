import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ProgressSection: React.FC<{
  progress: number;
  xp: number;
  renown: number;
  timeLeft: string;
}> = ({ progress, xp, renown, timeLeft }) => {
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            width: "100%",
            bgcolor: "#555",
            height: "8px",
            borderRadius: "4px",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#ff4747",
            },
          }}
        />
        <Typography
          variant="body2"
          sx={{ color: "#FFFFFF", marginLeft: "10px" }}
        >
          {progress} / 100
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "#FFD700", marginRight: "5px" }} />
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            {xp} XP
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardGiftcardIcon sx={{ color: "#FFD700", marginRight: "5px" }} />
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            {renown} Renown
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccessTimeIcon sx={{ color: "#AAAAAA", marginRight: "5px" }} />
          <Typography variant="body2" sx={{ color: "#AAAAAA" }}>
            {timeLeft}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressSection;
