import React from "react";
import { Box, Typography, Button } from "@mui/material";

const EmptyChatState: React.FC = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#161a2b",
        flexGrow: 1,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <img
          src="path-to-image.jpg"
          alt="Start Chat"
          style={{ width: "150px" }}
        />
      </Box>
      <Typography variant="h6" sx={{ color: "#FFFFFF", mb: 2 }}>
        Start chatting with your friends!
      </Typography>
      <Button variant="contained" color="primary">
        Start chat
      </Button>
    </Box>
  );
};

export default EmptyChatState;
