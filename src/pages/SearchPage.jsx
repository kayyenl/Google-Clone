import React from 'react';
import { useStateValue } from '../StateProvider';

const SearchPage = () => {
    const [state, dispatch] = useStateValue()

    return (
        <div className='searchpage'>
            {state.term}
        </div>
    );
}

export default SearchPage;
