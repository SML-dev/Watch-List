import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              style={{ fontWeight: "700", marginLeft: "40px", flexGrow: "1" }}
            >
              <Link to="/" style={{ fontSize: "32px" }}>
                Movie WatchList
              </Link>
            </Typography>
            <Link to="/">
              <Button
                color="inherit"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                WatchList
              </Button>
            </Link>
            <Link to="/watched">
              <Button
                color="inherit"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Watched
              </Button>
            </Link>
            <Link to="/add">
              <Button
                color="inherit"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Add
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
