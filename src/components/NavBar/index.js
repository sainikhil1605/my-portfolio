import { Typography } from "@mui/material";
import { NavContainer, NavOuterContainer } from "./NavBar.styles";

const NavBar = () => {
  return (
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
      <NavContainer style={{ flex: "2" }}>
        <Typography variant="h6">About Me</Typography>
        <Typography variant="h6">Skills</Typography>
        <Typography variant="h6">Work Experience</Typography>
        <Typography variant="h6">Projects</Typography>
        <Typography variant="h6">Achievements</Typography>
        <Typography variant="h6">Contact Me</Typography>
      </NavContainer>
    </NavOuterContainer>
  );
};
export default NavBar;
