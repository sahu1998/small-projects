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

// const pages = ["SERVICES", "PORTFOLIO", "ABOUT", "TEAM", "CONTACT"];
const pages = [
  {
    pageName: "SERVICES",
    pagePath: "#services",
  },
  {
    pageName: "PORTFOLIO",
    pagePath: "#portfolio",
  },
  {
    pageName: "ABOUT",
    pagePath: "#about",
  },
  {
    pageName: "TEAM",
    pagePath: "#team",
  },
  {
    pageName: "CONTACT",
    pagePath: "#contact-us",
  },
];

const styleNavText = {
  my: 2,
  color: "white",
  display: "block",
  "&:hover": {
    color: "orange",
    // transition: "all 0.5s",
  },
  //   fontWeight: "550",
  padding: "10px 18px",
  cursor: "pointer",
  fontSize: "14px",
};
function Navbar() {
  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };
  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  //   const handleCloseUserMenu = () => {
  //     setAnchorElUser(null);
  //   };

  const [top, setTop] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("#00000000");

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
      className="nav-sm-custom"
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={index} disablePadding>
            <a href={text.pagePath}>
              <ListItemButton>
                <ListItemText primary={text.pageName} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function changeCss() {
    this.scrollY > 10 ? setBgColor("#212529") : setBgColor("#00000000");
  }

  window.addEventListener("scroll", changeCss);

  return (
    <AppBar
      className="appbar nav-main"
      position="fixed"
      sx={{
        backgroundColor: bgColor,
        boxShadow: "none",
        zIndex: "2",
      }}
    >
      <Container maxWidth="100%" sx={{ width: "90%" }}>
        <Toolbar disableGutters>
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <a href="#navigation">
              <img
                src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                role="button"
                width="140px"
              />
            </a>
          </Box>

          <Box
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <a href="#navigation">
              <img
                src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg"
                role="button"
                width="140px"
              />
            </a>
          </Box>
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
                    <Typography
                      key={page}
                      // onClick={handleCloseNavMenu}
                      // sx={styleNavText}
                    >
                      {page.pageName}
                    </Typography>
                  </a>
                ))}
              </div>
            </div>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "end",
            }}
          >
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              MENU <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // backgroundColor: "black",
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography color="white" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <button
              className="p-1 rounded text-white-50 border border-3"
              style={{ backgroundColor: "#212529" }}
              onClick={toggleDrawer(true)}
            >
              MENU <MenuIcon />
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
