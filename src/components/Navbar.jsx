import React from 'react';
import { Link } from 'react-router-dom';

import { Stack } from '@mui/material'; // stack for one dimentional
import {SearchBar} from './index';
import { logo } from '../utils/constants';

const Navbar = () => {
  return (
    <Stack direction ="row" 
    alignItems="center" 
    p={2}
    sx={{position : "sticky", top : '0', background : "#000", justifyContent: 'space-between', zIndex : '100'}} 
    >
      <Link to="/" style={{display : 'flex'}}>
        <img src={logo} alt="you tube logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar;