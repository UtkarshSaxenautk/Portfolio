import React from 'react'
import Navbar from '../navbar/Navbar'
import Nav from '../navbar/Nav'
import Container from "@mui/material/Container";
import First from '../Containers/First';
import Box from "@mui/material/Box";
import About from '../Containers/About';
import Work from '../Containers/Work';
import Project from '../Containers/Project';
import Projects from '../Containers/Projects';
import Skills from '../Containers/Skills';
const Home = () => {
    return (
        <>
        {/* <Navbar /> */}
        <Nav />
        <br />
        <br/>
        <Box className='bg-slate-300 h-screen'>
        <Container sx={{py:20}} className='bg-slate-300 max-w-full'>
            <First />
            <About />
            <Work />
            <Project />
            <Skills />
            {/* <Projects /> */}
          </Container>
          </Box>
        </>
  )
}

export default Home