import * as React from "react";
import { AppBar, IconButton, MenuItem, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <MenuItem onClick={() => sendTo("/")}>Dashboard</MenuItem>
        <MenuItem onClick={() => sendTo("/graduation")}>Formatura</MenuItem>
        <MenuItem onClick={() => sendTo("/wedding")}>Casamento</MenuItem>
        <MenuItem onClick={() => sendTo("/confraternization")}>Confraternização</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;