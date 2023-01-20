import React, {useState, useEffect} from 'react';

import {   Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos} from './index';
import {fetchFromApi} from '../utils/fetchFromApi';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const {searchTerm} = useParams();

  useEffect(() => { 
    fetchFromApi(`search?part=snippet,id&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
      <Box p ={2} sx={{
        height : '92vh',
        flex : 2, // give more space for videos
        mt : {md : 0, sx : 3}
      }}>
        <Typography variant='h5' fontWeight ='bold' mb={3} >
          Search results for <span style={{color : "red"}}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos ={videos}/>
      </Box>
  )
}

export default SearchFeed;