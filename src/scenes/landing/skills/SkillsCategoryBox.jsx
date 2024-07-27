import React from "react";
import hexToRgba from "hex-to-rgba";
import { useTheme, Box } from "@mui/material";
import SkillsMiniBox from "./SkillsMiniBox";

const SkillsBox = ({ title, skillsDataArr }) => {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      borderRadius="10px"
      sx={{
        background: `linear-gradient(
            360deg,
            ${hexToRgba(palette.primary[600], 0)},
            ${hexToRgba(palette.primary[800], 0.7)}
        )`,
      }}
    >
      {/* CONTAINER FOR TITLE & SKILLS */}
      <Box height="97%" width="92.5%" display="flex" flexDirection="column">
        {/* TITLE */}
        <Box
          display="flex"
          justifyContent="center"
          fontSize="1.4rem"
          letterSpacing="0.2rem"
          height="8%"
          minHeight="55px"
          pt="20px"
          pb="50px"
          sx={{
            transform: "scale(.95, 1)",
          }}
        >
          {title}
        </Box>

        {/* SKILLS */}
        <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
          {skillsDataArr
            ? skillsDataArr.map((skill) => (
                <SkillsMiniBox
                  key={skill.name}
                  skillName={skill.name}
                  img={skill.image}
                />
              ))
            : null}
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsBox;
