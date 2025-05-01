import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-admin";

const StyledFooter = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  textAlign: "center",
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Link
        to="/Page/https%3A%2F%2Fdata.compiegnois.transiscope.org%2Fpages%2Fmentions-legales/show"
        color="inherit"
        underline="none"
      >
        Mentions légales
      </Link>
      &nbsp;-&nbsp;
      <Link
        to="/Page/https%3A%2F%2Fdata.compiegnois.transiscope.org%2Fpages%2Fcontact/show"
        color="inherit"
        underline="none"
      >
        Nous contacter
      </Link>
    </StyledFooter>
  );
};

export default Footer;
