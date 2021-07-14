import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Divider } from "@material-ui/core";
import {
  increment_1,
  decrement_1,
  increment_5,
  decrement_5,
} from "../../redux/inc-dec/actions";
import { connect } from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
    textTransform: "capitalize",
  },
}));

function IncDec(props) {
  const { count, increment_1, decrement_1, increment_5, decrement_5 } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h3" className={clsx([classes.boldText])}>
            <code> +/- Count: </code>
          </Typography>
          <Divider />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => increment_5()}
          >
            <span className={clsx([classes.boldText])}>Increment by 5</span>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => increment_1()}
          >
            <span className={clsx([classes.boldText])}>Increment by 1</span>
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="h3" className={clsx([classes.boldText])}>
            <code>{count}</code>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => decrement_1()}
          >
            <span className={clsx([classes.boldText])}>Decrement by 1</span>
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => decrement_5()}
          >
            <span className={clsx([classes.boldText])}>Decrement by 5</span>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.incDec.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment_1: () => dispatch(increment_1()),
    decrement_1: () => dispatch(decrement_1()),
    increment_5: () => dispatch(increment_5()),
    decrement_5: () => dispatch(decrement_5()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncDec);
