import { Typography } from "@mui/material";
import {
  AboutHeading,
  AboutContainer,
  AboutDetails,
  AboutPicture,
  AboutDescription,
  Skills,
} from "./About.styles";

import OctoCat from "../../assets/images/octocat.png";
import SKILLS from "../../utils/constants/skills";

const AboutMe = () => {
  return (
    <>
      <AboutHeading>
        <Typography variant="h1">About Me</Typography>
      </AboutHeading>
      <AboutContainer>
        <AboutDetails>
          <AboutPicture>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="800px"
            >
              <path
                fill="#F9F3ED"
                d="M43.3,-30.3C51.6,-10.6,50.8,9.2,42.1,27.6C33.4,46,16.7,63.2,-5.7,66.5C-28.1,69.8,-56.2,59.2,-65.6,40.4C-75,21.6,-65.7,-5.5,-51.7,-28.5C-37.6,-51.5,-18.8,-70.5,-0.7,-70.1C17.5,-69.7,35,-50,43.3,-30.3Z"
                transform="translate(100 100)"
              />
            </svg>

            <img src={OctoCat} alt="Profile Pic" width="500px" />
          </AboutPicture>
          <AboutDescription>
            A passionate Full Stack Software Developer 🚀 having an experience
            of building Web and Mobile applications with JavaScript / Reactjs /
            Nodejs / React Native and some other cool libraries and frameworks.
            <Skills>
              {SKILLS.map(({ src, name }) => (
                <img src={src} alt={name} width="50px" />
              ))}
            </Skills>
          </AboutDescription>
        </AboutDetails>
      </AboutContainer>
    </>
  );
};

export default AboutMe;
