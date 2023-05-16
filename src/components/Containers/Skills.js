import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Box, Typography ,CardActions , Button } from '@material-ui/core'
import img from '../images/go.png'
import './Skills.css'
import SkillBar from 'react-skillbars'

const Skills = () => {
    const skills = [
        {
            type: 'Golang', level: 73,
            color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
            }
        },
  { type: 'NodeJs', level: 80 ,  color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
            } },
  { type: 'ReactJs', level: 70 ,  color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
            } },
  { type: 'Java', level: 65 ,  color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
        }
        },
             { type: 'DSA', level: 77 ,  color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
            } },
  { type: 'C++', level: 60 , color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
            } },
  { type: 'HTML', level: 85 ,  color: {
                bar: "#323232",
                title: { background: '#36454F', text: "#fff" }
        }
        },
 
];
  return (
    <Box  className=" flex justify-self-auto mt-32  bg-slate-400">
      <Box className="column-sm w-screen bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 ... ">
        <Typography className="underline decoration-double decoration-black hover:underline   text-center font-mono hover:font-serif  text-3xl antialiased hover:subpixel-antialiased font-semibold ...">
          Skills
        </Typography>
              {/* <Box className="mx-8 mt-12 mb-12 md:flex justify-center  "> */}
              <Box className='mt-6'>
                <SkillBar  skills={skills} animationDelay={1000} />  
            {/* <div className='row'>    
            <div className="col-sm skills">
                <div className="details">
                    <span>HTML</span>
                    <span>90%</span>
                </div>
                <div className="bar">
                    <div id="html-bar"></div>
                </div>
            </div>
            <div className="col-sm skills">
                <div className="details">
                    <span>CSS</span>
                    <span>75%</span>
                </div>
                <div className="bar">
                    <div id="css-bar"></div>
                </div>
            </div>
            <div className="col-sm skills">
                <div className="details">
                    <span>Javascript</span>
                    <span>72%</span>
                </div>
                <div className="bar">
                    <div id="js-bar"></div>
                </div>
            </div>
            <div className="col-sm skills">
                <div className="details">
                    <span>jQuery</span>
                    <span>68%</span>
                </div>
                <div className="bar">
                    <div id="jQuery-bar"></div>
                </div>
            </div>
           </div>  
                   */}
                  {/* </Box> */}
              </Box>
              <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" className='text-blue-300 bg-gray-700 shadow-lg shadow-cyan-500/50 ...'>View all</Button>
              </a>
        </CardActions>
      </Box>
    </Box>
    
  )
}

export default Skills