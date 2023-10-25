import { Typography, css } from "@mui/material";
import { NavContainer, NavOuterContainer, mediaIconCss } from "./NavBar.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <NavOuterContainer>
        <NavContainer>
          <Typography variant="h6" className="logo">
            <a href="/" className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">Sai Nikhil Reddy</span>
              <span className="grey-color">/&gt;</span>
            </a>
          </Typography>
        </NavContainer>
        <NavContainer className="nav-list" style={{ flex: "2" }}>
          <Typography variant="h6">About Me</Typography>
          <Typography variant="h6">Skills</Typography>
          <Typography variant="h6">Work Experience</Typography>
          <Typography variant="h6">Projects</Typography>
          <Typography variant="h6">Achievements</Typography>
          <Typography variant="h6">Contact Me</Typography>
        </NavContainer>

        <MenuIcon
          className="menu-icon"
          onClick={() => setShowMenu(!showMenu)}
        />
      </NavOuterContainer>
      <NavOuterContainer>
        <NavContainer
          className="mobile-nav"
          style={
            showMenu
              ? { display: "block", textAlign: "center" }
              : { display: "none", flex: "2" }
          }
        >
          <Typography variant="h6">About Me</Typography>
          <Typography variant="h6">Skills</Typography>
          <Typography variant="h6">Work Experience</Typography>
          <Typography variant="h6">Projects</Typography>
          <Typography variant="h6">Achievements</Typography>
          <Typography variant="h6">Contact Me</Typography>
        </NavContainer>
      </NavOuterContainer>
    </>
  );
};
export default NavBar;
