import React from "react";
import { useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import hexToRgba from "hex-to-rgba";
import SVGBg from "../../../components/SVGBackground";
import ProjectsBox from "./ProjectsBox";
import { projectsData } from "./projectsData";
import useResizeObserver from "../../../components/useResizeObserver";

const Projects = () => {
  const { palette } = useTheme();

  const isMinWidth3840px = useMediaQuery("(min-width: 3840px)");
  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1400px = useMediaQuery("(min-width: 1400px)");
  const isMinWidth1100px = useMediaQuery("(min-width: 1100px)");
  const isMinWidth700px = useMediaQuery("(min-width: 700px)");
  const isMinWidth575px = useMediaQuery("(min-width: 575px)");
  const isMinWidth500px = useMediaQuery("(min-width: 500px)");

  // "useResizeObserver" used to track the height of components
  // (see Box with "ref={childElRef}").
  // The parent Box's height must always be higher than the child Box.
  const [childHeight, childElRef] = useResizeObserver();
  const multiplier = isMinWidth1100px ? 1.148 : 1.05;
  const parentHeight = Math.ceil(childHeight) * multiplier;

  return (
    <Box
      id="projects"
      position="relative"
      height={`${parentHeight}px`}
      minHeight="800px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `linear-gradient(
          180deg,
          ${hexToRgba(palette.primary[700], 1)},
          ${hexToRgba(palette.primary[700], 1)},
          ${hexToRgba(palette.primary[700], 1)},
          ${hexToRgba(palette.primary[800], 0.4)}
        )`,
      }}
    >
      {/* SVG BACKGROUND PATTERN */}
      <SVGBg bgColor={palette.primary[400]} strokeColor={palette.grey[300]} />

      <Box
        ref={childElRef}
        position="absolute"
        width={isMinWidth1400px ? "85%" : "75%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* TITLE */}
        <Typography
          fontFamily="Oswald, sans-serif"
          fontSize="3.5rem"
          letterSpacing="0.25rem"
          p={isMinWidth3840px ? "2.5vh 0" : "3.25vh 0 5vh"}
          sx={{
            zoom: isMinWidth3840px
              ? 2
              : isMinWidth2560px
              ? 1.25
              : isMinWidth575px
              ? 1
              : 0.8,
          }}
        >
          PROJECTS
        </Typography>

        {/* CONTAINER FOR PROJECTS */}
        <Box
          display="grid"
          gridTemplateColumns={
            isMinWidth1400px
              ? "repeat(4, minmax(0, 1fr))"
              : isMinWidth1100px
              ? "repeat(2, minmax(0, 1fr))"
              : isMinWidth700px
              ? "550px"
              : isMinWidth500px
              ? "400px"
              : "300px"
          }
          gap={isMinWidth3840px ? "1.25vw" : isMinWidth1400px ? "3vw" : "5vw"}
          height="max-content"
          sx={{
            zoom: isMinWidth3840px ? 2 : isMinWidth2560px ? 1.5 : null,
          }}
        >
          {projectsData.map((project) => {
            return <ProjectsBox key={project.name} project={project} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
