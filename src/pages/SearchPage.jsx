import React from 'react';
import { useStateValue } from '../StateProvider';

const SearchPage = () => {
    const [state, dispatch] = useStateValue() // can be destructured

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
