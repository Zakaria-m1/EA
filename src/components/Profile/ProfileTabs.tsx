import React from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";

// Define the props for the ProfileTabs component
interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <DashboardIcon sx={{ mr: 1 }} />
      <Typography
        variant="body1"
        sx={{
          color: activeTab === "overview" ? "#FFFFFF" : "#9CA3AF",
          borderBottom: activeTab === "overview" ? "2px solid #ff4747" : "none",
          paddingBottom: 1,
          marginRight: 3,
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("overview")}
      >
        Översikt
      </Typography>
      <InfoIcon sx={{ mr: 1 }} />
      <Typography
        variant="body1"
        sx={{
          color: activeTab === "about" ? "#FFFFFF" : "#9CA3AF",
          borderBottom: activeTab === "about" ? "2px solid #ff4747" : "none",
          paddingBottom: 1,
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("about")}
      >
        Om
      </Typography>
    </Box>
  );
};

export default ProfileTabs;
