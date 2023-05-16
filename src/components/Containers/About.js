/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Box, Card, CardMedia, Typography, CardContent, CardActions, Button, List, ListItem } from '@mui/material'
import go from '../images/go.png'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate()
  return (
    <Box className=" flex justify-self-auto mt-32 bg-slate-400" >
      <Box className="column-sm w-screen bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 ... ">
        <Typography className='underline decoration-double decoration-black hover:underline   text-center font-mono hover:font-serif  text-3xl antialiased hover:subpixel-antialiased font-semibold ...'>About Me</Typography>
        {/* <Box className='flex justify-center pt-1'>
          <CardMedia
        component="img"
        alt="green iguana"
          image={go}
          sx={{ height: "auto", width: "auto" }}
         
      />
        </Box>
       */}
        <CardContent>
          <Typography variant="body2" color="text.secondary" className='flex justify-center'>
            <List>
              <ListItem><AutoStoriesIcon sx={{color:'white' , mr: 2}}  />I'm Utkarsh Saxena a Computer Science Engineering student from I.K. Gujral Punjab Technical University
                Jalandhar, Punjab, India</ListItem>
              <ListItem><AssignmentTurnedInIcon sx={{color:'white' , mr: 2}} />Full Stack Developer</ListItem>
              <ListItem><LanguageIcon sx={{color:'white' , mr: 2}} />I am proficient in backend technologies like node js and golang and in frontend i am a react person. </ListItem>
              <ListItem><FavoriteIcon sx={{color:'white' , mr: 2}} />Love to Learn new Algorithms and solving data structure problems </ListItem>
              <ListItem><TravelExploreIcon sx={{color:'white' , mr: 2}} />Looking for new Challenges and research in Algorithms and ready for full stack web development work </ListItem>
              <ListItem><MusicNoteIcon sx={{color:'white' , mr: 2}} />Music charged</ListItem>
            </List>
          </Typography>
         
        </CardContent>
         <CardActions id="work" className='float-right'>
          <button onClick={() => {navigate('/')}}>
              <Button size="small" className='text-blue-300 bg-gray-700 shadow-lg shadow-cyan-500/50 ...'>Read More</Button>
              </button>
        </CardActions>
        
      </Box>
      {/* <Box className=' column-sm  '> <Box className='flex justify-center'><img src={go} alt="logo "   /></Box> </Box> */}
      
    </Box>
  )
}

export default About