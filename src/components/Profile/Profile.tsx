import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import ProfileProgress from "./ProfileProgress";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#161a2b",
        color: "#FFFFFF",
        borderRadius: "10px",
        padding: 4,
      }}
    >
      <ProfileHeader />
      <Divider sx={{ backgroundColor: "#ff4747", my: 3 }} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" ? (
        <Box>
          <ProfileProgress />
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Om
          </Typography>
          <Typography variant="body1" sx={{ color: "#BBBBBB" }}>
            Denna sektion kan innehålla mer information om användaren.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
