import React from "react";
import baseURL from "../../../components/baseURL";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import SVGBg from "../../../components/SVGBackground";
import hexToRgba from "hex-to-rgba";
import Typewriter from "typewriter-effect";
import Particles from "reactparticles.js";
import { Link } from "react-router-dom";

const Home = () => {
  const { palette } = useTheme();
  const experience = [
    "FULL STACK DEVELOPER",
    "SENIOR AUDIT & ACCOUNTING ASSOCIATE",
  ];
  const hoverProperties = {
    transition: "0.5s ease",
    transform: "scale(1.3)",
    color: palette.secondary[300],
    cursor: "pointer",
    background: "none",
  };

  const isMinHeight900px = useMediaQuery("(min-height: 900px)");

  const isMinWidth3840px = useMediaQuery("(min-width: 3840px)");
  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth900px = useMediaQuery("(min-width: 900px)");
  const isMinWidth675px = useMediaQuery("(min-width: 675px)");
  const isMinWidth475px = useMediaQuery("(min-width: 475px)");

  return (
    <Box
      id="home"
      position="relative"
      height="100vh"
      minHeight="700px"
      sx={{
        background: `linear-gradient(
            180deg,
            ${hexToRgba(palette.primary[700], 0.7)},
            ${hexToRgba(palette.primary[600], 0.8)},
            ${hexToRgba(palette.primary[400], 0.7)}
        )`,
      }}
    >
      {/* SVG CONTAINER */}
      <Box
        position="relative"
        width="100%"
        height="100%"
        sx={{
          zIndex: "-1",
        }}
      >
        {/* SVG BACKGROUND PATTERN */}
        <SVGBg bgColor={palette.primary[400]} strokeColor={palette.grey[300]} />
      </Box>

      {/* CONTAINER FOR SLOGAN + NAME + PARTICLES */}
      <Box
        position="absolute"
        top="5vh" // 5vh is the height of the navbar
        bottom="0"
        margin="auto" // the combined values of top, bottom & margin properties will vertically center the Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        px={isMinWidth675px ? "5rem" : "2rem"}
        height={isMinHeight900px ? "75%" : "100%"}
        maxHeight="840px"
        minHeight="600px"
        width="100%"
        sx={{
          background: `linear-gradient(
              75deg, 
              ${hexToRgba(palette.primary[800], "1")},
              ${hexToRgba(palette.primary[400], "0.2")}
          )`,
          overflow: "hidden",
          boxShadow: `0 0 10px 4px ${palette.primary[100]}`,
          borderTop: `solid 2px ${palette.primary[100]}`,
          borderBottom: `solid 2px ${palette.primary[100]}`,
          zoom: isMinWidth3840px ? 1.9 : isMinWidth2560px ? 1.5 : null,
        }}
      >
        {/* ANIMATED PARTICLES BACKGROUND */}
        {/* https://www.npmjs.com/package/reactparticles.js */}
        {/* https://vincentgarreau.com/particles.js/ */}
        <Particles
          id="config-1" // ID must be unique! Conflicting IDs will cause 'Particles' to not work.
          className="particlesBg"
          // 'config' is the directory to the json config file.
          // Its root directory is the 'particles' subfolder located in
          // the main 'public' folder.
          config={`${baseURL}/particles/particles-config-1.json`} // client\public\\particles\particles-config-1.json
          style={{
            position: "absolute",
            left: "auto",
            right: "0",
            width: "65%",
            height: "100%",
            background: `linear-gradient(
              90deg, 
              ${hexToRgba(palette.primary[400], "0")},
              ${hexToRgba(palette.primary[600], "0.5")},
              ${hexToRgba(palette.primary[700], "1")}
            )`,
          }}
        />

        {/* TEXTS */}
        <Box
          minWidth={isMinWidth900px ? "800px" : "500px"}
          zIndex="1"
          sx={{ zoom: isMinWidth675px ? null : isMinWidth475px ? 0.8 : 0.6 }}
        >
          {/* SLOGAN "WEB SOLUTIONS FOR..." */}
          <Box
            display={isMinWidth900px ? null : "flex"}
            flexDirection={isMinWidth900px ? null : "column"}
            alignItems={isMinWidth900px ? null : "center"}
            fontFamily="Oswald, sans-serif"
            fontSize="4.5rem"
            letterSpacing="0.1rem"
            lineHeight="1.3"
          >
            WEB SOLUTIONS
            <Box display={isMinWidth900px ? "inline" : "block"}> FOR THE</Box>
            <Typography
              fontFamily="Oswald, sans-serif"
              fontSize="6.75rem"
              fontWeight="bold"
              letterSpacing="0.35rem"
              lineHeight="1"
            >
              BUSINESS
            </Typography>
          </Box>

          <Box m="1.5rem 0 1.15rem 0">
            {/* CONTAINER FOR NAME AND ICONS */}
            <Box
              display="flex"
              flexDirection={isMinWidth900px ? null : "column"}
              alignItems={isMinWidth900px ? null : "center"}
              gap={isMinWidth900px ? "10px" : null}
            >
              {/* NAME */}
              <Box
                fontFamily="Oswald, sans-serif"
                fontSize="3.25rem"
                letterSpacing="0.25rem"
              >
                JONRAE WAN
              </Box>

              {/* PROFILE ICONS - LINKEDIN, GITHUB */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                height="75px"
                width="180px"
                p={isMinWidth900px ? "20px 15px 12px" : null}
              >
                {/* EMAIL */}
                <Link
                  to="mailto:jwwf.dev@gmail.com"
                  target="_blank" // Opens a new tab upon clicking
                  rel="noreferrer noopener" // Prevents "tabnabbing" phishing
                  style={{ marginRight: "3px" }}
                >
                  <IconButton
                    sx={{
                      color: palette.secondary[400],
                      width: "33px",
                      height: "32px",
                      borderRadius: "0px",
                      boxShadow: `0 0 10px 4px ${palette.primary[100]}`,
                      "&:hover": {
                        ...hoverProperties,
                        borderRadius: "0px",
                        boxShadow: `0 0 10px 7px ${palette.primary[100]}`,
                      },
                    }}
                  >
                    <Email
                      sx={{
                        fontSize: "50px",
                      }}
                    />
                  </IconButton>
                </Link>

                {/* LINKEDIN */}
                <Link
                  to="https://www.linkedin.com/in/jonrae-wan-69b80776"
                  target="_blank" // Opens a new tab upon clicking
                  rel="noreferrer noopener" // Prevents "tabnabbing" phishing
                >
                  <IconButton
                    sx={{
                      color: palette.secondary[400],
                      width: "33px",
                      height: "32px",
                      borderRadius: "0px",
                      boxShadow: `0 0 10px 4px ${palette.primary[100]}`,
                      "&:hover": {
                        ...hoverProperties,
                        borderRadius: "0px",
                        boxShadow: `0 0 10px 7px ${palette.primary[100]}`,
                      },
                    }}
                  >
                    <LinkedIn
                      sx={{
                        fontSize: "50px",
                      }}
                    />
                  </IconButton>
                </Link>

                {/* GITHUB */}
                <Link
                  to="https://github.com/user91my"
                  target="_blank" // Opens a new tab upon clicking
                  rel="noreferrer noopener" // Prevents "tabnabbing" phishing
                >
                  <IconButton
                    sx={{
                      color: palette.secondary[400],
                      width: "35px",
                      height: "35px",
                      boxShadow: `0 0 10px 5px ${palette.primary[100]}`,
                      "&:hover": {
                        ...hoverProperties,
                        boxShadow: `0 0 10px 7px ${palette.primary[100]}`,
                      },
                    }}
                  >
                    <GitHub
                      sx={{
                        fontSize: "45px",
                        mb: "1.5px",
                      }}
                    />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>

          {/* EXPERIENCE */}
          <Box
            fontSize="2rem"
            letterSpacing="0.35rem"
            height={isMinWidth900px ? null : "100px"}
            textAlign={isMinWidth900px ? null : "center"}
          >
            {/* https://www.npmjs.com/package/typewriter-effect */}
            <Typewriter
              options={{
                strings: experience,
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                delay: 45, // delay between each key when typing
                deleteSpeed: 45, // delay between deleting each character
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
