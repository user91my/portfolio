import React from "react";
import { useTheme, Box } from "@mui/material";

const Skills = ({ skillName, img }) => {
  const { palette } = useTheme();
  return (
    <Box
      display="flex"
      alignItems="center"
      border={`solid 1px ${palette.grey[50]}`}
      borderRadius="5px"
      m="10px 5px"
      gap="7px"
      p="5px 7px"
      boxShadow={`0 0 5px 1px ${palette.primary[100]}`}
    >
      <img width="30px" src={img} alt={skillName} />
      <Box
        letterSpacing="1px"
        sx={{
          transform: "scale(1, 1.15)",
        }}
      >
        {skillName}
      </Box>
    </Box>
  );
};

export default Skills;
