import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { ExperienceCards, ExperienceContainer } from "./Experience.styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EXPERIENCE from "../../utils/constants/experience";
import { useEffect, useState } from "react";
import ColorThief from "colorthief";
import styled from "@emotion/styled";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const Experience = () => {
  const [expanded, setExpanded] = useState(
    Array(EXPERIENCE.length + 1).fill(false)
  );
  const [experiences, setExperiences] = useState(EXPERIENCE);
  const handleExpandClick = (id) => {
    setExpanded((prev) => {
      prev[id] = !prev[id];
      return [...prev];
    });
  };
  useEffect(() => {
    const getColors = async () => {
      const colorThief = new ColorThief();
      const modifiedExperiences = EXPERIENCE.map((experience) => {
        const image = new Image();
        image.src = experience.companyImg;

        // Initialize color as a promise
        let colorPromise = new Promise((resolve, reject) => {
          image.onload = () => {
            const color = colorThief.getColor(image);
            resolve(color);
          };
          image.onerror = (error) => {
            reject(error);
          };
        });

        return colorPromise.then((color) => {
          return { ...experience, color };
        });
      });
      Promise.all(modifiedExperiences)
        .then((experiencesWithColors) => {
          console.log(experiencesWithColors);
          setExperiences([...experiencesWithColors]);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getColors();
  }, []);
  // console.log(experiences);
  return (
    <>
      <ExperienceContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 320"
          className="experience-background"
        >
          <path
            fill="#F9F3ED"
            fill-opacity="1"
            d="M0,224L60,192C120,160,240,96,360,112C480,128,600,224,720,266.7C840,309,960,299,1080,282.7C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Typography variant="h1" className="heading">
          Experiences
        </Typography>
      </ExperienceContainer>

      <ExperienceCards
        style={
          expanded.every((value) => value === false)
            ? { alignItems: "strech" }
            : {}
        }
      >
        {experiences.map((experience) => (
          <Card
            className="experience-card"
            key={experience.id}
            elevation={10}
            style={
              expanded.every((value) => value === false)
                ? {}
                : { alignSelf: "flex-start" }
            }
          >
            <CardHeader
              title={experience.company}
              className="experience-card-header"
              style={{
                backgroundColor: `rgb(${experience.color})`,
              }}
            />
            <Avatar
              src={experience.companyImg}
              className="experience-card-avatar"
            />
            <CardContent>
              <Typography variant="body2">{experience.subTitle}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded[experience.id]}
                onClick={(e) => handleExpandClick(experience.id)}
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[experience.id]} timeout="auto" unmountOnExit>
              <CardContent>
                {experience.description.map((desc) => (
                  <Typography variant="body2" key={experience.id}>
                    {desc}
                  </Typography>
                ))}
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </ExperienceCards>
    </>
  );
};
export default Experience;
