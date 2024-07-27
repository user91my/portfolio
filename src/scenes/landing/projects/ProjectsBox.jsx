import React from "react";
import { useTheme, Box, Divider, useMediaQuery } from "@mui/material";
import hexToRgba from "hex-to-rgba";
import { Link } from "react-router-dom";

const ProjectsBox = ({ project }) => {
  const { palette } = useTheme();
  const { name, category, techStacks, description, liveURL, codeURL, image } =
    project;

  const isMinWidth1300px = useMediaQuery("(min-width: 1300px)");

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      borderRadius="10px"
      sx={{
        overflow: "hidden",
        background: `linear-gradient(
        360deg,
        ${hexToRgba(palette.primary[600], 0)},
        ${hexToRgba(palette.primary[800], 0.7)}
        )`,
      }}
    >
      {/* IMAGE */}
      <Link
        to={liveURL}
        style={{
          // Necessary styles to override the ugly default styling
          // of <a> element
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box height="200px" width="100%" sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              transform: "scale(1.25)",
              "&:hover": {
                transition: "0.5s ease",
                transform: "scale(1.5)",
                cursor: "pointer",
              },
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                height: "100%",
                width: "100%",
                objectFit: isMinWidth1300px ? "contain" : "cover",
                filter: !isMinWidth1300px && "blur(0.03rem)",
              }}
            />
          </Box>
        </Box>
      </Link>

      {/* NAME */}
      <Link
        to={liveURL}
        style={{
          // Necessary styles to override the ugly default styling
          // of <a> element
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          width="100%"
          p="10px 20px 0px"
          fontSize="1.75rem"
          fontWeight="300"
          letterSpacing="0.1rem"
        >
          <Box
            width="max-content"
            position="relative"
            sx={{
              "&:hover": {
                cursor: "pointer",
                transition: "0.25s ease",
                transform: "scale(1.1)",
                textShadow: `0 0 20px ${palette.primary[100]}`, // h-shadow v-shadow blur-radius color
              },
            }}
          >
            <Box
              position="absolute"
              left="0"
              right="0"
              top="0"
              bottom="0"
              margin="auto"
              height="0%"
              width="100%"
              borderRadius="10px"
              boxShadow="0 0 25px 2.5px white"
            ></Box>
            {name}
          </Box>
        </Box>
      </Link>

      {/* CATEGORY */}
      <Box m="0.3rem 1.4rem 0.6rem" fontStyle="italic" letterSpacing="0.5px">
        {category}
      </Box>

      <Divider sx={{ m: "5px 0 0", borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* TECH STACK */}
      <Box display="flex" flexDirection="column" gap="10px" m="0.5rem 1.4rem">
        {techStacks["frontend"] ? (
          <Box>
            <Box m="10px 0" fontSize="1.2rem" letterSpacing="1px">
              Frontend
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-evenly"
              gap="6px"
            >
              {techStacks["frontend"].map((tech) => {
                return (
                  <Box
                    key={`frontend-${tech}`}
                    p="0.3rem"
                    border={`solid 1px ${palette.grey[50]}`}
                    borderRadius="5px"
                    boxShadow={`0 0 2px 1px ${palette.primary[100]}`}
                  >
                    {tech}
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : null}

        {techStacks["backend"] ? (
          <Box>
            <Box m="10px 0" fontSize="1.2rem" letterSpacing="1px">
              Backend
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-evenly"
              gap="6px"
            >
              {techStacks["backend"].map((tech) => {
                return (
                  <Box
                    key={`backend-${tech}`}
                    p="0.3rem"
                    border={`solid 1px ${palette.grey[50]}`}
                    borderRadius="5px"
                    boxShadow={`0 0 2px 1px ${palette.primary[100]}`}
                  >
                    {tech}
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : null}
      </Box>

      <Divider
        sx={{ m: "10px 0 5px", borderColor: "rgba(255, 255, 255, 0.2)" }}
      />

      {/* URLs */}
      <Box display="flex" flexDirection="column" gap="10px" m="1rem 1.4rem">
        <Box>
          <Box p="3px 0" fontSize="1rem" letterSpacing="1px">
            Live URL :
          </Box>

          <Link
            to={liveURL}
            target="_blank" // Opens a new tab upon clicking
            rel="noreferrer noopener" // Prevents "tabnabbing" phishing
            style={{
              textDecoration: "underline", // alternatively, "none"
              color: "inherit",
            }}
          >
            <Box fontStyle="italic">{liveURL}</Box>
          </Link>
        </Box>

        <Box>
          <Box p="3px 0" fontSize="1rem" letterSpacing="1px">
            Code URL :
          </Box>

          <Link
            to={codeURL}
            target="_blank" // Opens a new tab upon clicking
            rel="noreferrer noopener" // Prevents "tabnabbing" phishing
            style={{
              textDecoration: "underline", // alternatively, "none"
              color: "inherit",
            }}
          >
            <Box fontStyle="italic">{codeURL}</Box>
          </Link>
        </Box>
      </Box>

      <Divider sx={{ m: "5px 0 0", borderColor: "rgba(255, 255, 255, 0.2)" }} />

      {/* DESCRIPTION */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        m="1rem 1.4rem"
      >
        {description}
      </Box>
    </Box>
  );
};

export default ProjectsBox;
