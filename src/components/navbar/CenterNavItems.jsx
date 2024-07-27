import React from "react";
import { Box } from "@mui/material";
import {
  useTheme,
  Typography,
  ListItemButton,
  List,
  ListItem,
} from "@mui/material";
import { HashLink } from "react-router-hash-link";
import hexToRgba from "hex-to-rgba";

const CenterNavItems = ({ viewport }) => {
  const { palette } = useTheme();

  const navItems = [
    "home",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  const { isMinHeight1700px, isMinWidth1100px } = viewport;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
      sx={{
        zoom: isMinHeight1700px && 1.3,
      }}
    >
      <List
        sx={{
          display: "flex",
          p: "0",
          height: "100%",
        }}
      >
        {navItems.map((item, i) => {
          return (
            <HashLink
              to={`#${item}`}
              smooth
              key={`navListItem-${i}`}
              style={{
                // Necessary styles to override the ugly default styling
                // of <a> element
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <ListItem
                sx={{
                  p: isMinWidth1100px ? "0 5px" : "0 0",
                  height: "100%",
                }}
              >
                <ListItemButton
                  sx={{
                    height: "100%",
                    "&:hover": {
                      transition: "0.5s ease",
                      transform: "scale(1.15)",
                      cursor: "pointer",
                      color: palette.primary[200],
                      background: `linear-gradient(
                        180deg, 
                        ${hexToRgba(palette.primary[100], "0")},
                        ${hexToRgba(palette.primary[600], "0.5")},
                        ${hexToRgba(palette.primary[100], "0.3")}
                      )`,
                      "&.item-label": {
                        // fontWeight: "bold",
                      },
                    },
                  }}
                >
                  <Typography
                    fontFamily="Oswald, sans-serif"
                    fontSize="17px"
                    letterSpacing="1.5px"
                    // className="item-label"
                    sx={{ mt: "5px" }}
                  >
                    {item.toUpperCase()}
                  </Typography>
                </ListItemButton>
              </ListItem>
            </HashLink>
          );
        })}
      </List>
    </Box>
  );
};

export default CenterNavItems;
