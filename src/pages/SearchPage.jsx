import React from 'react';
import { useStateValue } from '../StateProvider';
import UseGoogleSearch from '../useGoogleSearch';
import Response from '../Response'
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    const [state, dispatch] = useStateValue() // can be destructured
    const { data } = UseGoogleSearch(state.term)
    console.log(data)
    
    const cock = Response
    console.log(cock)

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
                    <div className="searchpage__options">
                        <div className="searchpage__options--left">

                            <div className="searchpage__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchpage__option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchpage__option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchpage__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchpage__option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchpage__option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        <div className="searchpage__options--right">
                            <div className="searchpage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchpage__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            {state.term && (
            <div className="searchpage__results">
                <p className="searchpage__results--count">
                    About {data?.searchInformation.formattedTotalResults} results 
                    ({data?.searchInformation.formattedSearchTime} seconds) for {state.term}
                </p>

                {data?.items.map(item => (
                    <div className="searchpage__result">
                        <a href={item.link} className="searchpage__result--a">
                            {(item.pagemap?.cse_image?.length > 0 &&
                                item.pagemap?.cse_image[0]?.src) &&
                            (<img className='searchpage__result--image'
                                src={item.pagemap.cse_image[0].src}>
                            </img>)
                            }
                           <span className='searchpage__result--link'> {item.displayLink} > </span> 
                        </a>

                        <a href={item.link} 
                        className="searchpage__result--title">
                            <h2>{item.title}</h2>
                        </a>

                        <p className="searchpage__result--snippet">
                            {item.snippet}
                        </p>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
} 

export default SearchPage;
