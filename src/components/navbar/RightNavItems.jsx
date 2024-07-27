import React from "react";
import { Box, useTheme, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";

const RightNavItems = ({ viewport }) => {
  const { palette } = useTheme();

  const { isMinHeight1700px } = viewport;

  const rightNavIcons = [
    <Link
      to="mailto:jwwf.dev@gmail.com"
      style={{ textDecoration: "none", color: "inherit", height: "27px" }}
      target="_blank" // Opens a new tab upon clicking
      rel="noreferrer noopener" // Prevents "tabnabbing" phishing
    >
      <Email sx={{ fontSize: "30px" }} />
    </Link>,
    <Link
      to="https://www.linkedin.com/in/jonrae-wan-69b80776"
      style={{ textDecoration: "none", color: "inherit", height: "27px" }}
      target="_blank" // Opens a new tab upon clicking
      rel="noreferrer noopener" // Prevents "tabnabbing" phishing
    >
      <LinkedIn sx={{ fontSize: "30px" }} />
    </Link>,
    <Link
      to="https://github.com/user91my"
      style={{ textDecoration: "none", color: "inherit", height: "27px" }}
      target="_blank" // Opens a new tab upon clicking
      rel="noreferrer noopener" // Prevents "tabnabbing" phishing
    >
      <GitHub sx={{ fontSize: "30px" }} />
    </Link>,
  ];

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="15px"
      mr="10px"
      ml="15px"
      sx={{
        zoom: isMinHeight1700px && 1.3,
      }}
    >
      {rightNavIcons.map((icon, i) => (
        <IconButton
          key={`navIcon-${i}`}
          sx={{
            "&:hover": {
              transition: "0.5s ease",
              transform: "scale(1.3)",
              cursor: "pointer",
              color: palette.secondary[400],
            },
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default RightNavItems;
