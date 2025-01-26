import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  IconButton,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import Profile from "../components/Profile/Profile"; // Import Profile Component
import Notifications from "../components/Notification/Notification"; // Import Notifications Component
import Chat from "./Notification/Chat/Chat";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("profile"); // Default to Profile

  // Render the correct component based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Profile />;
      case "notifications":
        return <Notifications />;
      case "chat":
        return <Chat/>;
      case "people":
        return <Typography variant="h5">People Component</Typography>;
      case "store":
        return <Typography variant="h5">Store Component</Typography>;
      default:
        return <Profile />;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "900px" }}>
      {/* Sidebar itself */}
      <Box
        sx={{
          width: "95px", // Sidebar locked width
          background: "linear-gradient(135deg, #161a2b 70%, #ff4747 100%)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 2,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Profile Section */}
        <Avatar
          src="path-to-avatar.jpg"
          sx={{
            width: 50,
            height: 50,
            mb: 2,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.8)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Divider
          sx={{
            width: "60%",
            my: 2,
            bgcolor: "rgba(255,255,255,0.3)",
          }}
        />

        {/* Sidebar Icons */}
        <List sx={{ flexGrow: 1, width: "100%", paddingLeft: 0 }}>
          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setActiveTab("home")}
          >
            <IconButton
              sx={{
                color: activeTab === "home" ? "#ff4747" : "#FFFFFF", // Highlight active tab
                backgroundColor:
                  activeTab === "home"
                    ? "rgba(255, 71, 71, 0.1)"
                    : "transparent", // Add a soft red background when active
                borderRadius: "50%",
                boxShadow:
                  activeTab === "home"
                    ? "0px 0px 12px 4px rgba(255, 71, 71, 0.6)" // Add glowing effect around active tab
                    : "none",
                "&:hover": {
                  color: "#ff4747",
                  backgroundColor: "rgba(255, 71, 71, 0.2)", // Slightly stronger background on hover
                },
              }}
            >
              <HomeIcon />
            </IconButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setActiveTab("notifications")}
          >
            <IconButton
              sx={{
                color: activeTab === "notifications" ? "#ff4747" : "#FFFFFF",
                backgroundColor:
                  activeTab === "notifications"
                    ? "rgba(255, 71, 71, 0.1)"
                    : "transparent",
                borderRadius: "50%",
                boxShadow:
                  activeTab === "notifications"
                    ? "0px 0px 12px 4px rgba(255, 71, 71, 0.6)"
                    : "none",
                "&:hover": {
                  color: "#ff4747",
                  backgroundColor: "rgba(255, 71, 71, 0.2)",
                },
              }}
            >
              <NotificationsIcon />
            </IconButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setActiveTab("chat")}
          >
            <IconButton
              sx={{
                color: activeTab === "chat" ? "#ff4747" : "#FFFFFF",
                backgroundColor:
                  activeTab === "chat"
                    ? "rgba(255, 71, 71, 0.1)"
                    : "transparent",
                borderRadius: "50%",
                boxShadow:
                  activeTab === "chat"
                    ? "0px 0px 12px 4px rgba(255, 71, 71, 0.6)"
                    : "none",
                "&:hover": {
                  color: "#ff4747",
                  backgroundColor: "rgba(255, 71, 71, 0.2)",
                },
              }}
            >
              <ChatIcon />
            </IconButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setActiveTab("people")}
          >
            <IconButton
              sx={{
                color: activeTab === "people" ? "#ff4747" : "#FFFFFF",
                backgroundColor:
                  activeTab === "people"
                    ? "rgba(255, 71, 71, 0.1)"
                    : "transparent",
                borderRadius: "50%",
                boxShadow:
                  activeTab === "people"
                    ? "0px 0px 12px 4px rgba(255, 71, 71, 0.6)"
                    : "none",
                "&:hover": {
                  color: "#ff4747",
                  backgroundColor: "rgba(255, 71, 71, 0.2)",
                },
              }}
            >
              <PeopleIcon />
            </IconButton>
          </ListItem>

          <ListItem
            sx={{ display: "flex", justifyContent: "center" }}
            onClick={() => setActiveTab("store")}
          >
            <IconButton
              sx={{
                color: activeTab === "store" ? "#ff4747" : "#FFFFFF",
                backgroundColor:
                  activeTab === "store"
                    ? "rgba(255, 71, 71, 0.1)"
                    : "transparent",
                borderRadius: "50%",
                boxShadow:
                  activeTab === "store"
                    ? "0px 0px 12px 4px rgba(255, 71, 71, 0.6)"
                    : "none",
                "&:hover": {
                  color: "#ff4747",
                  backgroundColor: "rgba(255, 71, 71, 0.2)",
                },
              }}
            >
              <StoreIcon />
            </IconButton>
          </ListItem>
        </List>

        {/* Bottom Logo */}
        <Box
          sx={{
            width: "80%",
            height: "60px",
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://cdn2.steamgriddb.com/icon/e62dfd885dcb4b83dda5d4e336fdf520/32/512x512.png"
            alt="EA Logo"
            style={{
              width: "50%",
              opacity: 0.7,
              transition: "opacity 0.3s ease",
            }}
          />
        </Box>
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

      {/* Main content area */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#161a2b",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
          padding: 4,
        }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
};

export default Sidebar;
