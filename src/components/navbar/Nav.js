import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import utk from "../images/Utk.png";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import First from "../Containers/First";
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from "@material-ui/core";
import ListIcon from '@mui/icons-material/List';
import { HashLink } from 'react-router-hash-link' 

const pages = [
  { Name: "About Me", Icon: <InfoIcon />, Path: '/#aboutme' },
  { Name: "Experience", Icon: <WorkHistoryIcon/>, Path: '/#work' },
  { Name: "Projects", Icon: <WorkIcon /> , Path:'/#projects' },
  { Name: "Skills", Icon: <ListIcon/> , Path:'/#skills' },
  { Name: "Contact", Icon: <ConnectWithoutContactIcon />, Path: '/contact' },
  {Name:  "Hire Me" , Icon: <AccessibilityIcon /> , Path: 'https://utkarshsaxenautk.github.io/resume/'}
];

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Nav = (props) => {

  const handleResume = () => {
    fetch('Utkarsh.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className="bg-gradient-to-r from-zinc-300 via-gray-100 to-slate-200 ... text-neutral-800 !important">
        <Container  maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex", textAlign: "right" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={utk}
                sx={{ width: 76, height: 69, margin: 3 }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                  display: { xs: "block", md: "none" , color: "black" },
                }}
              >
                {pages.map((page) => (
                  page.Name === "Hire Me"? <><MenuItem className="bg-white text-black" key="hire-me" onClick={handleCloseNavMenu}>
                    <a className=' visited:text-black' href='https://utkarshsaxenautk.github.io/resume/'>
                    <Typography textAlign="center" className="text-black">
                      <AccessibilityIcon />
                      Hire Me
                      </Typography>
                    </a>
                    </MenuItem></>:
                  <HashLink smooth to = {page.Path} >
                  <MenuItem className="bg-white text-black" key={page.Name} onClick={handleCloseNavMenu}>
                    {/* <a className=' visited:text-black' href={page.Path} > */}
                    <Typography textAlign="center" className="text-black">
                      {page.Icon}
                      {page.Name}
                      </Typography>
                    {/* </a> */}
                    </MenuItem>
                    </HashLink>
                ))}
                
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={utk}
                sx={{ width: 86, height: 86, margin: 2 }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                page.Name === "Hire Me" ? 
                <a className='onhover:text-gray-700 visited:text-black' target={"_blank"} href='https://utkarshsaxenautk.github.io/resume/' >
                <Button
                  key={page.Name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", px: 4 }}
                >
                  <Grid container direction="row" alignItems="center">
                    {/* <a className='onhover:text-gray-700 visited:text-black' href={page.Path} > */}
                    <Grid item>{page.Icon}</Grid>
                      <Grid item>{page.Name}</Grid>
                      {/* </a> */}
                  </Grid>
                </Button></a> :
                <HashLink smooth to = {page.Path
                }>
                <Button
                  key={page.Name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", px: 4 }}
                >
                  <Grid container direction="row" alignItems="center">
                    {/* <a className='onhover:text-gray-700 visited:text-black' href={page.Path} > */}
                    <Grid item>{page.Icon}</Grid>
                      <Grid item>{page.Name}</Grid>
                      {/* </a> */}
                  </Grid>
                </Button>
                  </HashLink>
              ))}
               
              
            </Box>

            <Button 
              onClick={handleResume}
              sx={{
                my: 2,
                color: "black",
                display: "block",
                backgroundColor: "grey",
                float: "right",
                border: "1px solid black",
              }}
            >
              Get Resume
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
          
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Nav;
