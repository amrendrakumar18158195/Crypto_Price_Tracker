import React from 'react';
import "./styles.css";
import TemporaryDrawer from './Drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='navbar'>
            <h1 className='logo'> Cryptotracker <span style={{ color: "var(--blue)" }}>.</span></h1>

            <div className='links'>
                <Link to="/">
                    <p className='link'> Home</p>
                </Link>

                <Link to="/compare">
                    <p className='link'> Compare</p>
                </Link>

                {/* <Link to="/watchlist">
                    <p className='link'> Watchlist</p>
                </Link> */}

                <Link to="/Dashboard">
                    <p className='link'> Dashboard</p>
                </Link>
            </div>

            <div className='mobile-drawer'>
                <TemporaryDrawer />
            </div>
        </div>
    );
}

export default Header;
