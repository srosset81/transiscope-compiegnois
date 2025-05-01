import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-admin";

const AppTitle = styled(Typography)(({ theme }) => ({
  textWrap: "balance",
  lineHeight: "1.1",
  [theme.breakpoints.down("lg")]: {
    fontSize: "1rem",
    maxWidth: "120px",
    textAlign: "center",
  },
  "& span": {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8rem",
    },
  },
})) as typeof Typography;

const AppBarTitle = () => {
  return (
    <AppTitle component="div" variant="h6">
      <Link to="/" color="inherit" underline="none">
        Transiscope <span>en Pays Compiégnois</span>
      </Link>
    </AppTitle>
  );
};

export default AppBarTitle;
