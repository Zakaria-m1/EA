import React from "react";
import { List, ListItem, Avatar, Typography, Box } from "@mui/material";

interface Friend {
  id: string;
  username: string;
  status: string; // online/offline
}

interface ChatListProps {
  friends: Friend[];
  onFriendClick: (id: string) => void;
}

const ChatList: React.FC<ChatListProps> = ({ friends, onFriendClick }) => {
  return (
    <List>
      {friends.map((friend) => (
        <ListItem
          component="button" // Changed from button prop to component="button"
          key={friend.id}
          onClick={() => onFriendClick(friend.id)}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            backgroundColor: "#161a2b",
            borderRadius: "8px",
            mb: 1,
            "&:hover": { backgroundColor: "#ff4747" },
          }}
        >
          <Avatar
            src="path-to-avatar.jpg"
            sx={{ width: 40, height: 40, mr: 2 }}
          />
          <Box>
            <Typography variant="body1" sx={{ color: "#FFFFFF" }}>
              {friend.username}
            </Typography>
            <Typography variant="body2" sx={{ color: "#BBBBBB" }}>
              {friend.status}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
