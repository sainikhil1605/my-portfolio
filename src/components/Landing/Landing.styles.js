import styled from "@emotion/styled";

const LandingContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "20px",
  color: "black",
  textAlign: "left",
  "@media(max-width:768px)": {
    flexDirection: "column",
    margin: "0px",
  },
});
const LandingHeroImg = styled("div")({
  display: "flex",
  "& img": {
    maxWidth: "100%",
  },
  // "& img": {
  //   maxWidth: "650px",
  // },
});
const LandingWave = styled("div")({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  zIndex: "-1",
});
const LandingLabel = styled("div")({
  display: "flex",
  justifyContent: "center",
  textAlign: "left",
  flexDirection: "column",
  paddingLeft: "20px",
  paddingRight: "20px",
  fontFamily: "Montserrat",
  "& button": {
    textDecoration: "none",
    textTransform: "none",
    backgroundColor: "#6C63FF",
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    padding: "10px",
    margin: "30px",
  },
  "& .landing-greeting": {
    fontWeight: "bold",
    fontSize: "50px",
    fontFamily: "Montserrat",
  },
  "& .landing-role": {
    fontSize: "30px",
    fontFamily: "Montserrat",
    display: "flex",
  },
  "& .wave-emoji>img": {
    borderRadius: "50%",
  },
  "@media(max-width:768px)": {
    alignItems: "center",
    textAlign: "center",
  },
});
const LandingIcons = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  "& button": {
    margin: "10px",
    marginRight: "10px",
  },
  "& button:first-child": {
    marginLeft: "0px",
  },
});
export {
  LandingContainer,
  LandingHeroImg,
  LandingLabel,
  LandingIcons,
  LandingWave,
};
