import React from 'react';
import { Timeline , TimelineItem , TimelineSeparator , TimelineDot , TimelineConnector , TimelineContent } from '@material-ui/lab'
import { Box, Typography, Button , CardActions } from '@mui/material'
import ApiIcon from '@mui/icons-material/Api';
import PublicIcon from '@mui/icons-material/Public';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const Work = () => {
    return (
        
        <Box  className=" flex justify-self-auto mt-32 bg-slate-400" >
       
      <Box className="column-sm w-screen bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 ... ">
          <Typography className='underline decoration-double decoration-black hover:underline   text-center font-mono hover:font-serif  text-3xl antialiased hover:subpixel-antialiased font-semibold ...'>Work Experience</Typography>
          <Box className= "mx-8 mt-12 mb-12 md:flex justify-center  ">
     <ol className="relative border-l border-gray-200 dark:border-gray-700 ">                  
    <li className="mb-10 ml-6">            
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Software Engineering Intern<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-5600 dark:text-gray-200">08/2022 - Present</time>
                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400"><a aria-disabled
                className='text-gray-800' href='https://www.zaubacorp.com/company/YOGI-NETWORKS-LIMITED/U92132TN2003PLC051014' target='_blank' rel="noreferrer"> <b>Yogi Networks</b> <PublicIcon/> </a><ul>
                  <li>Building Microservices</li>
                    <li>Working on project <a className="text-slate-300 hover:text-blue-400" href='https://rabbitloader.com/' target='_blank' rel="noreferrer">RabbitLoader</a><ApiIcon /></li>
                    <li>Testing Golang Functions</li>
                    <li>Technology: Golang</li>
                </ul></p>
        {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
    <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Full Stack Developer Intern</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-5600 dark:text-gray-200">05/2022 - 07/2022</time>
        <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400"><a aria-disabled
                className='text-gray-800' href='https://wizwack.in/' target='_blank' rel="noreferrer" > <b>Wizwack</b> <PublicIcon/> </a><ul>
                  <li>Created different firebase services</li>
                    <li>Working on project <a className="text-slate-300 hover:text-blue-400" href='https://wizwack.in/' target='_blank' rel="noreferrer">Wizwack Game</a><SportsEsportsIcon /></li>
                    <li>Worked on Payment Service , User Service, Wallet Service and Game Service</li>
                    <li>Technologies: Nodejs , Reactjs , Firebase</li>
                </ul></p>
                        </li>
                        
                           
    {/* <li className="ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.2</h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2nd, 2021</time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
    </li> */}
                    </ol>
                    
                </Box>
                 <CardActions id="projects" className='float-right'>
            <a href='/'>
              <Button size="small" className='text-blue-300 bg-gray-700 shadow-lg shadow-cyan-500/50 ...'>Know More</Button>
              </a>
        </CardActions>
                      
            </Box>  
            </Box>
            
    
   
      
  )
}

export default Work