import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const StyledAppBar = styled(AppBar)({
    background: "linear-gradient(to right, #1d1d1d, #343434)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    opacity: "0.85",
  });

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const StyledIconButton = styled(IconButton)({
    color: "#ffffff",
    marginRight: "1rem",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.2)",
    },
  });

  const StyledDrawer = styled(Drawer)({
    "& .MuiPaper-root": {
      width: drawerWidth,
      background: "#1d1d1d",
      color: "#ffffff",
    },
  });

  const StyledListItem = styled(ListItem)({
    "& .MuiTypography-root": {
      color: "#ffffff",
    },
  });

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              src="favicon.ico"
              alt="UploFile Logo"
              width="28px"
              height="28px"
              style={{ marginRight: "0.5rem" }}
            />
            <span className="brand-name">UploFile</span>
          </Link>
          <StyledIconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleNavToggle}
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </StyledIconButton>
        </StyledToolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={isNavOpen} onClose={handleNavToggle}>
        <List>
          <StyledListItem button onClick={handleNavToggle}>
            <Link to={"/"} className="nav-link">
              <ListItemText primary="Upload" />
            </Link>
          </StyledListItem>
          <StyledListItem button onClick={handleNavToggle}>
            <Link to={"/download"} className="nav-link">
              <ListItemText primary="Download" />
            </Link>
          </StyledListItem>
        </List>
      </StyledDrawer>
    </>
  );
};

export default Navbar;
