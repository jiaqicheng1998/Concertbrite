import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchEvents } from '../../store/event';
import './EventList.css'

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.event.entries);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    const [showKpop, setShowKpop] = useState(false)
    const [showRock, setShowRock] = useState(false)
    const [showSym, setShowSym] = useState(false)
    const [showHip, setShowHip] = useState(false)
    const [showPop, setShowPop] = useState(false)
    const [showAll, setShowAll] = useState(true)

    const showKpopButton = () => {
        setShowKpop(true)
        setShowRock(false)
        setShowSym(false)
        setShowHip(false)
        setShowPop(false)
        setShowAll(false)
    }

    const showRockButton = () => {
        setShowKpop(false)
        setShowRock(true)
        setShowSym(false)
        setShowHip(false)
        setShowPop(false)
        setShowAll(false)
    }

    const showSymButton = () => {
        setShowKpop(false)
        setShowRock(false)
        setShowSym(true)
        setShowHip(false)
        setShowPop(false)
        setShowAll(false)
    }

    const showHipButton = () => {
        setShowKpop(false)
        setShowRock(false)
        setShowSym(false)
        setShowHip(true)
        setShowPop(false)
        setShowAll(false)
    }

    const showPopButton = () => {
        setShowKpop(false)
        setShowRock(false)
        setShowSym(false)
        setShowHip(false)
        setShowPop(true)
        setShowAll(false)
    }

    const showAllButton = () => {
        setShowKpop(false)
        setShowRock(false)
        setShowSym(false)
        setShowHip(false)
        setShowPop(false)
        setShowAll(true)
    }

    return (
        <>
            <div className='banner' style={{ backgroundImage: `url('https://img.wallpapersafari.com/tablet/2560/1700/68/4/3EpGTg.jpg')` }}></div>
            <div className='mainPage'>
                <h1>Categories</h1>
                <div className='categories-container'>
                    <div className={showKpop ? "curr-selected" : "ind-tag"} onClick={showKpopButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>K-pop</div>
                    <div className={showRock ? "curr-selected" : "ind-tag"} onClick={showRockButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>Rock and Roll</div>
                    <div className={showSym ? "curr-selected" : "ind-tag"} onClick={showSymButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>Symphony</div>
                    <div className={showHip ? "curr-selected" : "ind-tag"} onClick={showHipButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>Hip Hop</div>
                    <div className={showPop ? "curr-selected" : "ind-tag"} onClick={showPopButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>Pop Music</div>
                    <div className={showAll ? "curr-selected" : "ind-tag"} onClick={showAllButton}><div className='music-icon'><i className="fa-solid fa-headphones fa-lg" /></div>See All</div>
                </div>
                <h1>Popular Events</h1>
                <div className='displayEvents'>
                    {showKpop && Object.values(events).filter((event) => event.tag === 'K-pop').map(({ id, title, img_url, time, location, Likes }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p className='time-event'>{time.slice(0, 10)}</p>
                                    <p className='location-event'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    {showRock && Object.values(events).filter((event) => event.tag === 'Rock and Roll').map(({ id, title, img_url, time, location, Likes }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    {showSym && Object.values(events).filter((event) => event.tag === 'Symphony').map(({ id, title, img_url, time, location, Likes }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    {showHip && Object.values(events).filter((event) => event.tag === 'Hip Hop').map(({ id, title, img_url, time, location, Likes }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    {showPop && Object.values(events).filter((event) => event.tag === 'Pop Music').map(({ id, title, img_url, time, location, Likes}) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                    {showAll && Object.values(events).map(({ id, title, img_url, time, location, Likes }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
                                    <p className='liked-event'><i className="fa-solid fa-heart"/> {Likes.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
};

export default EventList;