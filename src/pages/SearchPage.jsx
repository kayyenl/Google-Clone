import React from 'react';
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../useGoogleSearch';
import Response from '../Response'

const SearchPage = () => {
    const [state, dispatch] = useStateValue() // can be destructured
    // const { data } = UseGoogleSearch(state.term)

    const data = Response
    console.log(data)
    return (
        <div className='searchpage'>
            <div className="searchpage__header">
                {state.term}
            </div> 
            <div className="searchpage__results"></div>
        </div>
    );
}

export default SearchPage;
