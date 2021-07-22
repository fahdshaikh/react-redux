import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Button,
  Divider,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { usersFetchRequested } from "../../redux/gitUser/actions";
import { connect } from "react-redux";
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
  username: {
    fontFamily: "Nunito,sans-serif",
    fontSize: "1.2rem",
    fontWeight: "600",
    textTransform: "none",
    borderBottom: "2px solid darkgray",
  },
  emoji: {
    fontSize: "1.3rem",
  },
}));

const GitUser = (props) => {
  const { query, users, usersFetchRequested } = props;
  const classes = useStyles();
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
                <code> GitHub Users: </code>
              </span>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.textDiv}>
                <TextField
                  fullWidth
                  margin="dense"
                  value={query}
                  onChange={(e) => usersFetchRequested(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <span
                          className={clsx(classes.emoji)}
                          style={{ marginBottom: "5px" }}
                        >
                          😎
                        </span>
                      </InputAdornment>
                    ),
                    style: {
                      fontWeight: "bold",
                      fontFamily: "Nunito,sans-serif",
                      paddingInline: "10px",
                    },
                    disableUnderline: true,
                  }}
                  placeholder="Search a User"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
            style={{ textAlign: "left" }}
          >
            {users &&
              users.map((ele) => (
                <Grid item xs={3} md={3} key={ele.id}>
                  <Button>
                    <span
                      className={clsx(classes.emoji)}
                      style={{ marginRight: "5px" }}
                    >
                      😎
                    </span>{" "}
                    <span className={clsx(classes.username)}> {ele.login}</span>
                  </Button>
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
    query: state.gitUser.query,
    users: state.gitUser.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    usersFetchRequested: (query) => dispatch(usersFetchRequested(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GitUser);
