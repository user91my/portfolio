import React from "react";
import { useTheme, Box, Typography, useMediaQuery } from "@mui/material";
import hexToRgba from "hex-to-rgba";
import SkillsCategoryBox from "./SkillsCategoryBox";
import { frontend, backend, others, accounting } from "./skillsData";
import useResizeObserver from "../../../components/useResizeObserver";

const Skills = () => {
  const { palette } = useTheme();

  const skillsObj = {
    frontend,
    backend,
    others,
    accounting,
  };
  const skillsKeysArr = Object.keys(skillsObj);
  const skillsLength = skillsKeysArr.length;

  const isNonMobile = true;

  const isMinWidth3840px = useMediaQuery("(min-width: 3840px)");
  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1000px = useMediaQuery("(min-width: 1000px)");
  const isMinWidth850px = useMediaQuery("(min-width: 850px)");
  const isMinWidth575px = useMediaQuery("(min-width: 575px)");
  const isMinWidth425px = useMediaQuery("(min-width: 425px)");

  // "useResizeObserver" used to track the height of components
  // (see Box with "ref={childElRef}").
  // The parent Box's height must always be higher than the child Box.
  const [childHeight, childElRef] = useResizeObserver();
  const parentHeight = Math.ceil(childHeight) * 1.25;

  return (
    <Box
      id="skills"
      height={`${parentHeight}px`}
      minHeight="850px"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: `linear-gradient(
            180deg,
            ${hexToRgba(palette.primary[400], 1)},
            ${hexToRgba(palette.primary[600], 1)},
            ${hexToRgba(palette.primary[700], 1)}
          )`,
      }}
    >
      <Box
        ref={childElRef}
        minHeight={"500px"}
        width={isMinWidth3840px ? "50%" : "60%"}
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
          mb={isMinWidth2560px ? null : "20px"}
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
          SKILLS
        </Typography>

        {/* SKILLS CATEGORY TABS */}
        {isNonMobile ? null : (
          <Box
            display="flex"
            justifyContent="center"
            mb="20px"
            border="solid 1px"
            borderRadius="8px"
            sx={{
              overflow: "hidden",
            }}
          >
            {Object.keys(skillsObj).map((title, i) => {
              return (
                <Box
                  key={`${title}-tab`}
                  display="flex"
                  justifyContent="center"
                  fontSize="1.1rem"
                  letterSpacing="0.1rem"
                  borderRight={i === skillsLength - 1 ? undefined : "solid 1px"}
                  m="0"
                  sx={{
                    "&:hover": {
                      background: palette.primary[300],
                    },
                  }}
                >
                  <Box
                    p="10px 20px"
                    sx={{
                      "&:hover": {
                        borderRadius: "8px",
                        transition: "0.5s ease",
                        transform: "scale(1.1)",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {title.toUpperCase()}
                  </Box>
                </Box>
              );
            })}
          </Box>
        )}

        {/* CONTAINER FOR SKILLS */}
        <Box
          display="grid"
          gridTemplateColumns={
            isMinWidth1000px ? "repeat(2, minmax(0, 1fr))" : "1fr"
          }
          gap={isMinWidth3840px ? "2vw" : isMinWidth2560px ? "1.5vw" : "2.5vw"}
          width={isMinWidth1000px ? null : isMinWidth850px ? "750px" : "500px"}
          p="0 20px"
          sx={{
            zoom: isMinWidth3840px
              ? 2
              : isMinWidth2560px
              ? 1.5
              : isMinWidth575px
              ? 1
              : isMinWidth425px
              ? 0.8
              : 0.7,
          }}
        >
          {Object.entries(skillsObj).map(([title, skills]) => {
            return (
              <SkillsCategoryBox
                key={`${title}-box`}
                title={title.toUpperCase()}
                skillsDataArr={skills}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
