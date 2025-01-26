import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  IconButton,
  Avatar,
  Typography,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/VpnKey";
import ProfileIcon from "@mui/icons-material/Person";
import InGame from "../assets/icons/ingame.jpg"; // Correct image path
import Sidebar from "../components/Statistics";



// Main Dashboard Component
const Dashboard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${InGame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        backdropFilter: "blur(5px)", // Optional blur for overlay effect
        position: "relative",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area (could be chat, notifications, etc.) */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          color: "#FFFFFF",
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Welcome to EA Social Overlay</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Select a feature from the sidebar to begin.
        </Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
