import styled from "@emotion/styled";

const NavOuterContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  margin: "20px",
});
const NavContainer = styled("div")({
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  "& .MuiTypography-root": {
    fontFamily: "Playfair Display",
    fontWeight: "bold",
  },
});

export { NavContainer, NavOuterContainer };
