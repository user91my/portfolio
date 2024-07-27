import React from "react";
import {
  useTheme,
  Box,
  Typography,
  useMediaQuery,
  Divider,
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
import { educationData } from "./educationData";
import useResizeObserver from "../../../components/useResizeObserver";

const Education = () => {
  const { palette } = useTheme();

  const isMinWidth3840px = useMediaQuery("(min-width: 3840px)");
  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1200px = useMediaQuery("(min-width: 1200px)");
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
      id="education"
      position="relative"
      height={`${parentHeight}px`}
      minHeight="1100px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        background: `linear-gradient(
          180deg,
          ${hexToRgba(palette.primary[700], 1)},
          ${hexToRgba(palette.primary[600], 1)},
          ${hexToRgba(palette.primary[500], 1)},
          ${hexToRgba(palette.primary[500], 1)}
        )`,
      }}
    >
      <Box
        ref={childElRef}
        position="absolute"
        top="7%"
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
          EDUCATION
        </Typography>

        {/* CONTAINER FOR EDUCATION */}
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
              [`& .${timelineItemClasses.root}:before`]: !isMinWidth1200px && {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {educationData.map(({ logo, institution, course }, i) => (
              <TimelineItem key={`education-item-${i}`}>
                {/* INSTITUTION (LEFT-SIDE) */}
                {isMinWidth1200px && (
                  <TimelineOppositeContent
                    sx={{ flex: "0.6", p: "20px 45px 60px" }}
                  >
                    <Box
                      fontFamily="Oswald, sans-serif"
                      fontSize="2rem"
                      letterSpacing="0.2rem"
                    >
                      {institution.toUpperCase()}
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
                    sx={{
                      background: `${palette.primary[400]}`,
                    }}
                  />
                </TimelineSeparator>

                <TimelineContent
                  sx={{
                    p: isMinWidth1100px ? "20px 45px 10px" : "20px 20px 10px",
                  }}
                >
                  {/* CONTAINER FOR COURSE DETAILS */}
                  <Box
                    position="relative"
                    top="-5px"
                    display="flex"
                    flexDirection="column"
                    gap="15px"
                    borderRadius="10px"
                    padding={
                        isMinWidth475px ? "35px 65px 25px" : "35px 35px 20px"
                      }
                    mb="30px"
                    sx={{
                      background: `linear-gradient(
                        180deg,
                        ${hexToRgba(palette.primary[800], 0.5)},
                        ${hexToRgba(palette.primary[800], 0.2)},
                        ${hexToRgba(palette.primary[600], 0)}
                      )`,
                    }}
                  >
                    {/* INSTITUTION (RIGHT-SIDE) */}
                    {!isMinWidth1200px && (
                      <>
                        <Box
                          fontFamily="Oswald, sans-serif"
                          fontSize="2rem"
                          letterSpacing="0.2rem"
                        >
                          {institution.toUpperCase()}
                        </Box>

                        <Divider
                          sx={{
                            mb: "3px",
                            borderColor: "rgba(255, 255, 255, 0.3)",
                          }}
                        />
                      </>
                    )}

                    {course.map(({ module, period }, i) => (
                      <Box
                        key={`course-item-${i}`}
                        display="flex"
                        flexDirection="column"
                        gap="7px"
                      >
                        {/* MODULE */}
                        <Box
                          fontSize="1.5rem"
                          letterSpacing="2px"
                          fontFamily="Oswald, sans-serif"
                          fontWeight="400"
                          sx={{ transform: "scale(1, 0.9)" }}
                        >
                          {module.toUpperCase()}
                        </Box>

                        {/* PERIOD */}
                        <Box
                          position="relative"
                          top="-5px"
                          fontSize="1.1rem"
                          fontStyle="italic"
                          fontWeight="300"
                        >
                          {period.toUpperCase()}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
