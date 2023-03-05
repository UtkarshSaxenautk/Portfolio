// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import img from '../images/go.png'
// import utk from '../images/Utk.png'
// import Grid from '@mui/material/Grid';
// import HomeIcon from '@mui/icons-material/Home';
// import WorkIcon from '@mui/icons-material/Work';
// import InfoIcon from '@mui/icons-material/Info';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
// import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
// import {HashLink} from 'react-router-hash-link'


// const pages = [{ Name : 'Home', Icon: <HomeIcon/> }, { Name : 'Projects', Icon :<WorkIcon/>}, {Name: 'About Me' , Icon:<InfoIcon/>}, {Name: 'Hire Me' , Icon:<AccessibilityIcon/>}, { Name:'Contact',Icon:<ConnectWithoutContactIcon/>} ];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
  
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
 

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

  

//   return (
//     <AppBar position="static" className='bg-gradient-to-r from-zinc-300 via-gray-100 to-slate-200 ... text-neutral-800 !important'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            
    
          
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' , textAlign:'right' },
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//            <Avatar
//   alt="Remy Sharp"
//   src={utk}
//   sx={{ width: 76, height: 69, margin:3 }}
// />
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
            
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <HashLink smooth to = "/#projects">
//                 <MenuItem key={page.Name} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page.Icon}{page.Name}</Typography>
//                   </MenuItem>
//                   </HashLink>
//               ))}
//               </Menu>
             
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//            <Avatar
//   alt="Remy Sharp"
//   src={utk}
//   sx={{ width: 86, height: 86 , margin:2 }}
// />
//           </Typography>
          
     
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'  } }}>
//             {pages.map((page) => (
//               <HashLink smooth to = "/#projects">
//               <Button
//                 key={page.Name}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block' , px:4 }}
//               >
//                 <Grid container direction="row" alignItems="center">
                
               
//                   <Grid item>
//                 {page.Icon}
//                   </Grid>
//                    <Grid item>
//                  {page.Name}
//                   </Grid>
//                 </Grid>
//                 {/* <Typography>{page.Name}
//                 {page.Icon}</Typography> */}
                
//               </Button>
//               </HashLink>
              
              
//             ))}
            
//             </Box>
            
//           <Button  sx={{ my: 2, color: 'black', display: 'block'   , backgroundColor: 'grey' , float: 'right' , border: '1px solid black'}}
//             >
//                   Let's Talk
//              </Button>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;
