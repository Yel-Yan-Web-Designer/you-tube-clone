import React from 'react';
import {VideoCard, ChannelCard} from './index';
import {Stack, Box} from '@mui/material';

const Videos = ({ videos, center, direction }) => {
  if(!videos.length) return 'Loading...'
  return (
    <Stack
      direction ={direction || 'row'}
      flexWrap = 'wrap'
      gap ={2}
      sx={{
        justifyContent : {md : 'start', sm : 'center'},
        justifyContent : center,
      }}
    >
      {videos.map((item, index) => {
        let {id, snippet} = item;
        return (
          <Box key = {index}>
            {id.videoId && <VideoCard id ={id} snippet ={snippet}/>}
            {id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos;