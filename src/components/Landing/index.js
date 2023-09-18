import { Button, Icon, Typography } from "@mui/material";
import NavBar from "../NavBar";
import {
  LandingContainer,
  LandingHeroImg,
  LandingIcons,
  LandingLabel,
  LandingWave,
} from "./Landing.styles";
import LandingImg from "../../assets/images/landing1.gif";
import GreetingGif from "../../assets/images/greeting.gif";
import SeGif from "../../assets/images/SeGIF.gif";
import CoffeeImg from "../../assets/images/coffee.png";

import emoji from "react-easy-emoji";

const Landing = () => {
  return (
    <div>
      <LandingWave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0  388 425">
          <path
            fill="#F9F3ED"
            fill-opacity="1"
            d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,250.7C672,277,768,299,864,261.3C960,224,1056,128,1152,128C1248,128,1344,224,1392,272L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </LandingWave>
      <NavBar />
      <LandingContainer>
        <LandingLabel>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            className="landing-greeting"
          >
            Hi all, I'm Sai Nikhil Reddy Vatti
            <span className="wave-emoji">
              <img src={GreetingGif} width="50px" />
            </span>
          </Typography>
          <Typography className="landing-role">
            Software Engineer
            <span>
              <img src={SeGif} alt="Bullseye" width="30px" />
            </span>
          </Typography>
          <LandingIcons>
            <Button>SEE MY RESUME</Button>
            <Button>CONTACT ME</Button>
          </LandingIcons>
        </LandingLabel>

        <LandingHeroImg>
          <img src={LandingImg} alt="Landing" />
        </LandingHeroImg>
      </LandingContainer>
    </div>
  );
};
export default Landing;
