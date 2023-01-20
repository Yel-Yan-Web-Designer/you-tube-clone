import React from 'react';
import {Link} from 'react-router-dom';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {

  return (
      <Box sx={{
        boxShadow : 'none',
        borderRadius : '10px',
        width : {md : '350px', xs : '320px'},
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        margin : {md : 'auto', xs : '0 auto'},
      }} style={{ marginTop : marginTop}}>
        <Link to ={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent sx={{
            display : 'flex',
            flexDirection :'column',
            justifyContent : 'center',
            alignItems : 'center',
            textAlign : 'center',
            rowGap : '0.5rem'
          }}>
            <CardMedia
              image = {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              sx={{
                width : '180px',
                height : '180px',
                borderRadius : '50%',
                display : 'flex',
                justifyContent : 'center',
                alignItems : 'center',
              }}
            />
            <Typography variant='h6' color='white'>
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{
              fontSize : 12,
              color : 'gray',
              ml : '5px'
              }}/>
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography variant ='h6' color ='gray'>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>)
            }
          </CardContent>
        </Link>
      </Box>
  )
}

export default ChannelCard;