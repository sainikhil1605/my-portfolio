import styled from "@emotion/styled";

const NavOuterContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px",
  position: "relative",
  zIndex: "1",
  color: "black",
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
