import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Divider, Tooltip } from "@material-ui/core";
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
  title: {
    fontSize: "2rem",
  },
  countDiv: {
    backgroundColor: "#2979ff",
    color: "#fff",
  },
}));

function IncDec(props) {
  const { count, increment_1, decrement_1, increment_5, decrement_5 } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={2}>
          <span className={clsx(classes.boldText, classes.title)}>
            <code> +/- Count: </code>
          </span>
          <Divider />
        </Grid>
        <Grid item xs={12} md={2}>
          <Tooltip title="add todo -- todo_saga" placement="bottom">
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => increment_5()}
              style={{ borderRadius: "0px" }}
            >
              <span className={clsx([classes.boldText])}>Increment by 5</span>
            </Button>
          </Tooltip>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => increment_1()}
            style={{ borderRadius: "0px" }}
          >
            <span className={clsx([classes.boldText])}>Increment by 1</span>
          </Button>
        </Grid>
        <Grid item>
          <Typography
            variant="h3"
            className={clsx(classes.boldText, classes.countDiv)}
          >
            <code>{count}</code>
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => decrement_1()}
            style={{ borderRadius: "0px" }}
          >
            <span className={clsx([classes.boldText])}>Decrement by 1</span>
          </Button>
        </Grid>
        <Grid item xs={12} md={2}>
          <Tooltip title="add todo -- todo_saga" placement="bottom">
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={() => decrement_5()}
              style={{ borderRadius: "0px" }}
            >
              <span className={clsx([classes.boldText])}>Decrement by 5</span>
            </Button>
          </Tooltip>
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
