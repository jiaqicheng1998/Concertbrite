import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchEvents } from '../../store/event';
import './EventList.css'

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.event.entries);

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    return (
        <>
            <div className='banner' style={{ backgroundImage: `url('https://img.wallpapersafari.com/tablet/2560/1700/68/4/3EpGTg.jpg')` }}></div>
            <div className='mainPage'>
                <h1>Popular Events</h1>
                <div className='displayEvents'>
                    {Object.values(events).map(({ id, title, img_url, time, location }) => (
                        <NavLink to={`/events/${id}`} key={id}>
                            <div className='eventCard'>
                                <div className='image_container' style={{ backgroundImage: `url(${img_url})` }}></div>
                                <div className='info_container'>
                                    <h2>{title}</h2>
                                    <p id='time'>{time.slice(0, 10)}</p>
                                    <p id='location'>{location}</p>
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