import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  IconButton,
  Tooltip,
  Button,
  Typography,
} from "@material-ui/core";
import { delTodo, toggleTodo } from "../../redux/todo/actions";
import { connect } from "react-redux";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    border: "1px solid darkgray",
    borderRadius: "0px",
    textAlign: "left",
    paddingLeft: "12px",
  },
  todoText: {
    fontFamily: "Nunito,sans-serif",
    fontSize: "19px",
    fontWeight: "400",
    textTransform: "capitalize",
  },
  doneText: {
    textDecoration: "line-through dashed #ff1744",
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  doneBg: {
    backgroundColor: "#33eb91",
  },
}));

const EachTodo = (props) => {
  const {
    delTodo,
    toggleTodo,
    todo: { todo, id, done },
  } = props;
  const classes = useStyles();
  return (
    <Button fullWidth style={{ padding: "0px" }}>
      <div
        className={clsx([classes.root], { [classes.doneBg]: done })}
        onClick={() => toggleTodo(id)}
        // elevation={9}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={11} md={10}>
            <Typography
              className={clsx([classes.todoText], {
                [classes.doneText]: done,
              })}
            >
              {todo}
            </Typography>
          </Grid>
          <Grid item xs={1} md={2}>
            <Tooltip title="dec 1 -- inc_dec_saga" placement="bottom">
              <IconButton onClick={() => delTodo(id)}>
                <span style={{ color: "#ff1744" }}>✘</span>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </div>
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    delTodo: (id) => dispatch(delTodo(id)),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(null, mapDispatchToProps)(EachTodo);
