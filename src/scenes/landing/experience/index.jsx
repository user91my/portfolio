import React from "react";
import {
  useTheme,
  Box,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import hexToRgba from "hex-to-rgba";
import SVGBg from "../../../components/SVGBackground";
import { experienceData } from "./experienceData";
import useResizeObserver from "../../../components/useResizeObserver";

const Experience = () => {
  const { palette } = useTheme();

  const isMinWidth3840px = useMediaQuery("(min-width: 3840px)");
  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1100px = useMediaQuery("(min-width: 1100px)");
  const isMinWidth850px = useMediaQuery("(min-width: 850px)");
  const isMinWidth750px = useMediaQuery("(min-width: 750px)");
  const isMinWidth650px = useMediaQuery("(min-width: 650px)");
  const isMinWidth575px = useMediaQuery("(min-width: 575px)");
  const isMinWidth475px = useMediaQuery("(min-width: 475px)");

  // "useResizeObserver" used to track the height of components
  // (see Box with "ref={childElRef}").
  // The parent Box's height (parentHeight) must always be higher
  // than the child Box's (childHeight).
  const [childHeight, childElRef] = useResizeObserver();
  const parentHeight = Math.ceil(childHeight) * 1.1;

  return (
    <Box
      id="experience"
      position="relative"
      height={`${parentHeight}px`}
      minHeight="1100px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `linear-gradient(
          180deg,
          ${hexToRgba(palette.primary[800], 0.4)},
          ${hexToRgba(palette.primary[700], 0.8)},
          ${hexToRgba(palette.primary[700], 1)},
          ${hexToRgba(palette.primary[700], 1)}
        )`,
      }}
    >
      {/* SVG BACKGROUND PATTERN */}
      <SVGBg bgColor={palette.primary[400]} strokeColor={palette.grey[300]} />

      <Box
        ref={childElRef}
        position="absolute"
        width={isMinWidth850px ? null : "55%"}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        {/* TITLE */}
        <Typography
          fontFamily="Oswald, sans-serif"
          fontSize="3.5rem"
          letterSpacing="0.25rem"
          p="2.5vh 0"
          mb={isMinWidth2560px ? null : isMinWidth750px ? "3vh" : null}
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
          EXPERIENCE
        </Typography>

        {/* CONTAINER FOR EXPERIENCE */}
        <Box
          display="flex"
          justifyContent="center"
          width={
            isMinWidth2560px
              ? "50vw"
              : isMinWidth1100px
              ? "90vw"
              : isMinWidth850px
              ? "770px"
              : isMinWidth475px
              ? "600px"
              : "300px"
          }
          mx={isMinWidth850px ? null : isMinWidth575px ? "50px" : "100px"}
          sx={{
            zoom: isMinWidth2560px
              ? 1.5
              : isMinWidth750px
              ? null
              : isMinWidth650px
              ? 0.9
              : isMinWidth575px
              ? 0.75
              : 0.7,
          }}
        >
          <Timeline
            sx={{
              // To remove the flex & padding on the left-side of the timeline
              // https://mui.com/material-ui/react-timeline/#left-aligned-with-no-opposite-content
              [`& .${timelineItemClasses.root}:before`]: !isMinWidth1100px && {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {experienceData.map(
              (
                { role, company, period, description, responsibility, logo },
                i
              ) => (
                <TimelineItem key={`experience-item-${i}`}>
                  {/* ROLE (LEFT-SIDE) */}
                  {isMinWidth1100px && (
                    <TimelineOppositeContent
                      sx={{
                        flex: "0.3",
                        p: "20px 45px 60px",
                      }}
                    >
                      <Box
                        fontFamily="Oswald, sans-serif"
                        fontSize="2rem"
                        letterSpacing="0.2rem"
                      >
                        {role.toUpperCase()}
                      </Box>
                    </TimelineOppositeContent>
                  )}

                  {/* LOGO + Line Separator */}
                  <TimelineSeparator>
                    <TimelineDot
                      color="inherit"
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        width: "80px",
                        height: "80px",
                        border: `solid 4px ${palette.primary[400]}`,
                      }}
                    >
                      {logo}
                    </TimelineDot>
                    <TimelineConnector
                      sx={{ background: `${palette.primary[400]}` }}
                    />
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      p: isMinWidth1100px ? "20px 45px 10px" : "20px 20px 10px",
                    }}
                  >
                    {/* CONTAINER FOR COMPANY, PERIOD, etc... */}
                    <Box
                      position="relative"
                      top="-5px"
                      display="flex"
                      flexDirection="column"
                      gap="7px"
                      borderRadius="10px"
                      padding={
                        isMinWidth475px ? "35px 65px 20px" : "35px 35px 20px"
                      }
                      mb="30px"
                      width={isMinWidth475px ? null : "350px"}
                      sx={{
                        background: `linear-gradient(
                        180deg,
                        ${hexToRgba(palette.primary[800], 0.7)},
                        ${hexToRgba(palette.primary[800], 0.7)},
                        ${hexToRgba(palette.primary[600], 0)}
                        )`,
                      }}
                    >
                      {/* ROLE (RIGHT-SIDE) */}
                      {!isMinWidth1100px && (
                        <>
                          <Box
                            fontFamily="Oswald, sans-serif"
                            fontSize="2rem"
                            letterSpacing="0.2rem"
                          >
                            {role.toUpperCase()}
                          </Box>

                          <Divider
                            sx={{
                              mb: "3px",
                              borderColor: "rgba(255, 255, 255, 0.3)",
                            }}
                          />
                        </>
                      )}

                      {/* COMPANY */}
                      <Box
                        fontSize="1.5rem"
                        letterSpacing="2px"
                        fontFamily="Oswald, sans-serif"
                        fontWeight="500"
                        sx={{ transform: "scale(1, 0.9)" }}
                      >
                        {company.toUpperCase()}
                      </Box>

                      {/* PERIOD */}
                      <Box
                        position="relative"
                        top="-5px"
                        fontSize="1.2rem"
                        fontStyle="italic"
                        fontWeight="500"
                      >
                        {period.toUpperCase()}
                      </Box>

                      <Divider
                        sx={{
                          mb: "3px",
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        }}
                      />

                      {/* DESCRIPTION */}
                      <Box fontSize="1.2rem" lineHeight="1.6rem">
                        {description}
                      </Box>

                      <Divider
                        sx={{
                          my: "3px",
                          borderColor: "rgba(255, 255, 255, 0.3)",
                        }}
                      />

                      {/* RESPONSIBILITY */}
                      <Box
                        position="relative"
                        left="-20px"
                        fontSize="1rem"
                        lineHeight="1.8rem"
                        letterSpacing="0.5px"
                      >
                        {responsibility}
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              )
            )}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
