import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LeftNavItems = ({ sidebarController, viewport }) => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const { isMinHeight1700px, isMinWidth950px } = viewport;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      ml="10px"
      mr="15px"
      gap="25px"
    >
      <Typography
        className="logo-label"
        fontFamily="Oswald, sans-serif"
        fontSize="30px"
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            // behavior: "smooth",
          });
          navigate("/");
        }}
        sx={{
          zoom: isMinHeight1700px && 1.3,
          "&:hover": {
            transition: "0.5s ease",
            transform: "scale(1.15)",
            cursor: "pointer",
            color: palette.secondary[400],
            "& .logo-label": {
              textShadow: `0 0 40px ${palette.primary[100]}`, // h-shadow v-shadow blur-radius color
            },
          },
        }}
      >
        JONDEV
      </Typography>

      {isMinWidth950px ? null : (
        <Menu
          onClick={sidebarController}
          sx={{
            mt: "3px",
            fontSize: "40px",
            "&:hover": {
              cursor: "pointer",
              transition: "0.5s ease",
              color: palette.secondary[400],
            },
          }}
        />
      )}
    </Box>
  );
};

export default LeftNavItems;
