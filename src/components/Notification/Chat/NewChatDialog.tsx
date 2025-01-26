import React, { useState } from "react";
import { List, ListItem, Checkbox, Button } from "@mui/material";

interface Friend {
  id: string;
  username: string;
  status: string;
}

interface NewChatDialogProps {
  friends: Friend[];
  onStartChat: (selectedFriends: string[]) => void; // Add onStartChat prop
}

const NewChatDialog: React.FC<NewChatDialogProps> = ({
  friends,
  onStartChat,
}) => {
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);

  // Function to toggle friend selection
  const handleToggle = (friendId: string) => {
    setSelectedFriends((prev) =>
      prev.includes(friendId)
        ? prev.filter((id) => id !== friendId)
        : [...prev, friendId]
    );
  };

  return (
    <>
      <List>
        {friends.map((friend) => (
          <ListItem
            key={friend.id}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {friend.username}
            <Checkbox
              checked={selectedFriends.includes(friend.id)}
              onChange={() => handleToggle(friend.id)}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        onClick={() => onStartChat(selectedFriends)} // Call onStartChat when starting a chat
      >
        Start New Chat
      </Button>
    </>
  );
};

export default NewChatDialog;
