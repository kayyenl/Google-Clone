import React from 'react';
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__header">
                <div className="home__header--left">
                    <Link to='/about'>
                        <p>About</p>
                    </Link>
                    <Link to='/store'>
                        <p>Store</p>
                    </Link>
                </div>
                <div className="home__header--right">
                    <Link to='/gmail'>
                        <p>Gmail</p>
                    </Link>
                    <Link to='/images'>
                        <p>Images</p>
                    </Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home__body"></div>
        </div>
    );
}

export default Home;
