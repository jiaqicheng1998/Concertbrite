import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../store/event';
import { removeEvent } from '../../store/event';
import './SingleEvent.css';
import { NavLink, useHistory } from 'react-router-dom';

const SingleEvent = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchEvents());
    }, []);

    const events = useSelector(state => state.event.entries);
    const user = useSelector(state => state.session.user);

    const eventId = useParams().id;
    const event = events[eventId];

    const handleClick = () => {
        dispatch(removeEvent(eventId));

        history.push('/');
    }

    return (
        <div className='single_event'>
            <div className='event_container'>
                <div className='img_container_single' style={{ backgroundImage: `url(${event?.img_url})` }}>
                </div>
                <div className='info_container_single'>
                    <h2>{event?.title}</h2>
                    <p id='time_single'>{event?.time.slice(0, 10)}</p>
                    <p id='location_single'>{event?.location}</p>
                    {user?.id === event?.user_id && (
                        <div className='delete_and_edit'>
                            <NavLink to={`/events/${eventId}/edit`}>
                                <i id="edit_event" className="fa-solid fa-pen-to-square" />
                            </NavLink>
                            <span id="delete_event_span" onClick={handleClick}>
                                <i id="delete_event" className="fa-solid fa-trash-can" />
                            </span>
                        </div>
                    )}
                    <button>Get Tickets</button>
                </div>
            </div>
            <div className='detailed_info'>
                <div className='detailed_info_main'>
                    <p>{event?.description}</p>
                    <h2>About this event</h2>
                    <p>
                        NOTE: Tickets will only be available online through Concertbrite.
                        No tickets will be sold at the door. Please purchase your tickets in advance.
                        Children under 5 are admitted for free.
                    </p>
                    <p>
                        Discover the world's most exciting music concert experience with your friends
                        and family. {event?.title} will have you in the crowd enjoying the show. experience it live!
                    </p>
                    <h2>What is the setlist?</h2>
                    <p>
                        The setlist for the {event?.title} concert at {event?.location} should
                        feature some of the most memorable songs from the artist mixed in with
                        some more recent work. The {event?.title} setlist may be slightly different
                        than the list of songs performed at other shows.
                    </p>
                    <img src={event?.img_url_two} />
                    <h2> Public Transit</h2>
                    <p>
                        Public Transit to {event?.location} is preferred. You can choose subway or bus to
                        the concert location. NOTICE: please manage your route to the concert arena. I believe you can do that.
                    </p>
                    <h2>If You Drive</h2>
                    <p>
                        Free parking: {event?.location} on Saturday and Sunday. NOTE: PARKING IS LIMITED.
                        Please arrive early for check in and finding the parking seats if you don't want to miss the concert.
                    </p>
                </div>
                <div className='detailed_info_rest'>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-calendar-days" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Date and time</h2>
                            <p>{event?.time.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-location-dot" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Location</h2>
                            <p>{event?.location}</p>
                        </div>
                    </div>
                    <div className='detailed_info_rest_unit'>
                        <div className='detailed_info_rest_icon'>
                            <i className="fa-solid fa-rectangle-xmark" />
                        </div>
                        <div className='detailed_info_rest_text'>
                            <h2>Cancelation Policy</h2>
                            <p>Cancelation up to 7 days before event</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEvent;