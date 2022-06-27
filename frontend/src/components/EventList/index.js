import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink } from 'react-router-dom';
import { fetchEvents } from '../../store/event';
import './EventList.css'

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector(state=>state.event.entries);

    useEffect(() => {
        dispatch(fetchEvents());
    }, []);

    return (
        <div className='mainPage'>
            <h1>Events</h1>
            <div className='displayEvents'>
                {Object.values(events).map(({id, title, img_url}) => (
                    <div className='eventCard' key={id}>
                        <h2>{title}</h2>
                        <div className='image_container' style={{backgroundImage: `url(${img_url})`}}></div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default EventList;