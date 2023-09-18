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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", zIndex: "-1" }}
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L20,117.3C40,139,80,181,120,192C160,203,200,181,240,160C280,139,320,117,360,117.3C400,117,440,139,480,165.3C520,192,560,224,600,213.3C640,203,680,149,720,144C760,139,800,181,840,213.3C880,245,920,267,960,277.3C1000,288,1040,288,1080,266.7C1120,245,1160,203,1200,176C1240,149,1280,139,1320,133.3C1360,128,1400,128,1420,128L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default AboutMe;
