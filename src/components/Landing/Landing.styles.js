import styled from "@emotion/styled";

const LandingContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "20px",
});
const LandingHeroImg = styled("div")({
  display: "flex",
  "& img": {
    maxWidth: "650px",
  },
});
const LandingLabel = styled("div")({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  "& button": {
    textDecoration: "none",
    textTransform: "none",
    backgroundColor: "#6C63FF",
    color: "#fff",
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    padding: "10px",
    margin: "30px",
  },
});
const LandingIcons = styled("div")({
  display: "flex",
  justifyContent: "center",
});
export { LandingContainer, LandingHeroImg, LandingLabel, LandingIcons };
