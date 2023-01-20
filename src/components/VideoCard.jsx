import React from 'react';
import {Link} from 'react-router-dom';

import {Card, CardMedia, CardContent, Typography} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from '../utils/constants';

const VideoCard = ({id, snippet}) => {
  let {videoId} = id;
  return (
    <Card sx={{ width : {md : '350px', xs : '91%'}, boxShadow : 'none', borderRadius : 0, margin : {xs : '0 auto'}}}>
      <Link to={videoId ? `/videos/${videoId}` : demoThumbnailUrl}>
        <CardMedia
          image ={snippet?.thumbnails?.high?.url}
          alt = {snippet?.title}
          sx={{width : '100%', height : 180}}
        />
      </Link>
      <CardContent
        sx={{
          background : '#1e1e1e',
          height : '106px',
          color : 'white'
        }}
      >
        <Link to={videoId ? `/videos/${videoId}` : demoThumbnailUrl}>
          <Typography variant='subtitle1' fontWeight ='bold' color ='white'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoThumbnailUrl}>
          <Typography variant='subtitle2' fontWeight ='bold' color ='gray'>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{
              fontSize : 12,
              color : 'gray',
              ml : '5px'
            }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard