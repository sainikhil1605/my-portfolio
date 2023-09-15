import { Typography } from "@mui/material";
import { NavContainer, NavOuterContainer } from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavOuterContainer>
      <NavContainer>
        <Typography variant="h6">
          <a>&lt;Sai Nikhil Reddy Vatti {" />"}</a>
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
