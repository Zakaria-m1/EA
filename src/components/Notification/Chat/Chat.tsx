import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Avatar,
  List,
  ListItem,
  Dialog,
  Divider,
} from "@mui/material";

// Sample data structure for friends
interface Friend {
  id: string;
  username: string;
  status: string; // online/offline
}

const friendsData: Friend[] = [
  { id: "1", username: "TestFriend", status: "Offline" },
];

const Chat: React.FC = () => {
  const [activeChatId, setActiveChatId] = useState<string | null>(null); // Track active chat
  const [isNewChatOpen, setIsNewChatOpen] = useState(false); // Track if new chat modal is open

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
      {/* Chat Sidebar */}
      <Box
        sx={{
          width: "320px", // Adjust to match image width
          backgroundColor: "#161a2b", // Sidebar dark background
          display: "flex",
          flexDirection: "column",
          padding: "20px 15px",
          height: "100vh", // Ensure full height sidebar
        }}
      >
        {/* New Chat Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#006ef5",
            color: "#FFFFFF",
            textTransform: "none",
            fontWeight: "bold",
            mb: 2,
            width: "100%", // Full width button
            borderRadius: "12px", // Rounded button corners
            padding: "12px 0", // Button height styling
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setIsNewChatOpen(true)}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
            New chat
          </Typography>
        </Button>

        {/* Direct Messages List */}
        <Typography variant="body2" sx={{ color: "#BBBBBB", mb: 1, pl: 1 }}>
          Direct messages
        </Typography>
        <List sx={{ padding: 0 }}>
          {friendsData.map((friend) => (
            <ListItem
              component="div"
              key={friend.id}
              onClick={() => setActiveChatId(friend.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "10px 10px",
                backgroundColor:
                  activeChatId === friend.id ? "#2F333D" : "#2D2D2D",
                borderRadius: "8px",
                mb: 1,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#2F333D",
                },
              }}
            >
              <Avatar
                sx={{ width: 40, height: 40, mr: 2 }}
                src="https://path-to-avatar" // Update with actual path
              />
              <Box>
                <Typography
                  variant="body1"
                  sx={{ color: "#FFFFFF", fontWeight: "500" }}
                >
                  {friend.username}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#BBBBBB", fontSize: "12px" }}
                >
                  {friend.status}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Divider Line */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderRightWidth: 1,
          borderColor: "rgba(255, 255, 255, 1)",
        }}
      />

      {/* Main Chat Area */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B1B1B", // Dark background for main content
        }}
      >
        {/* Empty Chat State when no chat is selected */}
        {!activeChatId && (
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ mb: 2 }}>
              <img
                src="path-to-illustration.png"
                alt="Start chat illustration"
                style={{ width: "150px", marginBottom: "16px" }}
              />
            </Box>
            <Typography variant="h5" sx={{ color: "#FFFFFF", mb: 1 }}>
              Start chatting with your friends!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#146EB4",
                color: "#FFFFFF",
                textTransform: "none",
                fontWeight: "bold",
                padding: "10px 30px",
                borderRadius: "10px",
              }}
              onClick={() => setIsNewChatOpen(true)}
            >
              Start chat
            </Button>
          </Box>
        )}
      </Box>

      {/* New Chat Dialog */}
      {isNewChatOpen && (
        <Dialog open={isNewChatOpen} onClose={() => setIsNewChatOpen(false)}>
          <Box sx={{ padding: 4, backgroundColor: "#1F1F1F" }}>
            <Typography variant="h6" sx={{ color: "#FFFFFF", mb: 2 }}>
              Select friends to chat with:
            </Typography>
            {friendsData.map((friend) => (
              <ListItem
                component="div"
                key={friend.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  backgroundColor: "#2D2D2D",
                  borderRadius: "8px",
                  mb: 1,
                  "&:hover": { backgroundColor: "#ff4747" },
                }}
              >
                <Avatar sx={{ width: 40, height: 40, mr: 2 }} />
                <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
                  {friend.username}
                </Typography>
              </ListItem>
            ))}
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#146EB4",
                  color: "#FFFFFF",
                  textTransform: "none",
                  fontWeight: "bold",
                }}
              >
                Start chat
              </Button>
            </Box>
          </Box>
        </Dialog>
      )}
    </Box>
  );
};

export default Chat;
