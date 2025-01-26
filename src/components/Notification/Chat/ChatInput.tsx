import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#161a2b",
        padding: "8px 16px",
      }}
    >
      <InputBase
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type to chat"
        sx={{
          flexGrow: 1,
          color: "#FFFFFF",
          backgroundColor: "#2D2D2D",
          padding: "8px 12px",
          borderRadius: "24px",
        }}
      />
      <IconButton onClick={handleSend} sx={{ ml: 2, color: "#ffffff" }}>
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;
