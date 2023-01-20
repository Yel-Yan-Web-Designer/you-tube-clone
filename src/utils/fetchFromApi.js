import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {maxResults: '50'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);
  let {data} = response;
  return data;
}


/*
- remove method get cux i will use axios
- save api key to make it private

? WHAT I WANNA DO WITH BASE URL ?
- BASE_URL/getVideos
- BASE_URL/getChannel
- AXIOS get function will take two parameters
- first is url and second is options
*/

/*
? WHAT IS THE DUTY OF fetchFromApi function ?
- Call Api from rapid api 
- pass some dynamic url into axios get function
- We can call this function from any components
*/