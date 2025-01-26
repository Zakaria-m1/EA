import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import NotificationCard from "./NotificationCard";
import NotificationHeader from "./NotificationHeader";
import NotificationBody from "./NotificationBody";
import ProgressSection from "./ProgressSection";

const Notification = () => {
  return (
    <Box sx={{ padding: "20px", width: "100%", paddingRight: "50px", height: "100%" }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Feed
      </Typography>
      <Divider sx={{ backgroundColor: "#ff4747", mb: 3 }} />
      <NotificationCard>
        <NotificationHeader name="test123" game="FC24" date="August 1" />
        <NotificationBody challengeName="Defender" />
        <ProgressSection
          progress={60}
          xp={25}
          renown={250}
          timeLeft="6d 19h 7m left"
        />
        <Divider sx={{ backgroundColor: "#555", marginY: "10px" }} />
      </NotificationCard>
      <NotificationCard>
        <NotificationHeader name="test123" game="FC24" date="August 1" />
        <NotificationBody challengeName="Goalscorer" />
        <ProgressSection
          progress={60}
          xp={25}
          renown={250}
          timeLeft="2d 14h 15m left"
        />
        <Divider sx={{ backgroundColor: "#555", marginY: "10px" }} />
      </NotificationCard>
      <NotificationCard>
        <NotificationHeader name="test123" game="FC24" date="August 1" />
        <NotificationBody challengeName="Flawless" />
        <ProgressSection
          progress={60}
          xp={25}
          renown={250}
          timeLeft="6d 19h 7m left"
        />
        <Divider sx={{ backgroundColor: "#555", marginY: "10px" }} />
      </NotificationCard>
    </Box>
  );
};

export default Notification;
