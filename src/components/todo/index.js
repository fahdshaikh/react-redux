import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons";
import { addTodo, filterTodo } from "../../redux/todo/actions";
import { connect } from "react-redux";
import EachTodo from "./eachTodo";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: "97%",
  },
  boldText: {
    fontFamily: "Nunito,sans-serif",
    fontWeight: "800",
    textTransform: "capitalize",
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
}));

const Todo = (props) => {
  const { allTodos, addTodo, filter, filterTodo } = props;
  const [todo, setTodo] = useState("");
  const classes = useStyles();

  useEffect(() => {
    console.log(`allTodos`, allTodos);
  }, [allTodos]);

  const handleFilterTodo = () => {
    if (filter === "all") {
      return allTodos;
    }
    if (filter === "done") {
      let temp = allTodos.filter((item) => item.done);
      return temp;
    }
    if (filter === "not done") {
      let temp = allTodos.filter((item) => !item.done);
      return temp;
    }
  };

  useEffect(() => {
    handleFilterTodo();
  }, [filter]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h3" className={clsx([classes.boldText])}>
                <code> Todo: </code>
              </Typography>
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
              >
                <span className={clsx([classes.boldText])}>Add a Todo</span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={4}>
              <Button
                fullWidth
                variant="contained"
                color={filter === "all" ? "primary" : "secondary"}
                onClick={() => filterTodo("all")}
                style={{ borderRadius: "0px" }}
              >
                <span className={clsx([classes.boldText])}>All</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                variant="contained"
                color={filter === "done" ? "primary" : "secondary"}
                onClick={() => filterTodo("done")}
                style={{ borderRadius: "0px" }}
              >
                <span className={clsx([classes.boldText])}>Done</span>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                variant="contained"
                color={filter === "not done" ? "primary" : "secondary"}
                onClick={() => filterTodo("not done")}
                style={{ borderRadius: "0px" }}
              >
                <span className={clsx([classes.boldText])}>Not Done</span>
              </Button>
            </Grid>
            {allTodos.length === 0 && (
              <Grid item xs={12}>
                <span className={clsx([classes.noTodoText])}>Add a Todo..</span>
              </Grid>
            )}
            {handleFilterTodo().map((todo) => (
              <Grid item xs={12} key={todo.id}>
                <EachTodo todo={todo} />
              </Grid>
            ))}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    filterTodo: (filter) => dispatch(filterTodo(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
