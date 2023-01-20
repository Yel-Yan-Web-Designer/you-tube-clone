import React, {useState, useEffect} from 'react';

import {  Stack, Box, Typography } from '@mui/material';

import {Sidebar, Videos} from './index';
import {fetchFromApi} from '../utils/fetchFromApi';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => { 
    fetchFromApi(`search?part=snippet,id&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection : {sx : 'column', md : 'row'}
      }}
    > 
      <Box 
        sx ={{
          height : {sx : 'auto', md : '90vh'},
          px : {sx : 0, md : 1},
          borderRight : '1px solid #3d3d3d'
        }}
      >
      <Sidebar
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
      />
        <Typography variant='body2' sx={{mt : 1.5, color : '#fff'}}>
          copy right 2022 Yel Yan
        </Typography>
      </Box>

      <Box p ={2} sx={{
        height : '92vh',
        flex : 2, // give more space for videos
        mt : {md : 0, sx : 3}
      }}>
        <Typography variant='h5' fontWeight ='bold' mb={3} >
          {selectedCategory} <span style={{color : "red"}}>Videos</span>
        </Typography>

        <Videos videos ={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed