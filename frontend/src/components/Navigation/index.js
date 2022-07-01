import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
            <div className='sessionLinks_right'>
                <NavLink id="create_event" exact to='/events/new'>Create Event</NavLink>
                <NavLink id="your_tickets" exact to={`/${sessionUser.id}/orders`}>Your Tickets</NavLink>
                <ProfileButton user={sessionUser} />
            </div>
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