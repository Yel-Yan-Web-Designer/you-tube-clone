import React from 'react';

import {Stack, Box} from '@mui/material';
import {categories } from '../utils/constants';

const Sidebar = ({ selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
      direction ='row'
      sx={{
        overflowY : 'auto',
        flexDirection : {md: 'column'},
        height : {sx : 'auto', md : '95%'},
        rowGap : '10px',
        columnGap : '10px',
        padding : '10px'
      }}
    >
      {categories.map(x => {
        let {name, icon} = x;
        return (
          <button 
            key ={name} 
            className='category-btn'
            style = {{
              background : name === selectedCategory && '#FC1503',
              color : 'white'
            }}
            onClick = {() => {setSelectedCategory(name)}}
          >
            <span style={{color : name === selectedCategory ? 'white' : 'red'}}>{icon}</span>
            <span style={{opacity : name ===selectedCategory ? '1' : '0.7'}}>{name}</span> 
          </button>
        )
      })}
    </Stack>
  )
}

export default Sidebar;