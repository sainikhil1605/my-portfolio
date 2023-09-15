import { Button, Icon, Typography } from "@mui/material";
import NavBar from "../NavBar";
import {
  LandingContainer,
  LandingHeroImg,
  LandingIcons,
  LandingLabel,
} from "./Landing.styles";
import LandingImg from "../../assets/images/landing.svg";
import emoji from "react-easy-emoji";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <LandingContainer>
        <LandingLabel>
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            style={{ margin: "2px" }}
          >
            Hi all, I'm Sai Nikhil Reddy Vatti
            <span className="wave-emoji">{emoji("👋")}</span>
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
