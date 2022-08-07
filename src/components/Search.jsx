import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors'


const theme = createTheme({
    palette: {
      primary: grey,
    }, 
  });

const Search = () => {
    return (
        <div className='search'>
            <div className="search__input">
                <SearchIcon className="search__input--icon" />
                <input />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button theme={theme} variant='outlined'>Google Search</Button>
                <Button theme={theme} variant='outlined'>I'm feeling lucky</Button>
            </div>
        </div>
    );
}

export default Search;
