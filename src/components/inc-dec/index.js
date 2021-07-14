import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
  },
}));

function IncDec() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" className={clsx([classes.boldText])}>
            Increment Decrement
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default IncDec;
