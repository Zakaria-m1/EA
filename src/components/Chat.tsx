import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";

interface Message {
  id: string;
  uid: string;
  text: string;
}

interface ChatProps {
  selectedFriendId: string; // Prop for the selected friend's ID
}

const Chat: React.FC<ChatProps> = ({ selectedFriendId }) => {
  const { currentUser } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!currentUser || !selectedFriendId) return;

    // Create a unique chat ID based on the two user IDs
    const chatId = [currentUser.uid, selectedFriendId].sort().join("_");

    // Fetch messages for the specific chat
    const q = query(
      collection(db, "chats", chatId, "messages"),
      where("timestamp", "!=", null)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedMessages = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Message)
      );
      setMessages(loadedMessages);
    });

    return unsubscribe;
  }, [currentUser, selectedFriendId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && currentUser) {
      // Create a unique chat ID based on the two user IDs
      const chatId = [currentUser.uid, selectedFriendId].sort().join("_");

      // Send message to Firestore
      await addDoc(collection(db, "chats", chatId, "messages"), {
        text,
        uid: currentUser.uid,
        timestamp: serverTimestamp(),
      });

      setText(""); // Clear input field
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          padding: 2,
          backgroundColor: "#1B1B1B", // Match the dashboard background color
          borderRadius: "8px",
          mb: 2,
        }}
      >
        <List sx={{ padding: 0 }}>
          {messages.map((msg) => (
            <ListItem key={msg.id} sx={{ padding: "8px 0" }}>
              <Paper
                sx={{
                  padding: 2,
                  backgroundColor:
                    msg.uid === currentUser?.uid ? "#146EB4" : "#2C2C2C", // Different colors for user and others
                  color: "#FFFFFF",
                  maxWidth: "70%",
                  borderRadius: "12px",
                  alignSelf:
                    msg.uid === currentUser?.uid ? "flex-end" : "flex-start", // Align user messages to the right
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {msg.uid === currentUser?.uid ? "You" : msg.uid}
                </Typography>
                <Typography variant="body2">{msg.text}</Typography>
              </Paper>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Message Input */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        sx={{
          backgroundColor: "#2C2C2C",
          padding: 2,
          borderRadius: "8px",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          sx={{
            input: { color: "#FFFFFF" }, // White text input
            bgcolor: "#1B1B1B",
            borderRadius: "8px",
            mr: 2,
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#EA1D2C",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#C21825",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
