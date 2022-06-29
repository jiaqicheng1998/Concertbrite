import React from 'react';
import './bottom.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_icons'>
                <a href='https://github.com/jiaqicheng1998'>
                <i className="fa-brands fa-github fa-2x" />
                </a>
                <a href='https://www.linkedin.com/in/jiaqi-cheng/'>
                <i className="fa-brands fa-linkedin fa-2x" />
                </a>
                <a href='https://www.instagram.com/twosadkids_/'>
                <i className="fa-brands fa-instagram fa-2x" />
                </a>
            </div>
            <div className='footer_links'>
                <a href='https://github.com/jiaqicheng1998/Concertbrite'>Repository  /</a>
                <a href='https://github.com/Dave89rr/GameVault'>  GameVault  /</a>
                <a href='https://www.eventbrite.com/'>  Reference</a>
            </div>
        </div>
    )
}

export default Footer;