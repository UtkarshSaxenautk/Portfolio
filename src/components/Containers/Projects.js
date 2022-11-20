import React from 'react'
import './Projects.css'
import chat from '../images/chat.png'
import opt from '../images/opt.png'
import hotel from '../images/hotel.png'
import { Button , CardActions } from '@material-ui/core'

const Projects = () => {
  return (
    <div className="flexbox">
        <div className="bg-gray-300 text-black flexcard flexcardGreen mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div className="flexcardNumber flexcardNumberGreen">01</div>
            <div className="flex flexcardTitle">Chat Room</div>
            <div className="flex flexcardText"> A socket io based web app for chatting between users in
                    different rooms. Technologies included are: Node Js, React
                    Js, Socket io, Mongodb, and Express.</div>
            <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
                  src={chat} alt="" /></div>
              <div className='flex justify-evenly aling-bottom'><CardActions className='float-left'>
            <a href='/'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>  
        </div>
        <div className=" bg-gray-300 text-black  flexcard flexcardBlue mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div className="flexcardNumber flexcardNumberBlue ">02</div>
            <div className="flex flexcardTitle">Bill Optimizer</div>
            <div className="flex flexcardText">A Mern based web app for optimizing your monthly bill
                                      according to expected bill and practical bill with twilio integration for notifications and hourly alerts.</div>
            <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
                  src={opt} alt="" /></div>
              <div className='flex justify-evenly aling-bottom '><CardActions className=' float-left aling-basline-0'>
            <a href='/'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>
        </div>
        <div className="bg-gray-300 text-black flexcard flexcardOrange mt-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
            <div  className=" flexcardNumber flexcardNumberOrange">03</div>
            <div className="flex flexcardTitle">Booking Site</div>
            <div className="flex flexcardText"> A Modern Web app based on golang and its templates to book hotels and rooms according to location using PostgreSQL database
                                      with mailing functionality.</div>
            <div className="flex flexcardImg mt-4 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."><img className="flexcardimgItem"
                  src={hotel} alt="" /></div>
              <div className='flex justify-evenly aling-bottom '><CardActions className='float-left'>
            <a href='/'>
              <Button size="small" >Code</Button>
              </a>
        </CardActions>
             <CardActions className='float-right'>
            <a href='/'>
              <Button size="small" >Demo</Button>
              </a>
        </CardActions></div>
        </div>
       
    </div>
  )
}

export default Projects