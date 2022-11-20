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
          <Projects />
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
