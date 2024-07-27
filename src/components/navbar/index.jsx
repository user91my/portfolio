import React from "react";
import { useTheme, AppBar, Toolbar, useMediaQuery } from "@mui/material";
import LeftNavItems from "./LeftNavItems";
import CenterNavItems from "./CenterNavItems";
import RightNavItems from "./RightNavItems";

const Navbar = ({ sidebarController }) => {
  const { palette } = useTheme();

  const isMinHeight1700px = useMediaQuery("(min-height: 1700px)");

  const isMinWidth2560px = useMediaQuery("(min-width: 2560px)");
  const isMinWidth1100px = useMediaQuery("(min-width: 1100px)");
  const isMinWidth950px = useMediaQuery("(min-width: 950px)");
  const isMinWidth475px = useMediaQuery("(min-width: 475px)");

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          background: `linear-gradient(
            180deg, 
            ${palette.primary[600]}, 
            ${palette.primary[400]}
          )`,
          height: "5vh",
          overflow: "hidden",
          zoom: isMinWidth2560px ? 1.7 : isMinWidth475px ? null : 0.85,
        }}
      >
        {/* LEFT-SIDE : LOGO + MENU ICON (IF WIDTH < 950PX) */}
        {/* ------------------------------------ */}
        <LeftNavItems
          sidebarController={sidebarController}
          viewport={{ isMinHeight1700px, isMinWidth950px }}
        />

        {/* CENTER : NAV ITEMS LIST */}
        {/* ------------------------------------ */}
        {isMinWidth950px ? (
          <CenterNavItems viewport={{ isMinHeight1700px, isMinWidth1100px }} />
        ) : null}

        {/* RIGHT-SIDE : PROFILE ICONS */}
        {/* ------------------------------------ */}
        <RightNavItems viewport={{ isMinHeight1700px }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
