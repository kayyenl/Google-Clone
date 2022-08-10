import React from 'react';
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../useGoogleSearch';
import Response from '../Response'
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const SearchPage = () => {
    const [state, dispatch] = useStateValue() // can be destructured
    // const { data } = UseGoogleSearch(state.term)

    const data = Response
    console.log(data)


    return (
        <div className='searchpage'>
            <div className="searchpage__header">
                <Link to="/">
                    <img className='searchpage__logo'
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                    alt="" />
                </Link>
                <div className="searchpage__header--body">
                    <Search hideButtons />
                </div>
            </div> 
            <div className="searchpage__results">
                {state.term}
            </div>
        </div>
    );
}

export default SearchPage;
