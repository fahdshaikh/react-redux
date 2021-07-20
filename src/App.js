import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import IncDec from "./components/inc-dec";
import Todo from "./components/todo";
import Badge from "./components/badge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notificationSettings } from "./config.js";
import clsx from "clsx";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "97%",
    margin: "20px auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    borderRadius: "0px",
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
  },
}));

function App() {
  const classes = useStyles();
  const [currentURLHost, setCurrentURLHost] = useState("");

  useEffect(() => {
    let urlHost = window.location.hostname.split(".");
    if (urlHost[0] === "localhost") {
      setCurrentURLHost("Local Env");
    } else if (urlHost[0] === "dev") {
      setCurrentURLHost("Dev Env");
    } else if (urlHost[0] === "qa") {
      setCurrentURLHost("QA Env");
    } else {
      setCurrentURLHost("Prod");
    }
    toast.dark("🔥", notificationSettings);
    console.log(
      `🔥 ❯ ~ useEffect ~ notificationSettings`,
      notificationSettings
    );
  }, []);

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4" className={clsx([classes.boldText])}>
                React 🔥 Redux 🔥 Redux-Saga
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <IncDec />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Todo />
            </Paper>
          </Grid>
        </Grid>
      </div>
      {currentURLHost !== "Prod" ? (
        <Badge currentURLHost={currentURLHost} />
      ) : null}
      <ToastContainer />
    </div>
  );
}

export default App;
