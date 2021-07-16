import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Divider,
  TextField,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import { addTodo, filterTodo, apiCalled } from "../../redux/todo/actions";
import { connect } from "react-redux";
import EachTodo from "./eachTodo";
import ReactJson from "react-json-view";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: "97%",
  },
  title: {
    fontSize: "2rem",
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
    textTransform: "none",
  },
  textDiv: {
    textAlign: "left",
    borderRadius: "0px",
    border: "1px solid darkgray",
  },
  noTodoText: {
    color: "darkgray",
    fontSize: "30px",
    fontWeight: "800",
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  responseDiv: {
    padding: "10px",
    textAlign: "left",
    borderRadius: "0px",
    border: "1px solid darkgray",
    "& > *": {
      backgroundColor: "#F7F7FC",
    },
    overflowX: "scroll",
  },
  statusBadge: {
    maxWidth: "fit-content",
    borderRadius: "5px",
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "bold",
    padding: "0px",
  },
  success: {
    // backgroundColor: "#33eb91",
    backgroundColor: "#198754",
    color: "white",
    "&:hover": {
      backgroundColor: "#33eb91",
    },
  },
  failure: {
    backgroundColor: "#dc3545",
    color: "white",
    "&:hover": {
      backgroundColor: "#ff1744",
    },
  },
}));

const Todo = (props) => {
  const { allTodos, addTodo, filter, filterTodo, res, apiCalled } = props;
  const [todo, setTodo] = useState("");
  const [successStatus, setSuccessStatus] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (res.status === 200 || res.status === 201) {
      setSuccessStatus(true);
    } else {
      setSuccessStatus(false);
    }
  }, [res]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <span className={clsx(classes.boldText, classes.title)}>
                <code> Todo: </code>
              </span>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.textDiv}>
                <TextField
                  // variant="outlined"
                  fullWidth
                  margin="dense"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon style={{ color: "gray" }} />
                      </InputAdornment>
                    ),
                    style: {
                      fontWeight: "bold",
                      fontFamily: "Nunito,sans-serif",
                      paddingInline: "10px",
                    },
                    disableUnderline: true,
                  }}
                  placeholder="Add a Todo"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {
                  addTodo(todo);
                  setTodo("");
                }}
                style={{ borderRadius: "0px" }}
                className={clsx([classes.boldText])}
              >
                Add a Todo
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button
                fullWidth
                variant="contained"
                className={clsx(classes.success, classes.boldText)}
                onClick={() => apiCalled("then")}
                style={{ borderRadius: "0px" }}
              >
                .then
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
              <Button
                fullWidth
                variant="contained"
                className={clsx(classes.failure, classes.boldText)}
                onClick={() => apiCalled("catch")}
                style={{ borderRadius: "0px" }}
              >
                .catch
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          {" "}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={4}>
              <Tooltip title="inc 1 -- inc_dec_saga" placement="top">
                <Button
                  fullWidth
                  variant="contained"
                  color={filter === "all" ? "primary" : "secondary"}
                  onClick={() => filterTodo("all")}
                  style={{ borderRadius: "0px" }}
                >
                  <span className={clsx([classes.boldText])}>All</span>
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="inc 1 -- inc_dec_saga" placement="top">
                <Button
                  fullWidth
                  variant="contained"
                  color={filter === "done" ? "primary" : "secondary"}
                  onClick={() => filterTodo("done")}
                  style={{ borderRadius: "0px" }}
                >
                  <span className={clsx([classes.boldText])}>Done</span>
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="inc 1 -- inc_dec_saga" placement="top">
                <Button
                  fullWidth
                  variant="contained"
                  color={filter === "not done" ? "primary" : "secondary"}
                  onClick={() => filterTodo("not done")}
                  style={{ borderRadius: "0px" }}
                >
                  <span className={clsx([classes.boldText])}>Not Done</span>
                </Button>
              </Tooltip>
            </Grid>
            {allTodos.length === 0 && (
              <Grid item xs={12}>
                <span className={clsx([classes.noTodoText])}>Add a Todo..</span>
              </Grid>
            )}
            {allTodos
              .filter((item) => {
                if (filter === "all") {
                  return item;
                }
                if (filter === "done" && item.done) {
                  return item;
                }
                if (filter === "not done" && !item.done) {
                  return item;
                }
              })
              .reverse()
              .map((todo) => (
                <Grid item xs={12} key={todo.id}>
                  <EachTodo todo={todo} />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12} sm={5} md={12}>
              <span className={clsx(classes.boldText, classes.title)}>
                <code> Response:</code>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className={clsx(classes.statusBadge, {
                    [classes.success]: successStatus,
                    [classes.failure]: !successStatus,
                    // (res?.status !== 200 || res?.status !== 201) ,
                  })}
                >
                  <code>{res.status}</code>
                </Button>
              </span>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={7} md={12}>
              <div className={classes.responseDiv}>
                <ReactJson
                  src={res}
                  theme="summerfruit:inverted"
                  collapsed="2"
                  // collapseStringsAfterLength="3"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allTodos: state.todo.allTodos,
    filter: state.todo.filter,
    res: state.todo.res,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    filterTodo: (filter) => dispatch(filterTodo(filter)),
    apiCalled: (called) => dispatch(apiCalled(called)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
