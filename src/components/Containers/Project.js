import React from "react";
import {
  Typography,
  Box,
} from "@material-ui/core";


import Projects from "./Projects";


const Project = () => {
  return (
    <Box className=" flex justify-self-auto mt-32 bg-slate-400">
      <Box className="column-sm w-screen bg-gradient-to-r from-gray-500 via-gray-400 to-slate-400 ... ">
        <Typography className="underline decoration-double decoration-black hover:underline   text-center font-mono hover:font-serif  text-3xl antialiased hover:subpixel-antialiased font-semibold ...">
          Projects
        </Typography>
        <Box className="mx-8 mt-12 mb-12 md:flex justify-center  ">
          {/* <Stack
            direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      
          >
            <Item className="mt-4 transition ease-in-out delay-150 bg-black  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <Card
                className="h-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
              
              >
                <CardMedia
                  component="img"
                  height="90"
                  image={chat}
                  alt="Chat room"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Chat Room
                  </Typography>
                  <Typography className="text-gray-400" variant="body2" color="text.secondary">
                    A socket io based web app for chatting between users in
                    different rooms. Technologies included are: Node Js, React
                    Js, Socket io, Mongodb, and Express.
                  </Typography>
                </CardContent>
                <CardActions className="inline-block align-text-bottom ...">
                  <Button size="small">Code</Button>
                  <Button size="small">Demo</Button>
                </CardActions>
              </Card>
            </Item>
            <Item className="mt-4 transition ease-in-out delay-150 bg-black  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
              <Card
                className="h-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
              
              >
                <CardMedia
                  component="img"
                  height="90"
                  image={opt}
                  alt="optimizer"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electric Bill Optimizer
                  </Typography>
                  <Typography className="text-gray-400" variant="body2" color="text.secondary">
                    A Mern based web app for optimizing your monthly bill
                                      according to expected bill and practical bill with twilio integration for notifications and hourly alerts.
                  </Typography>
                </CardContent>
                <CardActions className="inline-block align-text-bottom ...">
                  <Button  size="small">Code</Button>
                  <Button  size="small">Demo</Button>
                </CardActions>
              </Card>
            </Item>
            <Item className="mt-4 transition ease-in-out delay-150 bg-black  hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">
               <Card
                className="h-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 ..."
              
              >
                <CardMedia 
                  component="img"
                  height="90"
                  image={hotel}
                  alt="hotel booking"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Booking Site
                  </Typography>
                  <Typography className="text-gray-400" variant="body2" color="text.secondary">
                                      A Modern Web app based on golang and its templates to book hotels and rooms according to location using PostgreSQL database
                                      with mailing functionality.
                  </Typography>
                </CardContent>
                <CardActions className="inline-block align-text-bottom ..." >
                  <Button size="small">Code</Button>
                  <Button size="small">Demo</Button>
                </CardActions>
              </Card>
            </Item>
          </Stack> */}
          <Projects />
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
