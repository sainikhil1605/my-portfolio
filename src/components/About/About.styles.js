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

  "@media(max-width:768px)": {
    flexDirection: "column",
  },
});
const AboutDescription = styled("div")({
  display: "flex",
  fontSize: "20px",
  maxWidth: "500px",
  flexDirection: "column",
  margin: "20px",
});

const AboutPicture = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& svg": {
    position: "absolute",
    zIndex: "-1",
    left: "-20px",
    top: "550px",
    "@media(max-width:768px)": {
      display: "none",
    },
  },
  "& img": {
    maxWidth: "100%",
    position: "relative",
    zIndex: "1",
  },
  ".about-us": {
    position: "relative",
    zIndex: "-1",
  },
  ".octa-cat": {
    position: "absolute",
    zIndex: 1,
    "@media(min-width:768px)": {
      // left: 85,
    },
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
