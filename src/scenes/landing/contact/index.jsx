import React from "react";
import baseURL from "../../../components/baseURL";
import { useTheme, Box, Divider, useMediaQuery } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import hexToRgba from "hex-to-rgba";
import SVGBg from "../../../components/SVGBackground";
import Particles from "reactparticles.js";
import useResizeObserver from "../../../components/useResizeObserver";

const Contact = () => {
  const { palette } = useTheme();

  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1600px = useMediaQuery("(min-width: 1600px)");
  const isMinWidth1100px = useMediaQuery("(min-width: 1100px)");
  const isMinWidth850px = useMediaQuery("(min-width: 850px)");
  const isMinWidth750px = useMediaQuery("(min-width: 750px)");
  const isMinWidth450px = useMediaQuery("(min-width: 450px)");

  // "useResizeObserver" used to track the height of components
  // (see Box with "ref={childElRef}").
  // The parent Box's height (parentHeight) must always be higher
  // than the child Box's (childHeight).
  const [childHeight, childElRef] = useResizeObserver();
  const parentHeight =
    Math.ceil(childHeight) * `${isMinWidth2560px ? 4 : 2.75}`;

  const linkStyle = {
    // Necessary styles to override the ugly default styling
    // of <a> element
    textDecoration: "none",
    color: "inherit",
    //
    width: "max-content",
  };

  const contactHoverProperties = {
    transition: "0.5s ease",
    transform: "scale(1.05)",
    color: palette.secondary[300],
  };

  return (
    <Box
      id="contact"
      position="relative"
      height={`${parentHeight}px`}
      minHeight="300px"
      display="flex"
      sx={{
        background: `linear-gradient(
          180deg,
          ${hexToRgba(palette.primary[600], 0.5)},
          ${hexToRgba(palette.primary[600], 0.9)},
          ${hexToRgba(palette.primary[700], 1)}
        )`,
      }}
    >
      {/* SVG BACKGROUND PATTERN */}
      <SVGBg bgColor={palette.primary[400]} strokeColor={palette.grey[300]} />

      {/* ANIMATED PARTICLES BACKGROUND */}
      {/* https://www.npmjs.com/package/reactparticles.js */}
      {/* https://vincentgarreau.com/particles.js/ */}
      <Particles
        id="config-2" // ID must be unique! Conflicting IDs will cause 'Particles' to not work.
        className="particlesBg"
        // 'config' is the directory to the json config file.
        // Its root directory is the 'particles' subfolder located in
        // the main 'public' folder.
        config={`${baseURL}/particles/particles-config-2.json`} // client\public\particles\particles-config-2.json
        style={{
          position: "absolute",
          left: "auto",
          right: "0",
          width: "70%",
          height: "99%",
          background: `linear-gradient(
              90deg, 
              ${hexToRgba(palette.primary[400], "0")},
              ${hexToRgba(palette.primary[600], "0.5")},
              ${hexToRgba(palette.primary[700], "1")}
            )`,
        }}
      />

      <Box
        ref={childElRef}
        position="absolute"
        top="10%"
        left={
          isMinWidth1600px
            ? "6%"
            : isMinWidth1100px
            ? "8%"
            : isMinWidth850px
            ? "10%"
            : isMinWidth450px
            ? "12%"
            : 0
        }
        right={!isMinWidth450px && 0}
        m={!isMinWidth450px && "auto"}
        width={isMinWidth450px ? "88%" : "max-content"}
        display="flex"
        sx={{ zoom: isMinWidth2560px ? 2.15 : isMinWidth750px ? 1.3 : 1.1 }}
      >
        <Box display="flex" flexDirection="column">
          {/* JONDEV | CONTACT */}
          <Box display="flex" gap="15px" mb="22px">
            <Box fontFamily="Oswald, sans-serif" fontSize="2.5rem">
              JONDEV
            </Box>

            <Divider
              orientation="vertical"
              sx={{
                borderColor: "rgba(255, 255, 255)",
                borderRightWidth: "3px",
                height: "75%",
                position: "relative",
                top: "8px",
              }}
            />

            <Box
              fontFamily="Oswald, sans-serif"
              fontSize="1.75rem"
              letterSpacing="1px"
              py="10px"
            >
              CONTACT
            </Box>
          </Box>

          {/* CONTACT LINKS */}
          <Box display="flex" flexDirection="column" gap="15px">
            {/* EMAIL */}
            <Link
              style={linkStyle}
              to="mailto:jwwf.dev@gmail.com"
              target="_blank" // Opens a new tab upon clicking
              rel="noreferrer noopener" // Prevents "tabnabbing" phishing
            >
              <Box
                display="flex"
                gap="20px"
                sx={{
                  "&:hover": {
                    ...contactHoverProperties,
                  },
                }}
              >
                <Email sx={{ fontSize: "28px" }} />
                <Box fontSize="1.25rem">jwwf.dev@gmail.com</Box>
              </Box>
            </Link>

            {/* LINKEDIN */}
            <Link
              style={linkStyle}
              to="https://www.linkedin.com/in/jonrae-wan-69b80776"
              target="_blank" // Opens a new tab upon clicking
              rel="noreferrer noopener" // Prevents "tabnabbing" phishing
            >
              <Box
                display="flex"
                gap="20px"
                sx={{
                  "&:hover": {
                    ...contactHoverProperties,
                  },
                }}
              >
                <LinkedIn sx={{ fontSize: "28px" }} />
                <Box fontSize="1.25rem">LinkedIn</Box>
              </Box>
            </Link>

            {/* GITHUB */}
            <Link
              style={linkStyle}
              to="https://github.com/user91my"
              target="_blank" // Opens a new tab upon clicking
              rel="noreferrer noopener" // Prevents "tabnabbing" phishing
            >
              <Box
                display="flex"
                gap="20px"
                sx={{
                  "&:hover": {
                    ...contactHoverProperties,
                  },
                }}
              >
                <GitHub sx={{ fontSize: "28px" }} />
                <Box fontSize="1.25rem">GitHub</Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
