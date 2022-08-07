import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';

const Search = () => {
    const [input, setInput] = useState("")

    function search(event) {
        event.preventDefault();
    }

    return (
        <div className='search'>
            <div className="search__input">
                <SearchIcon className="search__input--icon" />
                <input value={input} onChange={(event) => setInput(event.target.value)}/>
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button variant='outlined' onClick={(event) => search(event)}>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </div>
    );
}

export default Search;
