import styled from "@emotion/styled";

const AboutContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
  color: "black",
});
const AboutHeading = styled("div")({
  display: "flex",
  justifyContent: "center",
  "& h1": {
    fontSize: "50px",
  },
});
const AboutDetails = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
});
const AboutDescription = styled("div")({
  display: "flex",
  fontSize: "20px",
  maxWidth: "500px",
  flexDirection: "column",
});

const AboutPicture = styled("div")({
  "& svg": {
    position: "absolute",
    zIndex: "-1",
    left: "-20px",
    top: "550px",
  },
  "& img": {
    maxWidth: "650px",
    position: "relative",
    zIndex: "1",
  },
});
const Skills = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
});
export {
  AboutHeading,
  AboutContainer,
  AboutDetails,
  AboutPicture,
  AboutDescription,
  Skills,
};
