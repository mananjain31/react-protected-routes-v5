import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return <div className='home'>
        <Link to='/loginlogoutcomponent'>
            Login-Logout Page
        </Link>
        <Link to='/app'>
            App (Protected Route)
        </Link>
    </div>
};

export default Home;