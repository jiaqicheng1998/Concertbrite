import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import logo from './logo.png'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <div className='signup'>
                <NavLink to='/signup'>Sign Up</NavLink>
                </div>
            </>
        );
    }

    return (
        <nav>
            <div className='logo_container'>
                <NavLink exact to='/'><img className='logo' src={logo} /></NavLink>
            </div>
            <div className='ls_container'>
            {isLoaded && sessionLinks}
            </div>
        </nav>
    );
}

export default Navigation;