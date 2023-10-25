import styled from "@emotion/styled";

const NavOuterContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px",
  position: "relative",
  zIndex: "1",
  color: "black",
  ".menu-icon": {
    "@media (max-width: 1200px)": {
      display: "block",
    },
    "@media(min-width:1200px)": {
      display: "none",
    },
  },
  ".nav-list": {
    "@media(max-width:1200px)": {
      flexDirection: "column",
      display: "none",
    },
  },
  ".mobile-nav": {
    "@media(min-width:1200px)": {
      flexDirection: "column",
      display: "none",
    },
  },
});
const NavContainer = styled("div")({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  "& .MuiTypography-root": {
    fontFamily: "Montserrat",
  },
  "& h6>a": {
    textDecoration: "none",
    color: "#868e96",
    fontSize: "25px",
  },
  "& h6>a>.logo-name": {
    color: "black",
    fontWeight: "700",
    fontFamily: "Agustina Regular",
  },
});

export { NavContainer, NavOuterContainer };
