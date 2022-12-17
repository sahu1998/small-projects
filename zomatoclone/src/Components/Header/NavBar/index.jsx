import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const pages = [
  {
    pageName: "Investor Relations",
    pagePath: "#",
  },
  {
    pageName: "Add restaurant",
    pagePath: "#",
  },
  {
    pageName: "Log in",
    pagePath: "#",
  },
  {
    pageName: "Sign up",
    pagePath: "#",
  },
];

function Navbar() {
  const [top, setTop] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTop(open);
  };

  const list = () => (
    <Box
      className="nav-sm-custom bg-danger"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={index} disablePadding>
            <a href={text.pagePath} className="text-decoration-none text-white">
              <ListItemButton>
                <ListItemText primary={text.pageName} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      className="appbar nav-main"
      position="absolute"
      sx={{
        backgroundColor: "#00000000",
        boxShadow: "none",
        // zIndex: "2",
      }}
    >
      <Container maxWidth="100%" sx={{ width: "90%" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <button
              className="p-1  text-white border-0"
              style={{ backgroundColor: "#00000000" }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </button>
            <SwipeableDrawer
              anchor="top"
              open={top}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
          </Box>
          <Box
            // component="a"
            className="nav-item-child"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <i class="bi bi-file-arrow-down"></i>
            Get the App
          </Box>

          {/* <Box
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <a href="#navigation">Get the App</a>
          </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <div className="nav-item-pos">
              <div className="nav-item-child">
                {pages.map((page) => (
                  <a href={page.pagePath}>
                    <Typography key={page} className="fs-5">
                      {page.pageName}
                    </Typography>
                  </a>
                ))}
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
