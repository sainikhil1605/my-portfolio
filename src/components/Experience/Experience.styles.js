import styled from "@emotion/styled";

const ExperienceContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "125px",
  "& .heading": {
    position: "relative",
    left: "0",
  },
  "& .experience-background": {
    position: "absolute",
    zIndex: "-2",
  },
});
const ExperienceCards = styled("div")({
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  "@media(max-width:768px)": {
    flexDirection: "column",
    alignItems: "center !important",
  },

  // alignItems: "stretch",
  "& .MuiCard-root": {
    flex: "1",
  },
  "& .experience-card": {
    maxWidth: "380px",
    "@media(max-width:768px)": {
      marginTop: "20px",
    },

    // alignSelf: "flex-start",
  },
  "& .experience-card-header": {
    textAlign: "center",
    // padding: "40px",
    height: "9rem",
    color: "#fff",
  },
  "& .experience-card-avatar": {
    width: "100% !important",
    height: "9rem",
    marginTop: "-80px",
    "& img": {
      margin: "auto",
      height: "6.5rem",
      width: "6.5rem",
      borderRadius: "50%",
      // border: "2px solid #fff",
    },
  },
});
export { ExperienceContainer, ExperienceCards };
