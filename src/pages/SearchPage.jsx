import React from 'react';
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
    const [state, dispatch] = useStateValue() // can be destructured
    const { data } = UseGoogleSearch(state.term)

    console.log(data)
    return (
        <div className='searchpage'>
            <div className="searchpage__header">
            </div>
            <div className="searchpage__results"></div>
        </div>
    );
}

export default SearchPage;
