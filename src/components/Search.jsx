import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({ hideButtons }) => {
    const [state, dispatch] = useStateValue()
    const [input, setInput] = useState("")
    let navigate = useNavigate()

    function search(event) {
        event.preventDefault();
        console.log('you searched >> ' + input)
        dispatch({ 
            type: actionTypes.SET_SEARCH_TERM,
            term: input })
    }

    return (
        <form className='search'>
            <div className="search__input">
                <SearchIcon className="search__input--icon" />
                <input value={input} onChange={(event) => setInput(event.target.value)}/>
                <MicIcon />
            </div>
            
            {
                hideButtons ?
                <div className="search__button--display-none"> 
                    <Button type='submit' variant='outlined' onClick={(event) => search(event)}>Google Search</Button>
                    <Button type='submit' variant='outlined'>I'm Feeling Lucky</Button>
                </div> :
                <div className="search__buttons"> 
                <Button type='submit' variant='outlined' onClick={(event) => search(event)}>Google Search</Button>
                <Button type='submit' variant='outlined'>I'm Feeling Lucky</Button>
            </div> 
            }
        </form>
    );
} 

export default Search;
