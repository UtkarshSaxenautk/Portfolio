import * as React from 'react';
import './First.css'
import utk from '../images/utk_new.png'
import PanToolIcon from '@mui/icons-material/PanTool';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box'
import { Avatar, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const First = () => {
  return (
    
   <div  className="container " >
      <div className="row">
        <div className="col-sm mb-32 md:py-1 sm:pb-12 ,flex justify-center items-center text-center  ">
          
          <ul>
            <li className='text-2xl pl-2'> Hi, I'm Utkarsh <PanToolIcon sx={{color:'yellowgreen'}} /></li>
            <li>Full Stack Developer</li>
            <li>Computer Science Engineering Student</li>
            <li>Based in the India</li>
             <br/>
            <Button variant="contained" color="success">Let's Connect</Button>
            <br />
            <br/>
            <span className='tracking-tight hover:tracking-wide pt-1'><a href='https://www.instagram.com/utkarsh_saxena_utk/' target={'_blank'} rel="noreferrer"><InstagramIcon className='mx-3'/></a><a href='https://www.linkedin.com/in/utkarsh-saxena-5a9034201/' rel="noreferrer" target={'_blank'}><LinkedInIcon className='mx-3'/></a><a rel="noreferrer" href='https://github.com/UtkarshSaxenautk' target={'_blank'}><GitHubIcon className='mx-3'/></a></span>
            
      </ul>
        </div>
        <br />
        <br/>
        <Box  className="py-4 h-40 col-sm ... border-double border-x-2 sm:py-1 flex justify-center items-center  " >
          <i className='fas fa-angle-double-right text-2xl' ></i>
          
            <img className='utkimg py-5 object-scale-down h-96 w-96   ...' src={utk} alt="utkarshImage" />
            
          <i id="aboutme" className='fas fa-angle-double-left text-2xl '></i>
    </Box>
        
    
        </div>
        </div>

  );
}

export default First;
