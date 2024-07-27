import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import {
  Home,
  AutoAwesome,
  AutoAwesomeMosaic,
  Public,
  School,
  Mail,
} from "@mui/icons-material";
import hexToRgba from "hex-to-rgba";
import { HashLink } from "react-router-hash-link";

const Sidebar = ({
  sidebarController,
  isSidebarOpen,
  isSidebarOpening,
  isSidebarClosing,
}) => {
  const { palette } = useTheme();

  const sidebarIconCss = { fontSize: "35px", position: "relative", top: "2px" };
  const sidebarItems = [
    { icon: <Home sx={sidebarIconCss} />, text: "home" },
    { icon: <AutoAwesome sx={sidebarIconCss} />, text: "skills" },
    { icon: <AutoAwesomeMosaic sx={sidebarIconCss} />, text: "projects" },
    { icon: <Public sx={sidebarIconCss} />, text: "experience" },
    { icon: <School sx={sidebarIconCss} />, text: "education" },
    { icon: <Mail sx={sidebarIconCss} />, text: "contact" },
  ];

  const isSidebarOpenClass = isSidebarOpen ? "sidebarOpened" : "sidebarClosed";
  const isSidebarOpeningClass = isSidebarOpening ? "sidebarOpening" : "";
  const isSidebarClosingClass = isSidebarClosing ? "sidebarClosing" : "";

  const isMinHeight850px = useMediaQuery("(min-height: 850px)");

  const isMinWidth700px = useMediaQuery("(min-width: 700px)");

  return (
    <>
      {isSidebarOpen && (
        <Box position="fixed" width="100vw" height="100vh" zIndex="100">
          {/* BLUR LAYOUT */}
          <Box
            className={`
              ${isSidebarOpenClass} 
              ${isSidebarOpeningClass} 
              ${isSidebarClosingClass}
            `}
            onClick={sidebarController}
            position="absolute"
            width="100%"
            height="100%"
            zIndex="-1"
            sx={{
              willChange: "opacity, backdropFilter",
              background: `${hexToRgba(palette.primary[500], 0.5)}`,
              transition: "opacity 0.5s",
              "&.sidebarOpening": { opacity: 0 },
              "&.sidebarOpened": { backdropFilter: "blur(5px)" },
              "&.sidebarClosing": { opacity: 0 },
              "&.sidebarClosed": { display: "none" },
            }}
          ></Box>

          {/* SIDEBAR */}
          <Box
            className={`
              ${isSidebarOpenClass} 
              ${isSidebarOpeningClass} 
              ${isSidebarClosingClass}
            `}
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width={isMinWidth700px && isMinHeight850px ? "350px" : "250px"}
            height="100%"
            sx={{
              willChange: "transform",
              background: `linear-gradient(
                180deg, 
                ${hexToRgba(palette.primary[600], "0.7")},
                ${hexToRgba(palette.primary[600], "0.9")},
                ${hexToRgba(palette.primary[500], "1")},
                ${hexToRgba(palette.primary[500], "1")},
                ${hexToRgba(palette.primary[500], "1")},
                ${hexToRgba(palette.primary[500], "1")},
                ${hexToRgba(palette.primary[500], "1")},
                ${hexToRgba(palette.primary[500], "0.9")},
                ${hexToRgba(palette.primary[600], "0.7")}
              )`,
              boxShadow: `5px 0 35px 15px ${hexToRgba(
                palette.primary[100],
                1
              )}`,
              transition: "transform 0.5s",
              "&.sidebarOpening": { transform: "translate(-350px)" },
              "&.sidebarClosing": { transform: "translate(-350px)" },
              "&.sidebarClosed": { display: "none" },
            }}
          >
            {/* CONTAINER FOR ITEMS IN SIDEBAR */}
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="25px"
              height="75%"
              minHeight="650px"
              overflow="hidden"
              sx={{
                zoom: isMinWidth700px && isMinHeight850px ? null : 0.8,
              }}
            >
              {sidebarItems.map((item, i) => (
                <HashLink
                  to={`#${item["text"]}`}
                  smooth
                  key={`side-nav-item-${i}`}
                  style={{
                    // Necessary styles to override the ugly default styling
                    // of <a> element
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Box
                    display="flex"
                    pl={isMinWidth700px && isMinHeight850px ? "60px" : "50px"}
                    alignItems="center"
                    height="75px"
                    sx={{
                      willChange: "transform",
                      "&:hover": {
                        transition: "0.5s ease",
                        transform: "scale(1.1)",
                        cursor: "pointer",
                        color: palette.primary[200],
                        background: `linear-gradient(
                          180deg,
                          ${hexToRgba(palette.primary[600], "0.5")},
                          ${hexToRgba(palette.primary[100], "0.3")}
                        )`,
                      },
                    }}
                  >
                    <Box
                      display="flex"
                      gap="25px"
                      fontFamily="Oswald, sans-serif"
                      fontSize="1.5rem"
                      letterSpacing="3px"
                    >
                      {item["icon"]}
                      {item["text"].toUpperCase()}
                    </Box>
                  </Box>
                </HashLink>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
