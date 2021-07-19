import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "0px",
    maxWidth: "max-content",
    position: "fixed",
    zIndex: 9999,
    top: "42px",
    left: "0px",
  },
  paper: {
    padding: "2px 10px 2px 10px",
    textAlign: "left",
    borderRadius: "0px",
    color: "#fff",
    backgroundColor: "#000",
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
    fontStyle: "italic",
    textTransform: "none",
  },
}));

const Badge = ({ currentURLHost }) => {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.root)}>
      <Paper className={classes.paper}>
        <Typography className={clsx([classes.boldText])}>
          {/* ❯ Redux-Saga 🔥 */}❯ {currentURLHost}.{" "}
        </Typography>
      </Paper>
    </Button>
  );
};

export default Badge;
