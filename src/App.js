import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import IncDec from "./components/inc-dec";
import Todo from "./components/todo";
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
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h3" className={clsx([classes.boldText])}>
                React 🔥 Redux 🔥 Redux-Saga
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <IncDec />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>
              <Todo />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
