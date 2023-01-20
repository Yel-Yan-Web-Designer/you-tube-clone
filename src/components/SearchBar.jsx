import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton  } from '@mui/material';  // paper is just div with white bg
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm(''); // when user type it will disappear 
    }
  }
  return (
    <Paper
      component = 'form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius : '5px',
        border : '1px solid #e3e3e3',
        pl : 2,
        mr : {sm : 5},
        boxShadow : 'none',
        width : {sm : '20%', md : '30%'},
        display : 'flex',
        justifyContent : 'space-between'
      }}
    >
      <input 
        type="text"
        placeholder='Search...'
        style={{paddingLeft : '0.1rem'}}
        value = {searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{p : 1, color : 'red'}} aria-label = 'search'>
          <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar;