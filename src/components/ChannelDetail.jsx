import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './index';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  // console.log(channelDetail)
  const {id} = useParams();

  useEffect(()=> {
    fetchFromApi(`channels?part=snippet&id=${id}`)
      .then(data => setChannelDetail(data?.items[0])); // fecth for channel details

    fetchFromApi(`search?channelId=${id}&part=snippet,id&order=date`)
      .then(data => setVideos(data?.items)) // fetch for channel videos
  }, [id])

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background : 'linear-gradient(90deg, rgba(0, 238, 247,1)0%, rgba(206,3, 184, 1)100%, rgba(0,212,255,1)100%)',
          zIndex : 10,
          height : '300px'
        }}/>
        <ChannelCard channelDetail={channelDetail} marginTop ='-110px'/>
      </Box>
      <Box p ='2'>
          <Videos videos ={videos} center = 'center'/>
      </Box>
    </Box>
  )
}

export default ChannelDetail