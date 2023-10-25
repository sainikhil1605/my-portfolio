import { Button, Icon, Typography } from "@mui/material";
import NavBar from "../NavBar";
import {
  LandingContainer,
  LandingHeroImg,
  LandingIcons,
  LandingLabel,
  LandingWave,
} from "./Landing.styles";
import LandingImg from "../../assets/images/landing1.svg";
import GreetingGif from "../../assets/images/greeting.gif";
import SeGif from "../../assets/images/SeGIF.gif";
import LandingWaveSvg from "../../assets/images/landingwave.svg";
import CoffeeImg from "../../assets/images/coffee.png";

import emoji from "react-easy-emoji";

const Landing = () => {
  return (
    <div>
      <LandingWave>
        <img src={LandingWaveSvg} alt="landing wave" />
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
