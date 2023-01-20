import {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';
import { Box, Stack, Typography } from '@mui/material';
import {useParams, Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';

import {Videos} from './index';
import {fetchFromApi} from '../utils/fetchFromApi';

const Videodetail = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  console.log(videos)

  
  
  useEffect(()=> {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideoDetails(data.items[0]))

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then(data => setVideos(data.items))
  }, [id])
  
  if(!videoDetails?.snippet) return 'Loading...';
  let {snippet : {title, channelId, channelTitle}, statistics : {viewCount, likeCount}} = videoDetails;

  return (
    <Box minHeight ='95vh'>
      <Stack direction ={{xs : 'column', md : 'row'}}>
        <Box flex={1}>
          <Box sx={{width : '100%', position : 'sticky', top : '86px'}}>
            <ReactPlayer url ={`https://www.youtube.com/watch?v=${id}`} controls className='reactPlayer'/>
            <Typography variant='h5' color='white' fontWeight='bold' p={2}>{title}</Typography>
            <Stack direction='row' justifyContent='space-between' py={1} px={2} sx={{color : 'white'}}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant = {{sm : 'subtitle1', md : 'h6'}} color = 'white'>
                    {channelTitle}
                    <CheckCircle sx={{fontSize : '12px', ml :'5px'}}/>
                  </Typography>
                </Link>
                <Stack direction ='row' gap={2} justifyContent ='center' alignItems='center'>
                  <Typography variant='body1' color ='gray'>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' color ='gray'>
                    {parseInt(viewCount).toLocaleString()} likes
                  </Typography>
                </Stack>
            </Stack>
          </Box>
        </Box>
        <Box py={{md : 1, xs : 5}} px={1} >
          <Videos videos={videos} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default Videodetail;