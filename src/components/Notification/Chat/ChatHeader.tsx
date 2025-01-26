import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface ChatHeaderProps {
  username: string;
  status: string; // online/offline status
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ username, status }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 2,
        backgroundColor: "#161a2b",
      }}
    >
      <Avatar src="path-to-avatar.jpg" sx={{ width: 50, height: 50, mr: 2 }} />
      <Box>
        <Typography variant="h6" sx={{ color: "#FFF" }}>
          {username}
        </Typography>
        <Typography variant="body2" sx={{ color: "#BBBBBB" }}>
          {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatHeader;
