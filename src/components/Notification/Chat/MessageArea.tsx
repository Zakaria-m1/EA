import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface Message {
  id: string;
  content: string;
  sender: string; // Username of the sender
  time: string; // Timestamp of the message
}

interface MessageAreaProps {
  messages: Message[];
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#000000",
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      {messages.map((message) => (
        <Box
          key={message.id}
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          <Avatar
            src="path-to-avatar.jpg"
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Box>
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              {message.sender}
            </Typography>
            <Typography variant="body2" sx={{ color: "#BBBBBB" }}>
              {message.content}
            </Typography>
            <Typography variant="caption" sx={{ color: "#666666" }}>
              {message.time}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MessageArea;
